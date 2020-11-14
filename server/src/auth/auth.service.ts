import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { PostgresErrorCode } from '../../postgresErrorCodes.enum';
import { Connection } from 'typeorm';
import { Shelter } from '../entities/shelter.entity';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  private saltRounds = 10;

  constructor(
    private connection: Connection,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {
  }

  public async register(registrationData): Promise<any> {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
        password: hashedPassword
      });
      createdUser.password = undefined;

      return this.login(createdUser);
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async registerShelter(registrationData): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();

    // establish real database connection using our new query runner
    await queryRunner.connect();
    const shelter = await queryRunner.manager.create(Shelter, {phone: '', ...registrationData.shelter});

    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = queryRunner.manager.create(User, {
        ...registrationData,
        password: hashedPassword
      });

      createdUser.shelter = shelter;

      await queryRunner.startTransaction();
      // execute some operations on this transaction:
      await queryRunner.manager.save(shelter);
      await queryRunner.manager.save(createdUser);

      // commit transaction now:
      await queryRunner.commitTransaction();
      // you need to release query runner which is manually created:
      await queryRunner.release();

      createdUser.password = undefined;

      return this.login(createdUser);
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      console.log(JSON.stringify(error));

      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string): Promise<any> {
    try {
      const user = await this.usersService.getByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<any> {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(login);
    if (user && await this.compareHash(pass, user.password)) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  }

  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  login(user: User): any {
    const {password, ...userWithoutPassword} = user;
    return {
      access_token: this.jwtService.sign(userWithoutPassword),
    };
  }
}

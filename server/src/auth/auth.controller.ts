import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiExcludeEndpoint()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }

  @ApiExcludeEndpoint()
  @Post('register')
  async register(@Body() registrationData): Promise<any> {
    return this.authService.register(registrationData);
  }

  @ApiExcludeEndpoint()
  @Post('register-shelter')
  async registerShelter(@Body() registrationData): Promise<any> {
    return this.authService.registerShelter(registrationData);
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}

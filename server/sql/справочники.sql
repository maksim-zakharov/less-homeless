select * from animal

--insert into "user" (id, email, name, password) values
--(1, 'max89701@gmail.com', 'Максим Захаров', '$2b$10$SxhSZXT9ETItmyuyWWvx7.cvg0xsuqMyU5QY2ESixDiZHA/k.EBoi'),
--(2, 'mironova9755317@gmail.com', 'Елена', '$2b$10$SxhSZXT9ETItmyuyWWvx7.cvg0xsuqMyU5QY2ESixDiZHA/k.EBoi'),
--(3, 'Chudinovadesign@gmail.com', 'Ольга Чудинова', '$2b$10$SxhSZXT9ETItmyuyWWvx7.cvg0xsuqMyU5QY2ESixDiZHA/k.EBoi')
--
--DROP SCHEMA public CASCADE;
--CREATE SCHEMA public;
--drop table public.animal 

--copy dog_breed(name)
--FROM 'D:\Projects\less-homeless\server\sql\dog-breeds.csv'
--DELIMITER ','
--CSV HEADER;

--copy cat_breed(name)
--FROM 'D:\Projects\less-homeless\server\sql\cat-breeds.csv'
--DELIMITER ','
--CSV HEADER;

--copy dog_color(name)
--FROM 'D:\Projects\less-homeless\server\sql\dog-colors.csv'
--DELIMITER ','
--CSV HEADER;

--copy cat_color(name)
--FROM 'D:\Projects\less-homeless\server\sql\cat-colors.csv'
--DELIMITER ','
--CSV HEADER;

--copy dog_fur(name)
--FROM 'D:\Projects\less-homeless\server\sql\dog-furs.csv'
--DELIMITER ','
--CSV HEADER;

--copy cat_fur(name)
--FROM 'D:\Projects\less-homeless\server\sql\cat-furs.csv'
--DELIMITER ','
--CSV HEADER;

--copy "ear_type"(name)
--FROM 'D:\Projects\less-homeless\server\sql\ear-types.csv'
--DELIMITER ','
--CSV HEADER;

--copy "tail_type"(name)
--FROM 'D:\Projects\less-homeless\server\sql\tail-types.csv'
--DELIMITER ','
--CSV HEADER;

--drop table public.cat_breed 

--insert into public.pet_gender (name) values
--('Мужской'),
--('Женский')

copy temp_animal(c1,   c2,  c3,   c4,   c5,   c6,   c7,   c8,   c9,   c10,   c11,  c12,
   c13,
   c14,
   c15,
   c16,
   c17,
   c18,
   c19,
   c20,
   c21,
   c22,
   c23,
   c24,
   c25,
   c26,
   c27,
   c28,
   c29,
   c30,
   c31,
   c32,
   c33,
   c34,
   c35,
   c36,
   c37,
   c38,
   c39,
   c40,
   c41,
   c42,
   c43,
   c44,
   c45,
   c46
)
FROM 'D:\Projects\less-homeless\server\sql\dataset-animal.csv'
DELIMITER ','
CSV HEADER;

select * from temp_animal

drop table temp_animal

CREATE TABLE temp_animal(
   c1 VARCHAR(80),
   c2 VARCHAR(80),
   c3 VARCHAR(80),
   c4 VARCHAR(80),
   c5 VARCHAR(80),
   c6 VARCHAR(80),
   c7 VARCHAR(80),
   c8 VARCHAR(80),
   c9 VARCHAR(80),
   c10 VARCHAR(80),
   c11 VARCHAR(80),
   c12 VARCHAR(80),
   c13 VARCHAR(80),
   c14 VARCHAR(80),
   c15 VARCHAR(80),
   c16 VARCHAR(80),
   c17 VARCHAR(80),
   c18 VARCHAR(80),
   c19 VARCHAR(80),
   c20 VARCHAR(80),
   c21 VARCHAR(80),
   c22 VARCHAR(80),
   c23 VARCHAR(80),
   c24 VARCHAR(80),
   c25 VARCHAR(80),
   c26 VARCHAR(80),
   c27 VARCHAR(80),
   c28 VARCHAR(80),
   c29 VARCHAR(80),
   c30 VARCHAR(80),
   c31 VARCHAR(80),
   c32 VARCHAR(80),
   c33 VARCHAR(80),
   c34 VARCHAR(80),
   c35 VARCHAR(80),
   c36 VARCHAR(80),
   c37 VARCHAR(80),
   c38 VARCHAR(80),
   c39 VARCHAR(80),
   c40 VARCHAR(80),
   c41 VARCHAR(80),
   c42 VARCHAR(80),
   c43 VARCHAR(80),
   c44 VARCHAR(80),
   c45 VARCHAR(80),
   c46 VARCHAR(80)
);

insert into public.pet_size (name) values
('малый'),
('средний'),
('крупный')

--insert into public.pet_type (name) values
--('Кошка'),
--('Собака')

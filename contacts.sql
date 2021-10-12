--  CREATE CONTACTS DB

DROP DATABASE IF EXISTS `contacts`;
CREATE DATABASE IF NOT EXISTS `contacts`;
USE `contacts`;

--  CREATE CONTACTS TABLE

CREATE TABLE `contacts` (
   firstName   varchar (40),
   lastName    varchar (40),
   phoneNumber varchar (40),
   email       varchar (40),
   university  varchar (40),
   major       varchar (40)
);

--  INSERT INTO CONTACTS

INSERT INTO `contacts` 
	(firstName,lastName,phoneNumber,email,university,major) 
values 
	('Onyi','Ukay','1234567899','ukaire@hot.com','Sloan','Primer');

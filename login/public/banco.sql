create database sistema_login;
use sistema_login;
create table usuario (
	id int auto_increment primary key,
    nome varchar(255) not null unique,
    senha varchar(255) not null
);
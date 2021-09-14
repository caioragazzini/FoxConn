# FoxConn
Crud Departamento-Funcionario

## Descrição do Projeto
<p align="left">
	Sistema projetado:
	<p>- BackEnd (BackEnd-FoxConn): WebApi desenvolvida em .NET Core, utilizando a linguagem C#, Entity Framework Core Dapper Bancos relacionais MYSQL, Entidades criadas utilizando Code First, seguindo os padrões REST na construção das rotas e retornos, padrão Repository e Unit Of Work e documentação utilizando Swagger)</p>
	<p>-FrontEnd (FoxConn-Angular): desenvolvida em Angular Angular: 12.2.5, typescript 4.3.5</p>
	
### Features
Back End
- [x] EmployeeController
- [x] RulesController


Front End
- [x] Component Employee - Index, Edit, View, Delete
- [x] Component Rule - Index, Edit, View, Delete
- [x] Component Chart - (Grafico Salario-Departamento)


#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- Visual Studio 2019
- MySql 
OS: win32 x64

Angular: 12.2.5
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, material, platform-browser, platform-browser-dynamic
... router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.5
@angular-devkit/build-angular   12.2.5
@angular-devkit/core            12.2.5
@angular-devkit/schematics      12.2.5
@schematics/angular             12.2.5
rxjs                            6.6.7
typescript                      4.3.5

script de DDL MySql
CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
    `ProductVersion` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
) CHARACTER SET utf8mb4;

START TRANSACTION;

ALTER DATABASE CHARACTER SET utf8mb4;

CREATE TABLE `Rules` (
    `RuleId` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(54) CHARACTER SET utf8mb4 NULL,
    `Active` longtext CHARACTER SET utf8mb4 NULL,
    `Created_at` datetime(6) NOT NULL,
    `Modified_at` datetime(6) NOT NULL,
    CONSTRAINT `PK_Rules` PRIMARY KEY (`RuleId`)
) CHARACTER SET utf8mb4;

CREATE TABLE `Employee` (
    `EmployeeId` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(104) CHARACTER SET utf8mb4 NULL,
    `Salary` decimal(8,2) NOT NULL,
    `Gender` longtext CHARACTER SET utf8mb4 NULL,
    `Active` longtext CHARACTER SET utf8mb4 NULL,
    `Created_at` datetime(6) NOT NULL,
    `Modified_at` datetime(6) NOT NULL,
    `RulesRuleId` int NULL,
    `RuleId` int NOT NULL,
    CONSTRAINT `PK_Employee` PRIMARY KEY (`EmployeeId`),
    CONSTRAINT `FK_Employee_Rules_RulesRuleId` FOREIGN KEY (`RulesRuleId`) REFERENCES `Rules` (`RuleId`) ON DELETE RESTRICT
) CHARACTER SET utf8mb4;

CREATE INDEX `IX_Employee_RulesRuleId` ON `Employee` (`RulesRuleId`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210911201644_AjusteDados04', '5.0.9');

COMMIT;

START TRANSACTION;

ALTER TABLE `Rules` RENAME COLUMN `Name` TO `NameRule`;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20210911225634_AjusteDados05', '5.0.9');

COMMIT;

##### 🎲 Rodando o BackEnd e FrontEnd (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/caioragazzini/Foxx-Conn.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw1

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor do BackEnd tem que estar configurado o Localhost - acesse <https://localhost:44316/>
# O BackEnd pode ser testado através do Swagger acessando https://localhost:44316/swagger/index.html
# Executar os comandos "Add-Migration" e "update-database" para utilizar os recurso Migrations do Entity Framework
# O FrontEnd comando ng-serve na pasta FoxConn-Angular
```

###### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Microsoft Visual Studio](https://expo.io/)
- .Net Framework 4.7.2
- .NET Core
- Entity Framework Migrations
- Entity Framework Core Dapper Bancos relacionais MySQL 
- Swagger
-Angular: 12.2.5
-@angular-devkit/architect       0.1202.5
-@angular-devkit/build-angular   12.2.5
-@angular-devkit/core            12.2.5
-@angular-devkit/schematics      12.2.5
-@schematics/angular             12.2.5
-rxjs                            6.6.7
-typescript                      4.3.5


Autor
Caio Ragazzini
(92) 98835-9687


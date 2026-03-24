 TypeScript-PostgreSQL-CLI

A command-line interface (CLI) application built with **TypeScript** to manage products in a **PostgreSQL** database. The project implements full **CRUD operations** (Create, Read, Update, Delete) for products.

Requirements:

- Node.js >= 20.  
- PostgreSQL 15.  

Installation:

1. Clone the repository:

git clone https://github.com/YourUsername/TypeScript-PostgreSQL-CLI.git

cd TypeScript-PostgreSQL-CLI


2. Install dependencies using Yarn:

yarn install


3. Set up the PostgreSQL database:

CREATE DATABASE products_cli_db;


4. Set up environment variables:

cp .env.example .env

Then edit `.env` with your database username, password, host, and database name.

Usage:

Run the CLI commands using Yarn:

yarn start <command>

Available Commands:

- List all products:

yarn start list


- Add a new product:

yarn start add <name> <price>

Example:

yarn start add "PC" 3999


- Get a product by ID:

yarn start get <id>

Example:

yarn start get 1


- Update a product by ID:

yarn start update <id> <name> <price>

Example:

yarn start update 1 "Laptop" 4999


- Delete a product by ID:

yarn start delete <id>

Example:

yarn start delete 1


Notes:

- Make sure you are using **Node.js >= 20 LTS** to match the `@types/node` version.  

.env.example:

DB_HOST=localhost
DB_USER=username
DB_PASS=password
DB_NAME=products_cli_db

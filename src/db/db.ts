// import mysql from "mysql2/promise";

// export const connection = mysql.createConnection({
//   host: "31.220.108.126",
//   user: "root",
//   password: "BmLC9621@?",
//   port: 33060,
//   database: "BellaRosa24",
// });

import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "../entities/Cliente"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [Cliente],
    synchronize: true,
    logging: false,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
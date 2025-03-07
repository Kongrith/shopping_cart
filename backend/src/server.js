// // Patches
// const {inject, errorHandler} = require('express-custom-error');
// inject(); // Patch express in order to use async / await syntax

// // Require Dependencies
import mysql from "mysql2";
import express from "express";
// const express = require("express");
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const helmet = require('helmet');
import testRoute from "./router/testRoute.js";

// const logger = require('./util/logger');

// // Load .env Enviroment Variables to process.env

// require('mandatoryenv').load([
//     'DB_HOST',
//     'DB_DATABASE',
//     'DB_USER',
//     'DB_PASSWORD',
//     'PORT',
//     'SECRET'
// ]);

// const { PORT } = process.env;

// Instantiate an Express Application
const app = express();
const PORT = 3000;

// Configure Express App Instance
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

export const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shop",
});

// // Configure custom logger middleware
// app.use(logger.dev, logger.combined);

// app.use(cookieParser());
// app.use(cors());
// app.use(helmet());

// // This middleware adds the json header to every response
// app.use('*', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// })

// Routes
app.use("", testRoute);

// // Handle errors
// app.use(errorHandler());

// // Handle not valid route
// app.use('*', (req, res) => {
//     res
//     .status(404)
//     .json( {status: false, message: 'Endpoint Not Found'} );
// })

// Open Server on selected Port
app.listen(PORT, () => console.info(`Server listening on port ${PORT}`));

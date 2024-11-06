// framework
const express = require("express");
const fileUpload = require('express-fileupload');
const compression = require('compression')

// external packages
const helmet = require("helmet");
const cors = require("cors");

// app modules/packages/utils
const config = require("./config");
const database = require("./utils/database");
const routes = require("./routes");
const { exceptionConverter, exceptionHandler } = require("./utils/exception");
const { NotFoundException } = require("./utils/customExceptions");

const app = express();
app.use(compression());

// parse application/json

app.use(express.json({ limit: config?.bodyLimit ?? "" }));
app.use(express.urlencoded({ extended: false }));
// app.use(fileUpload());
// security level
// app.use(helmet());
app.use(cors(config?.corsOptions));

// database connection
database.connect();

// api routes
app.use("/api", routes);

// 404 error for any unknown api request
app.use((_, res, next) => {
    next(new NotFoundException());
});

// centralized error handler
app.use(exceptionConverter);
app.use(exceptionHandler);

module.exports = app;

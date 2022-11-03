const express = require("express");
require("dotenv").config();

const connectDb = require("./utils/db/db");

const PORT = process.env.PORT || 8080;

const server = express();
const router = express.Router()

connectDb();

/* const DB_URL = process.env.DB_URL;
console.log(DB_URL); */

server.listen(PORT, () => {

    console.log(`Server running in http://localhost:${PORT}`);

});


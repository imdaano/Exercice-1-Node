const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const connectDb = async () => {

    try {

        const db = await mongoose.connect(DB_URL, {
            useNewUrlParse: true,
            useUnifiedTopology: true
        });
        
        const {name, host} = db.connection;
        console.log("Todo ha ido perito, conectado en la base de datos: " + name + "y en host: " + host);

    } catch (error) {
        console.log("No he podido conectarme a la BBDD", error);
    }
}

module.exports = connectDb;
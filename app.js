const express = require("express");
const mongoose = require("mongoose")
const {MongoClient} = require('mongodb');
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
require("dotenv").config();

mongoose.set("strictQuery", false);

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})

// app.get("/", (req, res) => {
//     res.send("Hello")
// });

router.get("/home", (req, res) => {
    res.send('Hello World, This is home router');
});

router.get("/profile", (req, res) => {
    res.send('Hello World, This is profile router');
})
router.get("/login", (req, res) => {
    res.send('Hello World, This is login router');
})
router.get("/logout", (req, res) => {
    res.send('Hello World, This is logout router');
})

app.use(bodyParser.json())
app.use("/", router);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const start = async() => {
    const client = new MongoClient(process.env.MONGO_URI)
    try {
        await client.connect();

        await listDatabases(client);

        app.listen(process.env.PORT || 3000, () => {
            console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
        });
    } catch (error) {
        console.error(error)
    } finally {
        await client.close();
    }
    
}

start();


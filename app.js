const express = require("express");
const mongoose = require("mongoose");
const { connectToMongo } = require("./src/database");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./documentation/swagger-output.json");
require("dotenv").config();

mongoose.set("strictQuery", false);

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
//Index route
app.use("/contacts", require("./src/routes/contactRoutes"));

const start = async () => {
  try {
    await connectToMongo();
    app.listen(process.env.PORT || 3000, () => {
      console.log("Web Server is listening at port " + (process.env.PORT || 3000));
    });
  } catch (error) {
    console.error(error);
  }
};

start();

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Add, view, edit and delete contact info"
  },
  host: "localhost:3000"
};

const outputFile = "./swagger-output.json";
const routes = ["../app.js"];

swaggerAutogen(outputFile, routes, doc);

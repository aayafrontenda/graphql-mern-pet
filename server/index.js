const express = require("express");
require("dotenv").config();

const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));

module.exports = {};

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// middle-ware:
app.use(cors());
app.use(express.json());
// Db connection:---
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@warehouseuser.yg5fj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("Db connected");
  // perform actions on the collection object
});

app.get("/", (req, res) => {
  res.send("Welcome to my Ware House Server");
});

app.listen(port, () => {
  console.log("This sertver Listening The Port", port);
});

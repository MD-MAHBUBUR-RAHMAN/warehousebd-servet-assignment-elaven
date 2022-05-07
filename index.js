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

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("warehouse").collection("product");

    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to my Ware House Server");
});

app.listen(port, () => {
  console.log("This sertver Listening The Port", port);
});

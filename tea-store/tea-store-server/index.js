const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;
const app = express()

//middlewares
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASS}@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const teaCollection = client.db("teaDb").collection("teas")

    app.get("/teas", async (req, res) => {
      const cursor = teaCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/teas/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await teaCollection.findOne(query)
      res.send(result)
    })

    app.post("/teas", async (req, res) => {
      const teas = req.body;
      console.log(teas)
      const result = await teaCollection.insertOne(teas)
      res.send(result)
    })

    app.delete("/teas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await teaCollection.deleteOne(query)
      res.send(result)
    })

    app.put("/teas/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const options = { upsert: true };
      const updatedTea = req.body;

      const tea = {
        $set: {
          name: updatedTea.tea,
          quantity: updatedTea.quantity,
          supplier: updatedTea.supplier,
          description: updatedTea.description
        }
      }

      const result = await teaCollection.updateOne(filter, tea, options)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/", (req, res) => {
  res.send("Tea server is running...")
})

app.listen(port, () => {
  console.log(`Tea server is running on port: ${port}`)
})
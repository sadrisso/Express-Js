const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const milkCollection = client.db("milksDB").collection("milks");

    app.get("/milks", async (req, res) => {
        const cursor = milkCollection.find()
        const result = await cursor.toArray();
        res.send(result)
    })

    app.post("/milks", async(req, res) => {
        const milks = req.body;
        const result = await milkCollection.insertOne(milks)
        res.send(result)
    })

    app.delete("/milks/:id", async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await milkCollection.deleteOne(query)
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
    res.send("Milk store server running...")
})

app.listen(port, () => {
    console.log(`Milk store running at port: ${port}`)
})
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 9000;
const app = express();

//middlewares
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

    const drinksCollection = client.db("drinksDB").collection("drinks");

    app.get("/drinks", async (req, res) => {
        const quary = drinksCollection.find()
        const result = await quary.toArray()
        res.send(result)
    })

    app.get("/drinks/:id", async (req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const result = await drinksCollection.findOne(filter)
        res.send(result)
    })

    app.post("/drinks", async (req, res) => {
        const drinks = req.body;
        const result = await drinksCollection.insertOne(drinks)
        res.send(result)
    })

    app.put("/drinks/:id", async (req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const updateInfo = req.body;
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                drinkName: updateInfo.drinkName,
                description: updateInfo.description
            }
        }

        const result = await drinksCollection.updateOne(filter, updateDoc, options)
        res.send(result)
    })

    app.delete("/drinks/:id", async (req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const result = await drinksCollection.deleteOne(filter);
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





app.get("/", (req,res) => {
    res.send("Drinks store running..")
})

app.listen(port, () => {
    console.log(`Drinks store running on port: ${port}`)
})
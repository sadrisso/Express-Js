const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 4000;
const app = express()

//middlewares
app.use(cors());
app.use(express.json());

// 0S9u8iO3QhU9VKrA


const uri = "mongodb+srv://teaMaster:0S9u8iO3QhU9VKrA@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    app.post("/teas", async (req, res) => {
        const teas = req.body;
        console.log(teas)
        const result = await teaCollection.insertOne(teas)
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
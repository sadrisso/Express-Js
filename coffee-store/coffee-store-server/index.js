const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 8000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//gdPvUQiBvGHL2E7I
//coffeeMaster

// const uri = "mongodb+srv://coffeeMaster:gdPvUQiBvGHL2E7I@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://coffeeMaster:gdPvUQiBvGHL2E7I@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    res.send("Coffee Making Server is Running..")
})

app.listen(port, () => {
    console.log(`Coffee Making Server is Running On Port: ${port}`)
})
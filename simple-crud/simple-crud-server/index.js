const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 7000;
const app = express()


app.use(cors())
app.use(express.json())

const users = {
    name: "Sabila",
    age: 33
}

const uri = "mongodb+srv://shoeb-drisso:vb7UmqvbjaQ.K2g@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
        await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("My crud is running")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    const user = req.body;
    console.log("USer", user)
})

app.listen(port, () => {
    console.log(`My crud is running on port ${port}`)
})
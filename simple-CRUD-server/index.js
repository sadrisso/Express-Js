const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 7000;
const app = express()


app.use(cors())
app.use(express.json())

// vb7UmqvbjaQ.K2g


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

    const database = client.db("usersDB");
    const usersCollection = database.collection("users");

    app.post("/users", async(req, res) => {
        const user = req.body;
        console.log("New user: ", user)
        const result = await usersCollection.insertOne(user);
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
    res.send("Simple CRUD is running..")
})

app.listen(port, () => {
    console.log("CRUD is running..")
})
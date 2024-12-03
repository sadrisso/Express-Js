const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 4000;
const app = express()


//middlewares
app.use(cors())
app.use(express.json())


//MONGO DB CODE STARTS FROM HERE-------------------------------------------------------------------------------
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.oq68b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const playerCollection = client.db("playerDB").collection("players")

        app.post("/users", async (req, res) => {
            const user = req.body;
            const result = await playerCollection.insertOne(user)
            res.send(result)
        })

        app.get("/users", async (req, res) => {
            const cursor = playerCollection.find()
            const result = await cursor.toArray();
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);
//MONGO DB CODE ENDS HERE---------------------------------------------------------------------------------------




app.get("/", (req, res) => {
    res.send("Player Management Server Running...")
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})
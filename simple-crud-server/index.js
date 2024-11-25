const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 7000;
const app = express()


app.use(cors())
app.use(express.json())

const users = {
    name: "Sabila",
    age: 33
}


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
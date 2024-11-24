const express = require("express")
const app = express()
const port = process.env.PORT || 5000

const cors = require("cors")

//moddleware
app.use(cors())

const users = [
    {id: 1, name: "Sabana", email: "sabana@gmail.com"},
    {id: 2, name: "Sabnoor", email: "sabnoor@gmail.com"},
    {id: 3, name: "Sabila", email: "sabila@gmail.com"},
    {id: 4, name: "Sohana", email: "sohana@gmail.com"},
]

app.get("/", (req, res) => {
    res.send("users management server is running")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    console.log("Post req hitting")
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`users management app is running on port : ${port}`)
})
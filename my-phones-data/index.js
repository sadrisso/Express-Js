const express = require("express")
const app = express()
const port = 2000;
const phones = require("./phones.json")

app.get("/", (req, res) => {
    res.send("My phone data comming sooooon..")
})

app.get("/data", (req, res) => {
    res.send("This is phone data you will get here soon..")
})

app.get("/phones", (req, res) => {
    res.send(phones)
})

app.get("/phones/:id", (req, res) => {
    //finding id from daynamic route
    const id = parseInt(req.params.id)

    //getting details by matching id
    const phone = phones.find((phone) => phone.id === id)

    //and set the matched id
    res.send(phone)
})

app.listen(port, () => {
    console.log(`My port running on ${port}`)
})
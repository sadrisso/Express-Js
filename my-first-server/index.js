const express = require("express")
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("This is my first server..")
});

app.listen(port, () => {
    console.log(`Example app running on: ${port}`)
});
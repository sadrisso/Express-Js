const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 9000;
const app = express();



app.use(cors());
app.use(express.json());




app.get("/", (req,res) => {
    res.send("Drinks store running..")
})

app.listen(port, () => {
    console.log(`Drinks store running on port: ${port}`)
})
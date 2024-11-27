const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());




app.get("/", (req, res) => {
    res.send("Milk store server running...")
})

app.listen(port, () => {
    console.log(`Milk store running at port: ${port}`)
})
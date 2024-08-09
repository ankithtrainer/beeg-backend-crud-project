// Server.js
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET Request Successfull!");
    res.send("Get Req Successfully initiated");
})

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
})



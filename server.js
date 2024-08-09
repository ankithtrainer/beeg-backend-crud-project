const express = require('express');
const app = express();
app.get("/api" , (req,res) => {
    res.json(
        {"user": ["Alok" , "Sudev" , "Manish"]

        });

})

app.get("/test", (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
   res.end('Cannot ' + req.method + ' ' + req.url);

    console.log("GET Request Successfull!");
    res.send("Get Req Successfully initiated");
})

app.post("/storecontact",(req, res) => {
    
    res.send("Get Req Successfully initiated");
})


app.listen(5000,()=> console.log(" Server started at port 5000"));
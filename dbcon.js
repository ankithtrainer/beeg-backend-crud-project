const express = require('express');
const mongoose = require("mongoose");
const server = '127.0.0.1:27017'; 
const app = express();

/*
mongoose.connect(dburl,{useNewUrlParser:true})

const con  = mongoose.connection;

con.on('open',function(){
    console.log('DB Connected ');
})
*/

mongoose.connect(`mongodb://${server}/myprofiledb`, {
    /*useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false */
}).then(()=> {
    console.log(`Connection Successful`);
}).catch(()=> {
    console.log(`Connection Failed `);
})





//app.listen(9000,()=> console.log(" Server started at port 9000"));

//https://www.youtube.com/watch?v=eYVGoXPq2RA
// Naveen Reddy

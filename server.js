const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routing = require('./routing/main');
const conn = require('./helpers/database');
//config
conn();
dotenv.config();
// express body parser middleware function
app.use(express.json());
//server
app.use("/",routing)
.listen(process.env.PORT,()=>{
    console.log("Server is Running :", process.env.PORT);
});

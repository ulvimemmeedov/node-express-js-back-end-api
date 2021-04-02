const express = require('express');
const routing = express.Router();
const User = require('../controllers/usersController');

routing
.get("/",(req,res)=>{
    res.send("home");
})
.get("/services",(req,res)=>{
    res.send("services");
})
.get("/users",(req,res)=>{
    res.send("users");
})
.post("/users",User)
// .post("/users/:id",User)
.get("/product",(req,res)=>{
    res.send("product");
})
.get("*",(req,res)=>{
    res
    .status(404)
    .send("404")
});

module.exports = routing
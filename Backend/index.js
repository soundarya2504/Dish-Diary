/*const express =require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(3002,()=>{
    console.log("server is running on the port 3002")
})*/

const express=require('express')
const app = express()
const fs = require('fs')
app.get('/users',(req,res)=>{
    const userData =fs.readFileSync("./data.json",'utf-8')
    res.send(userData)
})
app.listen(3003,()=>{
   console.log("server is running on post 3003")
})


const express =require('express')
const router =express.Router()
router.get('/',(req ,res)=>{
    res.send("product fetched")
})
router.get('/get/:id',(req,res)=>{
    res.send(req.params.id)
})
router.get('/get',(req,res)=>{
    res.send(req.query.filter)
})
router.get('/get/:state/:city',(res,res)=>{
    res.send(req.params.state,req.params.city)
})
router.get('/read/:key([0-9]{4})',(req,res)=>{
    res.send(req.params.key)
})
router post('/post',(req,res)=>{
    res.send("product created")
})
module.exports =router
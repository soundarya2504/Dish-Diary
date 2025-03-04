const express=require('express')
const router=express.Router()
const StudentModel=require('../model/StudentModel')
const { response } = require('../app')

//localhost:3001/students/create
router.post('/create',(req,res)=>{
    let students=new StudentModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        marks:req.body.marks,
        address:req.body.address
    })
    students.save()
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
}
)
//localhost:3000/Students/read/Adam
/*router.get('/read/:firstName',(req,res)=>{
    studentModel.find({firstName:req.params.firstName})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3000/students/get/?id=
router.get('/get',(req,res)=>{
    studentModel.findById(req.query.id)
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3000/students/update/?id=
router.put('/update',(req,res)=>{
    const idQuery=req.query.id
    studentModel.findByIdAndUpdate(idQuery,{age:req.body.age})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})
//localhost:3000/students/update/Adam
router.put('/update/:name',(req,res)=>{
    nameParams=req.params.firstName
    studentModel.findOneAndUpdate(nameParams,{age:req.body.age})
    .then(response=>res.send(response))
    .catch(err=>res.send(err))

})
//localhost:3000/students/delete/?id=
router.delete('/delete',(req,res)=>{
    const idQuery=req.query.id
    studentModel.d=findByIdAndDelete(idQuery)
    .then(response=>res.send(response))
    .catch(err=>res.send(err))
})*/
module.exports=router

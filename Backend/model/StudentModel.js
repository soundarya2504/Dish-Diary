const mongoose=require('mongoose')
const studentSchema =mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    marks:Number,
    address:String
})
const StudentModel=new mongoose.model('students',studentSchema)  
module.exports=StudentModel
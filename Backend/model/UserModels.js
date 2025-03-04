
const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:Number,
    isVerified:{
        type:Boolean,default:false
    }
},{timestamps:true})
const UserModels=new mongoose.model('users',studentSchema)
module.exports=UserModels

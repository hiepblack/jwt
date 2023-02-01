import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:'username is required',
        minlength:3,
        maxlength:100
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100
    }
})

export const Users = mongoose.model('Users',userSchema);
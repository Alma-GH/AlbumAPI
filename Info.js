import mongoose from "mongoose";

const Info = new mongoose.Schema({
    theme: {type:String, required: true},
    format: {type:Boolean, required:true},
    newID: {type:Number, required: true},
    

    password:   {type:String, required:true},
    auth:       {type: Boolean}
})

export default  mongoose.model("Information", Info)
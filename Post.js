import mongoose from "mongoose";

const Table = new mongoose.Schema({
    id: {type:String, required:true},
    text: {type:String},
    bookmark: {type:String},
    img: {type:String},
})

export default mongoose.model("Table", Table)

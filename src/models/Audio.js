import mongoose from "mongoose";

const Audio = new mongoose.Schema({
    audio: {type:String}
})

export default  mongoose.model("Audio", Audio)
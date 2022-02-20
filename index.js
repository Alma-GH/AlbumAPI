import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload";

const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb+srv://alma:2012@cluster0.li58n.mongodb.net/Album?retryWrites=true&w=majority"

const app = express()
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://album-client.herokuapp.com/pages/album.html");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS")
  next();
})



app.use(express.json())
app.use(express.static("./static"))
app.use(fileUpload({}))
app.use("/api", router)

async function startApp(){
  try{
    await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
    app.listen(PORT,()=>console.log("Start server on port " + PORT))
  }catch (e){
    console.log(e)
  }
}

startApp()


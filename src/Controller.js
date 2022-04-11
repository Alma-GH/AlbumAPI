
import Service from "./Service.js";

class Controller{

  async getAllTables(req,res){
      try{
        const posts = await Service.getAll()
        return res.json(posts)
      }catch (e){
        res.status(500).json(e)
      }
  }

  async getInfo(req,res){
    try{
      const info = await Service.getInfo()
      return res.json(info)
    }catch (e){
      res.status(500).json(e)
    }
  }

  async getAudio(req,res){
    try{
      const audio = await Service.getAudio()
      return res.json(audio)
    }catch (e){
      res.status(500).json(e)
    }
  }


  async updateInfo(req,res){
    try{
      const updatedPost = await Service.updateInfo(req.body)
      return res.json(updatedPost)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

  async updateTables(req,res){
    try{
      const updatedPost = await Service.updateTables(JSON.parse(req.body.Prop), req.files)
      return res.json(updatedPost)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

  async updateAudio(req,res){
    try{
      const updatedAudio = await Service.updateAudio(JSON.parse(req.body.Prop), req.files)
      return res.json(updatedAudio)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

}

export default new Controller()
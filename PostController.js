
import PostService from "./PostService.js";

class PostController{

  async getAllTables(req,res){
      try{
        const posts = await PostService.getAll()
        return res.json(posts)
      }catch (e){
        res.status(500).json(e)
      }
  }

  async getInfo(req,res){
    try{
      const info = await PostService.getInfo()
      return res.json(info)
    }catch (e){
      res.status(500).json(e)
    }
  }

  async getAudio(req,res){
    try{
      const audio = await PostService.getAudio()
      return res.json(audio)
    }catch (e){
      res.status(500).json(e)
    }
  }


  async updateInfo(req,res){
    try{
      const updatedPost = await PostService.updateInfo(req.body)
      return res.json(updatedPost)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

  async updateTables(req,res){
    try{
      const updatedPost = await PostService.updateTables(JSON.parse(req.body.Prop), req.files)
      return res.json(updatedPost)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

  async updateAudio(req,res){
    try{
      const updatedAudio = await PostService.updateAudio(JSON.parse(req.body.Prop), req.files)
      return res.json(updatedAudio)
    }catch (e){
      res.status(500).json(e.massage)
    }
  }

}

export default new PostController()
import Table from "./models/Table.js"
import Info from "./models/Info.js"
import Audio from "./models/Audio.js"
import FileService from "./FService.js"


class Service{


    async getAll(){
          const posts = await Table.find()
          return posts
    }

    async getInfo(){
        const info = await Info.find()
        return info[0]
    }

    async getAudio(){
      const audio = await Audio.find()
      return audio
  }



    async updateInfo(post){
        await Info.deleteMany()
        const updatedPost = await Info.create(post)
        return updatedPost
    }

    async updateTables(posts, imgs){
      await Table.deleteMany()
      let updatedPosts = []

      for(let img in imgs){
        FileService.saveFile(imgs[img], "img") 
        posts[+img].img = imgs[img].name
      }
      console.log("TABLES:")
      console.log(imgs)
      console.log(posts)
      for(let post of posts){
        const updatedPost = await Table.create(post)
        updatedPosts.push(updatedPost)
      }
      
      return updatedPosts
    }

    async updateAudio(posts, musics){
      await Audio.deleteMany()
      let updatedAudios = []

      console.log("MUSICS:")
      console.log(musics)
      console.log(posts)

      for(let music in musics){
        console.log(music)
        FileService.saveFile(musics[music], "music") 
      }

      for(let post of posts){
        const updatedAudio = await Audio.create(post)
        updatedAudios.push(updatedAudio)
      }
      return updatedAudios
    }

}

export default new Service()

import * as path from 'path';
import fsExtra from "fs-extra"
import * as fs from "fs"

class FileService {
    saveFile(file, folder) {
        try {

            fs.mkdir("static", err=>{
                fs.mkdir("static/" + folder, err=>{
                    const filePath = path.resolve('static/' + folder, file.name);
                    file.mv(filePath);
                })
            })

        } catch (e) {
            console.log(e)
        }
    }

    clearDir(path){
        fsExtra.emptyDir(path)
    }
}

export default new FileService();
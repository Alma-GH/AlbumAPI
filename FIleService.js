
import * as path from 'path';
import fsExtra from "fs-extra"

class FileService {
    saveFile(file, folder) {
        try {
            const filePath = path.resolve('static/' + folder, file.name);
            file.mv(filePath);
        } catch (e) {
            console.log(e)
        }
    }

    clearDir(path){
        fsExtra.emptyDir(path)
    }
}

export default new FileService();
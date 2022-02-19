import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router()



router.get("/tables", PostController.getAllTables)
router.get("/info", PostController.getInfo)
router.get("/audio", PostController.getAudio)

router.put("/info", PostController.updateInfo)
router.put("/tables", PostController.updateTables)
router.put("/audio", PostController.updateAudio)



export default router
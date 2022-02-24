import {Router} from "express";
import Controller from "./Controller.js";

const router = new Router()



router.get("/tables", Controller.getAllTables)
router.get("/info", Controller.getInfo)
router.get("/audio", Controller.getAudio)

router.put("/info", Controller.updateInfo)
router.put("/tables", Controller.updateTables)
router.put("/audio", Controller.updateAudio)



export default router
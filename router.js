import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router()

// router.post("/tables", PostController.create)
// router.post("/info", PostController.createInfo)
// router.post("/image", PostController.createImg)

router.get("/tables", PostController.getAllTables)
router.get("/info", PostController.getInfo)
router.get("/audio", PostController.getAudio)

router.put("/info", PostController.updateInfo)
router.put("/tables", PostController.updateTables)
router.put("/audio", PostController.updateAudio)

// router.get("/posts/:id", PostController.getOne)
// router.delete("/posts/:id", PostController.delete)

export default router
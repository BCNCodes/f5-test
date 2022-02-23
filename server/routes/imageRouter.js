import imageController from "../controller/imageCtrl.js";
import { Router } from "express";



const router = Router();

router.route("/")
    .get(imageController.getImages)
    .post(imageController.postImage);

export default router;
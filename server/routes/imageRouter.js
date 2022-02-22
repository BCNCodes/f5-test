import imageController from "../controller/imageCtrl.js";
import { Router } from "express";



const router = Router();

router.route("/")
  .get(imageController.getImages);

export default router;
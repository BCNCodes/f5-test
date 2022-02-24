import { Router } from "express";
// import multer from "multer";
import imageController from "../controller/imageCtrl.js";
import { uploadFile } from "../helper/fileUploader.js";

const router = Router();

router.route("/")
    .get(imageController.getImages)
    .post(uploadFile.single('file'),imageController.postImage);

export default router;
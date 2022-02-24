// import images from '../data/images.js';
import { findAllImages,insertOneImage } from '../model/imageDA0.js';

const imageController = {
    /* should return an array of images */
    getImages: async (req, res) => {
        try {
            const result = await findAllImages();
            console.table(result);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    /* should save an image */
    postImage: async (req, res) => {
        try {

            if(!req.file){
                res.status(400).json({error:"No file uploaded"});
            }else{
                const {originalname} = req.file;

                // req.body.filename = 'test';
                const image = {name: originalname};

                const result = await insertOneImage(image);
                console.log(result);
                res.status(201).json(result);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default imageController;


// import images from '../data/images.js';
import { findAllImages } from '../model/imageDA0.js';

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
    }
};

export default imageController;


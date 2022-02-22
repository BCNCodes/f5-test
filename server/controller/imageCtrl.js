import images from '../data/images.js';

const imageController = {
    /* should return an array of images */
    getImages: (req, res) => {
        try {
            res.json(images);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default imageController;


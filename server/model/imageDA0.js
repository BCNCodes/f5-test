import connection from "../database/mongoManager.js";
import {config} from "../config.js";

export const findAllImages = async () => {
    const conn = await connection(config);
    const images = await conn.db().collection("images").find({}).toArray();
    conn.close();
    return images;
};

export const insertOneImage = async (image) => {
    const conn = await connection(config);
    const result = await conn.db().collection("images").insertOne(image);
    conn.close();
    return result;
};

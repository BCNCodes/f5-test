import connection from "../database/mongoManager.js";
import {config} from "../config.js";

export const findAllImages = async () => {
    const conn = await connection(config);
    const images = await conn.db().collection("images").find({}).toArray();
    conn.close();
    return images;
};

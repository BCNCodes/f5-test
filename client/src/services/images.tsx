import axios from "axios";

const baseUrl = `http://localhost:3456/api/image`
const serviceImage = {

    async getAll():Promise<Image[]> {
        const response = await axios.get(baseUrl)
        return response.data
    },

    // async getOne(id:string):Promise<Image>{
    //     const response = await axios.get(baseUrl.concat('/',id))
    //     return response.data
    // },

    async save(Image:Image):Promise<Image>{
        const response = await axios.post(baseUrl,Image)
        return response.data
    },

    async update(id:string,changes:any):Promise<Image>{
        const response = await axios.patch(baseUrl.concat('/',id),changes)
        return response.data
    },

    async delete(id:string):Promise<Image>{
        const response = await axios.delete(baseUrl.concat('/',id))
        return response.data
    }

}

export default serviceImage
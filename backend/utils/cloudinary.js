import { v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name : process.env.cloud_name,
    api_key : process.env.cloud_api_key,
    api_secret : process.env.cloud_api_secret
})

export {cloudinary}
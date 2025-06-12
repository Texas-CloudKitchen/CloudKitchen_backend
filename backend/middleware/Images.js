import { cloudinary } from "../utils/cloudinary.js";
import fs from "fs"

const uploadImage = async(filepath,folder) => {
    try{
        const result = await cloudinary.uploader.upload(filepath, {folder})
        fs.unlinkSync(filepath)
        return {publicId : result.public_id, secure_url : result.secure_url}   
    }
    catch(err){
        throw err
    }
}

const deleteImage= async(public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(result); // { result: 'ok' } on success
  } catch (error) {
    console.error("Error deleting file:", error);
  }
}

export {uploadImage, deleteImage}
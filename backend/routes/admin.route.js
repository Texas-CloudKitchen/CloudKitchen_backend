//create admin
//analysis
//total transaction
//reports
//buisness approval
// delete and add the user

import express from "express";
import { deleteAllUser, seeAlluser } from "../controllers/admin.controller.js";

const adminRouter = express.Router()

adminRouter.get("/seeUsers", seeAlluser)
adminRouter.get("/delUsers", deleteAllUser)

export {adminRouter}
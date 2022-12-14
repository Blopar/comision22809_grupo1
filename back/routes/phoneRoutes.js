import express from "express"
import { createComment, getPhoneComments } from "../controllers/commentsControllers_BBDD.js"

import { getAllSpec, getPhone, getPhonesBrands } from "../controllers/phoneControllers_BBDD.js" 


const router = express.Router()

router.get ("/", getAllSpec)
router.get ("/:id",getPhone)
router.get ("/brands/:marca_id",getPhonesBrands)
router.post ("/:id",createComment)

 

export default router
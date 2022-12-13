import express from "express"
import { createComment, getPhoneComments } from "../controllers/commentsControllers_BBDD.js"

import { getAllSpec, getPhone, getPhonesBrands } from "../controllers/phoneControllers_BBDD.js" 


const router = express.Router()

router.get ("/", getAllSpec)
router.get ("/:id",getPhone)
router.get ("/brands/:marca_id",getPhonesBrands)
router.post ("/:id",createComment)
/*router.post ("/",createBlog)
router.put("/:id",updateBlog)
router.delete("/:id",deleteBlog) */ 
 

export default router
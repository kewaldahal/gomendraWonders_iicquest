import { Router } from "express";
const router = new Router();

import blogController from '../controllers/blog.controller.js'

router.get('/', blogController.getBlogs);
router.get("/:id", blogController.getSingleBlog);
router.post("/", blogController.postBlog);
router.patch("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);


export default router;
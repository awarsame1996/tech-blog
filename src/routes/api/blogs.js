const { Router } = require('express');

const {
	getAllBlogs,
	getSingleBlog,
	getMyBlog,
	createBlog,
	updateBlog,
	deleteBlog,
} = require('../../controllers/api/blogs');

const router = Router();

router.get('/', getAllBlogs);

router.get('/:id', getSingleBlog);

router.get('/:id', getMyBlog);

router.post('/', createBlog);

router.put('/:id', updateBlog);

router.delete('/:id', deleteBlog);

module.exports = router;

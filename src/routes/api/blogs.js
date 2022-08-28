const { Router } = require('express');
const {
	createBlog,
	updateBlog,
	deleteBlog,
} = require('../../controllers/api');

const router = Router();

router.post('/', createBlog);

router.put('/:id', updateBlog);

router.delete('/:id', deleteBlog);

module.exports = router;

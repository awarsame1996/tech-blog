const { Router } = require('express');

const router = Router();

const {
	createComment,

	deleteComment,
} = require('../../controllers/api/comments');

router.post('/', createComment);

router.delete('/:id', deleteComment);

module.exports = router;

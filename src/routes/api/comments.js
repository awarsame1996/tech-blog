const { Router } = require('express');
const { createComment, deleteComment } = require('../../controllers/api');

const router = Router();

router.post('/', createComment);

router.delete('/:id', deleteComment);

module.exports = router;

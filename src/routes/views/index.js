const { Router } = require('express');
const { renderHomePage } = require('../../views');

const router = Router();

router.get('/', renderHomePage);

module.exports = router;

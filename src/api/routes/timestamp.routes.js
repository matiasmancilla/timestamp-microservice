const { Router } = require('express');
const controller = require('../controllers/timestamp.controller');

const router = Router();

router.get('/:time', controller.getTimestamp);

module.exports = router;

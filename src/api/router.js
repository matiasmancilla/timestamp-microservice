const express = require('express');
const router = express.Router();

const timestampRouter = require('./routes/timestamp.routes');

router.use('/api/timestamp', timestampRouter);

module.exports = router;

const express = require('express');
const app = express();

const routes = require('./api/router');
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});

module.exports = app;

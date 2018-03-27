const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

var apiRoutes = require('./apiRoutes');

app.use("/api", apiRoutes);

app.get('/home', (req, res) => {
  res.send({ message: 'Access Node API' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
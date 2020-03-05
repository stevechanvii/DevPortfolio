const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// listen to environment variable called port, default 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

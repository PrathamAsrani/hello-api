const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello From Docker'})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
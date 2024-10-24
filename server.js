const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/', (req, res) => {
  exec('php index.php', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



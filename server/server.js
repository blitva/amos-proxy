const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
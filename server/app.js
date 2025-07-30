require("dotenv").config();
const path = require('path')
const express = require('express');
const cors = require('cors');
const userdata = require('./routes/data');
const bodyParser = require('body-parser');

const app = express(); 

app.use(cors());
app.use(express.json())
app.use('/api/users' , userdata)

//if (process.env.NODE_ENV === 'production') {
//  app.use(express.static(path.join(__dirname, '../frontend/build')));
//  app.get('*', (req, res) =>
//    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
//  );
//}

app.listen(5000, () => {
  console.log('Server running on port 5000');
});


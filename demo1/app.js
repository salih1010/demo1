const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://sb:12345@18.222.196.32:27017/cool_db',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Setting = require('./models/setting');

app.get('/', (req, res) => {
  Settings.find()
    .then(Settings => res.send(200, { Settings }))
    .catch(err => res.status(404).json({ msg: 'No Settings found' }));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));

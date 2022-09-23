require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true });

mongoose.connection.on('error', () => {
  console.log('Error connecting database');
});

mongoose.connection.once('open', () => {
  console.log('Database successfully connected');
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port http://localhost:${process.env.PORT}`),
);
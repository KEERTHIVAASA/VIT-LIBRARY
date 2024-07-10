const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Not typically necessary for MongoDB connection

const mongoURI = process.env.mongo_url;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB Connection Successful');
});

connection.on('error', (err) => {
  console.error('MongoDB Connection Error:', err);
});

module.exports = connection;

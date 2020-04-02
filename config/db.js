const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(
      `MongoDb connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Unable to connect to the database ${error.reason}`.red.bold);
  }
};

module.exports = connectDB;

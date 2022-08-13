const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Connecting with the database.");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(`Error connecting to the database! ${err}`));
};

module.exports = connectDatabase;

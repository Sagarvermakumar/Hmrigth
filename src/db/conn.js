

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const connection = await new mongoose.connect("mongodb+srv://hmright_userMessage:hmright@cluster0.kbkygrl.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`mongodb connected: ${connection.connection.host}`)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
module.exports = connectDB;
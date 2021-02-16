const mongoose = require('mongoose');

const connectDB = async() => {
        try {
           const connect = await mongoose.connect('mongodb+srv://abnation123:abnation123@cluster0.wgnqy.mongodb.net/authentication', {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
           })
           console.log(`MONGODB CONNECTED: ${connect.connection.host}`);
         } catch (error) {
             console.log('Connection Error');
             process.exit(1);
        }
} 


module.exports = connectDB;



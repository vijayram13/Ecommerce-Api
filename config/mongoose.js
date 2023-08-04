const mongoose = require('mongoose');
// // connect Local mongoDB 
// mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
// .then(() =>{console.log("MongoDB connected Successfully.." );})
// .catch(() =>{console.log("MongoDB is not connected");});

// uri of cloud mongoDB
const cloudDB = process.env.MongoDB;
// make connection to cloud mongoDB
mongoose.connect(cloudDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{console.log("Cloud MongoDB connected Successfully..");})
.catch((err) =>{console.log("Cloud MongoDB is not connected",err);});






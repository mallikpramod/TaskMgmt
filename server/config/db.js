const mongoose = require('mongoose');


// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser: true,});
//   console.log('he')
//   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
// };

const connectDB = (uri)=>{
    return mongoose.connect(uri,{
           useNewUrlParser: true, 
           useUnifiedTopology:true,
        })
}


module.exports =connectDB



import mongoose from 'mongoose';


const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


 const connectToDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/Banker', dbOptions).then(()=>{      
      console.log('successfully connected to database');
    }).catch((err)=>{console.log("DataBase Error",err);
    })
  };

  export default connectToDatabase ;
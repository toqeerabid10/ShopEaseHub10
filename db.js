 const mongoose =require('mongoose');


  const  connectdb=async ()=>{
    try{
        const con=await mongoose.connect('mongodb://localhost:27017/Ecommerce');
        console.log('MongoDb is connected  successfully' )
    }
    catch(error){
        console.log('Error occured '+ error);
    }
}

module.exports = connectdb;
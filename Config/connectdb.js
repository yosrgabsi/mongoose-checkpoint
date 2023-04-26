const mongoose= require('mongoose')
const connectdb=async()=>{
    try{
       await  mongoose.connect('mongodb+srv://ranimgabsi:ltOyICxF4rT7Y4PA@cluster0.uahoqn8.mongodb.net/test')
        console.log('you are connected to ur db ' );
    }catch(err){
        console.log(err);
    }
}


module.exports=connectdb
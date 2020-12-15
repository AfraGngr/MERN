const mongoose = require("mongoose");


const DB = async () =>{
    try{

        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex:true,
            useFindAndModify: false,
        });
            console.log("Succesfully connected to the db")
    }
    catch (err) {
        console.log("Error connecting DB", error)
    }
};

module.exports = DB;
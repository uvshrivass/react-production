const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://ujjwal:connectmenow@ds161285.mlab.com:61285/visitordata',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})

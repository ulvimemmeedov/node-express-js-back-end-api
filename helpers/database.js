const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect("mongodb+srv://ulvimemmedov:0519770884@ulvimemmedov.1rkuq.mongodb.net/clusterrr?retryWrites=true&w=majority", { 
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("mongodb connection success");
    })
    .catch (err => {
        console.error(err);
    })
};
module.exports = connectDatabase;
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}



const mongoose = require('mongoose');
const app = require('./app');




mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('db connect ');

    app.listen(process.env.PORT, ()=>console.log(`Server listen on port ${process.env.PORT}`));

}).catch(err => handleError(err));

const mongoose = require('mongoose');
require('dotenv').config();

exports.connect=()=>
{
    mongoose.connect(process.env.MONGODB_URL).then(console.log("db successfully connected"))
    .catch((error)=>
    {
        console.log("DB connection error: " + error)
        process.exit(1)
    })
}
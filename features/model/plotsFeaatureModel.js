const mongoose = require('mongoose');
const plotSchema = new mongoose.Schema({
    nearby:{
        type:String
    },
    range:{
        type:String
    },
    features:{
        type:String
    }
})
module.exports = mongoose.model('plotfeatures',plotSchema);
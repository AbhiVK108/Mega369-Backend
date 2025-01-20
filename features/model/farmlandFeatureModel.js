const mongoose = require('mongoose');
const farmlandSchema = new mongoose.Schema({
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
module.exports = mongoose.model('farmlandfeatures',farmlandSchema);
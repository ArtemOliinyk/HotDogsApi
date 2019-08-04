const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotDogScheme = new Schema({
    title: {
        type: String,
        required: true,
        max: 30
    },
});

// Export the model
module.exports = mongoose.model('HotDog', HotDogScheme);
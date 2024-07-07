// const mongoose = require('mongoose')

// const { Schema } = mongoose;

// const feedbackSchema = new Schema({
//     itemname: {
//         type: String,
//         require: true
//     },
//     review: {
//         type: String,
//         require: true
//     },

//     date: {
//         type: Date,
//         default: Date.now
//     }

// });
// module.exports = mongoose.model('feedback', feedbackSchema)



const mongoose = require('mongoose')

const { Schema } = mongoose;

const feedbackSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
    },
    email: String,


    createdAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('feedback', feedbackSchema)


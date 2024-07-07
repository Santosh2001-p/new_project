const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    location: {
        type: String,
        default: "local",
    },

    email: {
        type: String,
        trim: true,
        minlength: 3,
    },
    photoURL: {

        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3fcFPDIsYDqZlXko3-ZGsL&ust=1714712417929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDHruGX7oUDFQAAAAAdAAAAABAE",
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    pincode: {
        type: Number,

        default: '0100000',

    },
    landmark: {
        type: String,
        default: 'local'
    },
    platno: {
        type: String,
        default: 'local'
    },
    village: {
        type: String,
        default: "local"
    }
    , mobile: {
        type: Number,
        default: '1234567890'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
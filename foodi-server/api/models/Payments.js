const mongoose = require('mongoose');
const { Schema } = mongoose;
const paymentSchema = new Schema({
    transitionId: String,
    email: String,
    price: Number,
    add_ress: Array,
    quantity: Number,
    status: String,
    itemsName: Array,
    cartItems: Array,
    menuItems: Array,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
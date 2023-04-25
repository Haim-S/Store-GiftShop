const {Schema, model} = require("mongoose");
// const bcrypt = require("bcrypt");


const orderSchema = new Schema({
    client: { 
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    creatAt: {type: Date, default: Date.now()},
    products: [{
        type: String
    }],
    total: {type: Number}

});

const Order = model("Order", orderSchema);

module.exports = Order;
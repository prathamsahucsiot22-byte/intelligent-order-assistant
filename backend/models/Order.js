const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },

        items: [
            {
                itemName: {
                    type: String,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],

        status: {
            type: String,
            default: "Confirmed"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);
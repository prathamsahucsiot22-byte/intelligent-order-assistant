const express = require("express");

const router = express.Router();

const Order = require("../models/Order");

router.post("/create", async (req, res) => {
    try {

        const { customerName, items } = req.body;

        const newOrder = new Order({
            customerName,
            items
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            order: newOrder
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Unable to create order"
        });
    }
});

module.exports = router;
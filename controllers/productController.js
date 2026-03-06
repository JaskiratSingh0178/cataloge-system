const Product = require('../models/Product');

// Get Product with Aggregation (Avg Rating)
exports.getProductDetails = async (req, res) => {
    try {
        const product = await Product.aggregate([
            { $match: { name: "Premium Headphones" } },
            {
                $addFields: {
                    avgRating: { $avg: "$reviews.rating" }
                }
            }
        ]);
        res.json(product[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Stock logic
exports.updateStock = async (req, res) => {
    const { sku, quantity } = req.body;
    try {
        const updated = await Product.findOneAndUpdate(
            { "variants.sku": sku },
            { $inc: { "variants.$.stock": quantity } },
            { new: true }
        );
        res.json({ message: "Stock Updated", updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
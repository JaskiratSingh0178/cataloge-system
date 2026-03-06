const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const seedData = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    
    const sampleProduct = {
        name: "Premium Headphones",
        category: "Electronics",
        variants: [
            { sku: "HP-BL-001", color: "Black", price: 199.99, stock: 15 },
            { sku: "HP-WH-001", color: "White", price: 209.99, stock: 8 }
        ],
        reviews: [
            { userId: "65f4a8b7c1e6a8c1f4b8c7d1", rating: 5, comment: "Excellent sound quality" }
        ]
    };

    await Product.deleteMany({}); // Clears old data
    await Product.create(sampleProduct);
    console.log("✅ Sample data added!");
    process.exit();
};

seedData();
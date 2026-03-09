require("dotenv").config();
const express = require("express");

const app = express();

const products = [
  {
    name: "Sony WH-1000XM5",
    price: "₹34,990",
    category: "Premium Headphones"
  },
  {
    name: "Bose QuietComfort Ultra",
    price: "₹35,900",
    category: "Premium Headphones"
  },
  {
    name: "Apple AirPods Max",
    price: "₹59,900",
    category: "Premium Headphones"
  },
  {
    name: "Sennheiser Momentum 4",
    price: "₹29,990",
    category: "Premium Headphones"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Premium Headphones Catalog",
    products: products
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


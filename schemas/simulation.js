const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  asset_name: String,
  asset_type: String,
  ticker: String,
  quantity: Number,
  purchase_date: Date,
  purchase_price: Number
});

const portfolioSchema = new mongoose.Schema({
  last_update: {
    type: Date,
    default: Date.now
  },
  owner_id: String,
  assets: [assetSchema]
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;




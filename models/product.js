// models/product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  desc: String,
  hsn_code: String,
  cas_no: String,
  manufacturer: String,
  application: [String],
  packing: [String],
  uses: [String],
  specification1: [Object],
  specification2: Object,
  image: String,
}, {
  timestamps: true
});

export default mongoose.model('product', productSchema);

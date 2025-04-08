// routes/productRoutes.js
import express from 'express';
import ProductModel from '../models/product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.findById(id);
  res.json(products);
});

router.post('/', async (req, res) => {
  const { title
    , desc
    , hsn_code
    , cas_no
    , manufacturer
    , application
    , packing
    , uses
    , specification1
    , specification2
    , image } = req.body;
  const product = await ProductModel.create({
    title
    , desc
    , hsn_code
    , cas_no
    , manufacturer
    , application
    , packing
    , uses
    , specification1
    , specification2
    , image
  });
  res.json(product);
});

export default router;

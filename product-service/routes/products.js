var express = require('express');
var router = express.Router();

const { createProduct, getAllproducts, getProductById } = require('../services/products')

router.get('/', async function(req, res) {
  try {
    const products = await getAllproducts()

    res.status(200).json({data: products})
  } catch (e) {
    // log
    res.status(500).json({error: 'Internal server error'})
  }
});

router.get('/:id', async function(req, res) {
  try {
    const product = await getProductById(req.params.id)

    res.status(200).json({data: product})
  } catch (e) {
    // log
    res.status(500).json({error: 'Internal server error'})
  }
});

router.post('/', async function(req, res) {
  
  try {
    const result = await createProduct(req.body)

    res.status(201).json({message: result})
  } catch (e) {
    // log
    res.status(500).json({error: 'Internal server error'})
  }
});

module.exports = router;

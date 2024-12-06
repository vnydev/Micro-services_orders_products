var express = require('express');
var router = express.Router();
const { createOrder, getOrderById } = require('../services/orders')


router.get('/:id', async function(req, res) {
  try {
    const order = await getOrderById(req.params.id)

    res.status(200).json({data: order})
  } catch (e) {
    // log
    res.status(500).json({error: 'Internal server error'})
  }
});

router.post('/', async function(req, res) {
  try {
    const result = await createOrder(req.body)

    res.status(201).json({message: result})
  } catch (e) {
    // log
    res.status(500).json({error: 'Internal server error'})
  }
});

module.exports = router;

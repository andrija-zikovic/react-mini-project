const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/productsController');

router.route('/')
    .get(productsController.getAllProducts);

router.route('/:title')
    .get(productsController.getSpecificProducts);

module.exports = router;
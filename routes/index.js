'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.get('/product', auth, ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product',auth, ProductCtrl.saveProduct)
api.put('/product/:productId', auth, ProductCtrl.updateProduct)
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct)
api.post('/signin', userCtrl.signIn)
api.post('/signup', userCtrl.signUp)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: ' Token acceso'})
})


module.exports = api

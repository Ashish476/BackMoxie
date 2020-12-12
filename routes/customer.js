const express = require('express')
const router = express.Router()


const CustomerController = require('../controllers/CustomerController')
const upload = require('../middleware/upload')


router.get('/',CustomerController.index)
router.post('/show',CustomerController.show)
router.post('/store',upload.single('avatar'),CustomerController.store)
router.post('/update',CustomerController.update)
router.post('/delete',CustomerController.destroy)

module.exports =router
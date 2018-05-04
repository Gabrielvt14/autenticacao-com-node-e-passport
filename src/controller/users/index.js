const express = require('express')

const router = express.Router()

router.post('/', require('./create'))
router.get('/new', require('./new'))

module.exports = router

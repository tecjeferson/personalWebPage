const router = require('express').Router()
const homeController = require('../controllers/homeController')
const aboutController = require('../controllers/aboutController')
const curriculoController = require('../controllers/curriculoController')
const contactController = require('../controllers/contactController')

router.get('/', homeController.index)
router.get('/about', aboutController.index)
router.get('/curriculo', curriculoController.index)
router.get('/contact', contactController.index)

module.exports = router
const express = require('express');
const router = express.Router();
const hotDogController = require('../controllers/HotDogController');

router.get('/getAll', hotDogController.getHotDogs);

router.post('/create', hotDogController.createHotDog);

router.put('/update', hotDogController.updateHotDog);

router.delete('/delete', hotDogController.deleteHotDog);

module.exports = router;
const express = require('express');
const router = express.Router();
const hotDogController = require('../controllers/HotDogController');

router.get('/getAll', hotDogController.getHotDogs);

router.post('/hotdog', hotDogController.createHotDog);

router.put('/hotdog', hotDogController.updateHotDog);

router.delete('/hotdog', hotDogController.deleteHotDog);

module.exports = router;
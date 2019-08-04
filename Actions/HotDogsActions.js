const HotDog = require('../models/HotDogModel');

exports.createHotDog = async (req, res) => {
    const hotDog = new HotDog(
        {
            title: req.body.title,
        }
    );
    try {
        const response = await hotDog.save();
        res.send(response);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.getHotDogs = async (req, res) => {
    try {
        const response = await HotDog.find();
        res.send(response);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.updateHotDog = async (req, res) => {
    try {
        const response = await HotDog.findByIdAndUpdate(req.body._id, {title: req.body.title});
        res.send(response);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.deleteHotDog = async (req, res) => {
    try {
        const response = await HotDog.findByIdAndRemove(req.body._id);
        res.send(response);
    } catch (e) {
        res.status(500).send(e.message);
    }
};
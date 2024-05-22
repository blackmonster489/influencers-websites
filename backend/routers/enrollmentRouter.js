const express = require('express');
const router = express.Router();
const Model = require('../models/enrollmentModel')


// router.get('/del', (req, res) => {
//     res.send('delete response')
// });
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/check-enrollment', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(404).json({ message: 'not found' })
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyinfluencer/:id', (req, res) => {
    Model.find({ influencer: req.params.id }).populate('campaign')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;
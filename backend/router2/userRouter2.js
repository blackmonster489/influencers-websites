const express = require('express');
const router = express.Router();
const Model = require('../models2/usermodel2')


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
module.exports = router;
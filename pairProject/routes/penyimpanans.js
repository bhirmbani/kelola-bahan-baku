var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Penyimpanan.findAll()
    .then((penyimpanans) => {
      res.render('penyimpanans/daftarPenyimpanan', {penyimpanans: penyimpanans});
    }).catch((err) => {
      res.send(err);
    });
});

router.get('/tambahPenyimpanan', (req, res, next) => {
  
    res.render('penyimpanans/tambahPenyimpanan');
})

router.get('/detailPenyimpanan', (req, res, next) => {

    res.render('penyimpanans/detailPenyimpanan');
})

router.get('/editPenyimpanan', (req, res, next) => {
    res.render('penyimpanans/editPenyimpanan');
})



module.exports = router;

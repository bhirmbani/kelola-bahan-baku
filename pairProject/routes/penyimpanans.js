var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('penyimpanans/daftarPenyimpanan');
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

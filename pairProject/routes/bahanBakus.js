var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('bahanBakus/daftarBahanBaku');
});

router.get('/tambahBahanBaku', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('bahanBakus/tambahBahanBaku');
});

router.get('/editBahanBaku', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('bahanBakus/editBahanBaku');
});

module.exports = router;

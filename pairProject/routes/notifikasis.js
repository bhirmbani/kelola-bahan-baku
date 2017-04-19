var express = require('express');
var router = express.Router();

/* GET users listing. */
// render halaman daftar notifikasi
router.get('/', function(req, res, next) {
    res.render('notifikasis/daftarNotifikasi');
});
module.exports = router;

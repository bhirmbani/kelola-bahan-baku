var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.BahanBaku.findAll()
    .then((bahanBakus) => {
      if(bahanBakus) {
        res.render('bahanBakus/daftarBahanBaku', {bahanBakus: bahanBakus});
      } else {
        res.render('bahanBakus/daftarBahanBaku', {bahanBakus: null});
      }

    }).catch((err) => {
      res.send(err);
    });
    // res.render('index', { title: 'Express' });
});

router.get('/tambahBahanBaku', function(req, res, next) {

    // res.render('index', { title: 'Express' });
    res.render('bahanBakus/tambahBahanBaku');
});

// router.post('/tambahBahanBaku/tambah', function(req, res, next) {
//     let penyimpanan = req.body.penyimpanan;
//     let tglPembelian = req.Body.tglPembelian;
//     let jmlTepung = req.Body.jmlTepung;
//     let tglKadaluarsaTepung = req.Body.tglKadaluarsaTepung;
//     let jmlGulaPasir = req.Body.jmlGulaPasir;
//     let tglKadaluarsaGulaPasir = req.Body.tglKadaluarsaGulaPasir;
//     models.Pembelian.create({tanggalBeli:tglPembelian, idPenyimpanan:penyimpanan})
//       .then((beli) => {
//         if (jmlTepung) {
//           models.BahanBeli.create({jumlah:jmlTepung, idBahanBaku:5, tanggalExp:tlgKadaluarsaTepung, idStatus:null, idPembelian:beli.id })
//             .then().catch();
//           }
//     }).catch();
//
//
//
//     // res.render('index', { title: 'Express' });
//     res.render('bahanBakus/tambahBahanBaku');
// });


router.get('/editBahanBaku', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('bahanBakus/editBahanBaku');
});

module.exports = router;

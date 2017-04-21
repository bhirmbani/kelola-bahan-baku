var express = require('express');
var router = express.Router();
var models = require('../models');
const sisaWaktu = require("../helpers/helpers.js").sisaWaktu;

/* GET users listing. */
// render halaman daftar notifikasi
router.get('/', function(req, res, next) {
  models.BahanBeli2.findAll({
    include: [
      {
        model: models.BahanBaku
      }, {
        model: models.Pembelian,
        include: [
          models.Penyimpanan
        ]
      }
    ]
  }).then((bahanBelis) => {
    let array = [];
    bahanBelis.forEach((bahanBeli) => {
      let obj = {
        "id": bahanBeli.id,
        "jumlah": bahanBeli.jumlah,
        "tanggalExp": bahanBeli.tanggalExp,
        "idBahanBaku": bahanBeli.idBahanBaku,
        "sisaWaktu": sisaWaktu(bahanBeli.tanggalExp, new Date()),
        "idStatus": bahanBeli.idStatus,
        "BahanBaku": bahanBeli.BahanBaku,
        "Pembelian": bahanBeli.Pembelian,
      };
      array.push(obj);
    });
    // res.json(array);
    res.render('notifikasis/daftarNotifikasi', {bahanBelis: array});
  }).catch();
    // res.render('notifikasis/daftarNotifikasi');
});
module.exports = router;

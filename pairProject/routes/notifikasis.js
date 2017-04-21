var express = require('express');
var router = express.Router();
const models = require('../models');
const sisaWaktu = require("../helpers/helpers.js").sisaWaktu;
const timeConvert = require("../helpers/helpers.js").timeConvert;
const tanggalh7 = require("../helpers/helpers.js").tanggalh7;

/* GET users listing. */
// render halaman daftar notifikasi
router.get('/', function(req, res, next) {
  models.BahanBeli.findAll({
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
        "tanggalBeli" : timeConvert(bahanBeli.Pembelian.tanggalBeli),
        "tanggalExp": timeConvert(bahanBeli.tanggalExp),
        "idBahanBaku": bahanBeli.idBahanBaku,
        "sisaWaktu": sisaWaktu(bahanBeli.tanggalExp, new Date()),
        "tanggalh7": timeConvert(tanggalh7(bahanBeli.tanggalExp)),
        "idStatus": bahanBeli.idStatus,
        "BahanBaku": bahanBeli.BahanBaku,
        "Pembelian": bahanBeli.Pembelian,
      };
      array.push(obj);
    });
    // res.json(array);
    res.render('notifikasis/daftarNotifikasi', {bahanBelis: array});
  }).catch((err) => {
    res.send(err);
  });
});
module.exports = router;

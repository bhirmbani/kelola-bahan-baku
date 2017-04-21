var express = require('express');
var router = express.Router();
var models = require('../models');
const sisaWaktu = require("../helpers/helpers.js").sisaWaktu;
const timeConvert = require("../helpers/helpers.js").timeConvert;

/* GET users listing. */
// render halaman daftar notifikasi
router.get('/', function(req, res, next) {
    models.Pembelian.findAll({
      include: [models.Penyimpanan]
    })
    .then(datas => {
      let arrDatas = [];
      datas.forEach((data) => {
        let obj = {
          "id": data.id,
          "tanggalBeli": timeConvert(new Date(data.tanggalBeli)),
          "idPenyimpanan": data.idPenyimpanan,
          "createdAt": timeConvert(data.createdAt),
          "updatedAt": timeConvert(data.updatedAt),
          "Penyimpanan": data.Penyimpanan
        };
        arrDatas.push(obj);
      });
      // res.json(arrDatas);
      res.render('pembelians/daftarPembelian', {datas:arrDatas});
    })
    .catch(err => {
      console.log(err);
    })

});

router.get('/detailPembelian/:id', (req,res,next) => {
  var id = req.params.id;

  models.Pembelian.findOne({
    where: {id:id}, include:[models.Penyimpanan]
  })
  .then(datas => {

    models.BahanBeli.findAll({
      where: {idPembelian:id},attributes: ['id', 'jumlah','tanggalExp','idStatus'], include:[models.BahanBaku,models.Status]
    })
    .then(arrBahan => {

      let arrBahanEditTgl = [];
      arrBahan.forEach(bahan => {
        let obj = {
          "id": bahan.id,
          "jumlah": bahan.jumlah,
          "tanggalExp": timeConvert(bahan.tanggalExp),
          "BahanBaku": bahan.BahanBaku
        }
        arrBahanEditTgl.push(obj);
      });

      let datasEditTgl = [];
        let newObj = {
          "id": datas.id,
          "tanggalBeli": timeConvert(datas.tanggalBeli),
          "idPenyimpanan": datas.idPenyimpanan,
          "tempatPenyimpanan": datas.Penyimpanan.tempat,
          "Penyimpanan": datas.Penyimpanan
        }
        datasEditTgl.push(newObj);

      res.render('pembelians/detailPembelian', {datas:datas,arrBahan:arrBahanEditTgl});
      // res.json(datasEditTgl);
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/tambahPembelian', (req, res,next) => {
  models.Penyimpanan.findAll()
  .then(datas => {
    res.render('pembelians/tambahPembelian', {datas:datas});
  })
})

router.post('/tambahPembelian', (req,res,next) => {
  var tglPembelian = req.body.tglPembelian;
  var tmptPenyimpanan = req.body.tmptPenyimpanan;

  models.Pembelian.create({
    tanggalBeli: tglPembelian,
    idPenyimpanan: tmptPenyimpanan
  })
  .then(datas => {
    res.redirect('/pembelians');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/editPembelian/:id', (req,res,next) => {
  var id = req.params.id;

  models.Pembelian.findById(id)
  .then(datas => {
    models.Penyimpanan.findAll()
    .then(arrPenyimpanan => {
      res.render('pembelians/editPembelian', {datas:datas, arrPenyimpanan:arrPenyimpanan});
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/editPembelian', (req, res,next) => {
  var id = req.body.id;
  var tglPembelian = req.body.tglPembelian;
  var tmptPenyimpanan = req.body.tmptPenyimpanan;

  models.Pembelian.update({
    tanggalBeli: tglPembelian,
    idPenyimpanan: tmptPenyimpanan
  }, {
    where: {
      id : id
    }
  })
  .then(datas => {
    res.redirect('/pembelians');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/hapusPembelian/:id', (req,res,next) => {
  var id = req.params.id;

  models.Pembelian.destroy({
    where : {
      id: id
    }
  })
  .then(datas => {
    res.redirect('/pembelians');
  })
  .catch(err => {
    console.log(err);
  })

})

module.exports = router;

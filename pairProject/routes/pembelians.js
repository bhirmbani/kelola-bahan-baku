var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
// render halaman daftar notifikasi
router.get('/', function(req, res, next) {
    models.Pembelian.findAll({
      include: [models.Penyimpanan]
    })
    .then(datas => {
      res.render('pembelians/daftarPembelian', {datas:datas});
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
      where: {idPembelian:id}, include:[models.BahanBaku,models.Status]
    })
    .then(arrBahan => {
      res.render('pembelians/detailPembelian', {datas:datas,arrBahan:arrBahan});
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

var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Penyimpanan.findAll()
    .then((datas) => {
      res.render('penyimpanans/daftarPenyimpanan', {datas: datas});
    }).catch((err) => {
      res.send(err);
    });
});

router.get('/tambahPenyimpanan', (req, res, next) => {
    res.render('penyimpanans/tambahPenyimpanan');
})

router.post('/tambahPenyimpanan/', (req,res,next) => {
  var namaPenyimpanan = req.body.namaPenyimpanan;
  var keterangan = req.body.ketPenyimpanan;

  models.Penyimpanan.create({
    tempat: namaPenyimpanan,
    keterangan: keterangan
  })
  .then(datas => {
    res.redirect('/penyimpanans');
  })
  .catch(err => {
    console.log(err);
  })

})

router.get('/detailPenyimpanan/:id', (req, res, next) => {
    var id = req.params.id;
    models.Penyimpanan.findById(id)
    .then(datas => {
      res.render('penyimpanans/detailPenyimpanan', {datas:datas});
    })

})

router.get('/editPenyimpanan/:id', (req, res, next) => {
    var id = req.params.id;
    models.Penyimpanan.findById(id)
    .then(datas => {
      res.render('penyimpanans/editPenyimpanan', {datas:datas});
    })
})

router.post('/editPenyimpanan/', (req,res,next) => {
  var id = req.body.id;
  var namaPenyimpanan = req.body.namaPenyimpanan;
  var keterangan = req.body.ketPenyimpanan;

  models.Penyimpanan.update({
    tempat: namaPenyimpanan,
    keterangan: keterangan
  }, {
    where: {
      id: id
    }
  })
  .then(datas => {
    res.redirect('/penyimpanans');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/hapusPenyimpanan/:id', (req,res,next) => {
  var idPenyimpanan = req.params.id;

  models.Pembelian.findAll({
    where : {
      idPenyimpanan : idPenyimpanan
    }
  })
  .then(datas => {
    if(datas.length == 0){
      models.Penyimpanan.destroy({
        where:{
          id: idPenyimpanan
        }
      })
      .then(items => {
        res.redirect('/penyimpanans')
      })
    } else {
      res.redirect('/penyimpanans')
    }
  })
  .catch(err => {
    console.log(err);
  })
})



module.exports = router;

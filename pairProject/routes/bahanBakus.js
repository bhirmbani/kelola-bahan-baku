var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

    // res.render('index', { title: 'Express' });
});

router.get('/tambahBahanBaku/:id', function(req, res, next) {
  var idPembelian = req.params.id;
  models.BahanBaku.findAll()
  .then(datas => {
    res.render('bahanBakus/tambahBahanBaku', {datas:datas,idPembelian:idPembelian});
  })
    // res.render('bahanBakus/tambahBahanBaku', {id:id});
});

router.post('/tambahBahanBaku', function(req, res, next) {
    var idPembelian = req.body.idPembelian;
    var bahanBaku = req.body.bahanBaku;
    var jmlBahan = req.body.jmlBahan;
    var tglKadaluarsa = req.body.tglKadaluarsa;
    var idStatus = 1;

    models.BahanBeli.create({
      jumlah: jmlBahan,
      tanggalExp: tglKadaluarsa,
      idBahanBaku: bahanBaku,
      idStatus: idStatus,
      idPembelian: idPembelian
    })
    .then(datas => {
      res.redirect('/pembelians/detailPembelian/'+idPembelian);
    })

});


router.get('/editBahanBaku/:id', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    var idBahanBeli = req.params.id;

    models.BahanBeli.findAll({
      where: {id:idBahanBeli},attributes: ['id', 'jumlah','tanggalExp','idPembelian','idBahanBaku']
    })
    .then(datas => {
      models.BahanBaku.findAll()
      .then(arrBahan => {
        res.render('bahanBakus/editBahanBaku',{datas:datas,arrBahan:arrBahan});
      })
    })
});

router.post('/editBahanBaku', (req,res,next) => {
  var idBahanBeli = req.body.idBahanBeli;
  var idPembelian = req.body.idPembelian;
  var bahanBaku = req.body.bahanBaku;
  var jmlBahan = req.body.jmlBahan;
  var tglKadaluarsa = req.body.tglKadaluarsa;

  models.BahanBeli.update({
    jumlah: jmlBahan,
    tanggalExp: tglKadaluarsa,
    idBahanBaku: bahanBaku,
    idPembelian: idPembelian
  }, {
    where : {
      id: idBahanBeli
    }
  })
  .then(datas => {
    res.redirect('/pembelians/detailPembelian/'+idPembelian);
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/hapusBahanBaku/:id', (req,res,next) => {
  var idBahanBeli = req.params.id;

  models.BahanBeli.findOne({
    where : {
      id: idBahanBeli
    }, attributes: ['id', 'jumlah','tanggalExp','idPembelian','idBahanBaku']
  })
  .then(datas => {
    if(datas){
      let idPembelian = datas.idPembelian;
      models.BahanBeli.destroy({
        where: {
          id: idBahanBeli
        }
      })
      .then(items => {
        res.redirect('/pembelians/detailPembelian/'+idPembelian);
      })
    }
  })

})

module.exports = router;

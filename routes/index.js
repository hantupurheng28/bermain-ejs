var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (client) {
  router.get('/', function(req, res, next) {
    const sql = `select * from llu26`
    client.query(sql,(err,users)=> {
      res.render('index', { user: users.rows });
    })
  });

  router.post('/', function(req, res, next) {
    const sql = `insert into llu26 (id,NAMA,NIT) values (${req.body.id}, '${req.body.NAMA}', ${req.body.NIT}')`
    client.query(sql,(err,users)=> {
      res.redirect('/');
    })
  });

  router.get('/delete/:id', function(req, res, next) {
    const sql = `delete from llu26 where id = ${req.params.id}`
    client.query(sql,(err,users)=> {
      res.redirect('/');
    })
  });

    router.get('/edit/:id', function(req, res, next) {
      const sql = `select * from llu26 where id = ${req.params.id}`
      client.query(sql,(err,users)=> {
        console.log(users.rows[0])
        res.render('edit',{ user: users.rows[0]});
      })
  });

  router.post('/edit/:id', function(req, res, next) {
    const sql = `update llu26 set id =${req.body.id}, nama ='${req.body.NAMA}', nit ='${req.body.NIT}' where id = ${req.params.id}`
    client.query(sql,(err,users)=> {
      res.redirect('/');
    })
  });
return router
}



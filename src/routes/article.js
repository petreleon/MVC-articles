const Router = require('express').Router;
const articleController = require('../controllers/article');
let articleModel = require('../model/article');
var articleRoutes = new Router();

var articleControllerIns = new articleController(articleModel);

articleRoutes.get('/', (req, res) => {
  articleControllerIns.getArticles(0,(err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

articleRoutes.get('/:page', (req, res) => {
  articleControllerIns.getArticles(req.params.page-1, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

articleRoutes.post('/', (req, res) => {
    articleControllerIns.addArticle(req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.status(201).end();
  });
});

articleRoutes.put('/:id', (req, res) => {
  articleControllerIns.editArticle(req.params.id, req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.json(result);
  });
});

articleRoutes.delete('/:id', (req, res) => {
  articleControllerIns.deleteArticle(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.status(204).end();
  });
});


module.exports = articleRoutes;
class ArticleController {
  constructor(articleModel) {
    this.articles = articleModel;
  }

  getArticles(page, done) {
    let limit = 10;
    this.articles.find({}, done).limit(limit).skip(limit * page);
  }

  getArticle(_id, done) {
    //let ArticleIns = new this.articles(replace);
    this.articles.findOne({
      _id: _id
    }, done);
  }

  addArticle(article, done) {
    let ArticleIns = new this.articles(article);
    ArticleIns.save(done);
  }

  editArticle(_id, replace, done) {
    //let ArticleIns = new this.articles(replace);
    this.articles.findOneAndUpdate({
      _id: _id
    }, replace, {
      upsert: true,
      new: true,
      lean: true
    }, done);
  }

  deleteArticle(_id, done) {
    // create the query by searching for the Article and remove it
    // then execute the query
    this.articles.find({
        _id: _id
      }).remove()
      .exec(done);
  }
}

module.exports = ArticleController;
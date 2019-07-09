class ArticleController {
  constructor(articleModel) {
    this.articles = articleModel;
  }

  getArticles(page ,done) {
    let limit = 10;
    this.articles.find({}, done).limit(10).skip(limit * page)/*.exec()*/;
  }

  addArticle(article, done) {
    let ArticleIns = new this.articles(article);
    ArticleIns.save(done);
  }

  deleteArticle(title, done) {
    // create the query by searching for the Article and remove it
    // then execute the query
    this.articles.find({title: title}).remove()
    .exec(done);
  }
}

module.exports = ArticleController;
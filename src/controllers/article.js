class ArticleController {
  constructor(articleModel) {
    this.articles = articleModel;
  }

  getArticles(done) {
    this.articles.find({}, done);
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
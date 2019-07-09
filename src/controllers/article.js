class ArticleController {
  constructor(articleModel) {
    this.articles = articleModel;
  }

  getArticles(page ,done) {
    let limit = 10;
    this.articles.find({}, done).limit(10).skip(limit * page);
  }

  addArticle(article, done) {
    let ArticleIns = new this.articles(article);
    ArticleIns.save(done);
  }

  editArticle(_id, replace,done){
    let ArticleIns = new this.articles(replace);
    this.articles.findOneAndUpdate({_id:_id},ArticleIns, {upsert:true}, done);
  }

  deleteArticle(_id, done) {
    // create the query by searching for the Article and remove it
    // then execute the query
    this.articles.find({_id: _id}).remove()
    .exec(done);
  }
}

module.exports = ArticleController;
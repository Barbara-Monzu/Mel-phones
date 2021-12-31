

module.exports = app => {

  app.use("api/phones", require("./phones.routes"));
  app.use("api/reviews", require("./reviews.routes"));
  app.use("api/uploads", require("./uploads.routes"));


}





module.exports = app => {

  app.use("/phones", require("./phones.routes"));
  app.use("/uploads", require("./uploads.routes"));


}



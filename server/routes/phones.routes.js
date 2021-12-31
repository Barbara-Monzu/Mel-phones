
const router = require("express").Router();
const Phone = require('../models/Phone.model')

router.get("/:page", (req, res, next) => {
  const { page } = req.params
  let skip = page * 4

  console.log("miro page y skip", page, skip)
  Phone
    .find()
    .skip(skip)
    .limit(4)
    .then(allPhones => res.json(allPhones))
    .catch(err => console.log(err))

});

router.get("/details/:id", (req, res, next) => {
  const { id } = req.params

  Phone
    .findById(id)
    .then(phone => res.json(phone))
    .catch(err => console.log(err))

});


router.post("/", (req, res, next) => {
  // const { _id } = req.params
  const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body
  const query = { id, name, manufacturer, description, color, price, screen, processor, ram }

  if (imageFileName) query.imageFileName = imageFileName

  Phone
    .create(query)
    .then(newPhone => res.json(newPhone))
    .catch(err => res.json({ err, errMessage: "Problema creando phones" }))


});

router.put("/", (req, res, next) => {

  const { _id, id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body
  const query = { _id, id, name, manufacturer, description, color, price, screen, processor, ram }

  if (imageFileName) query.imageFileName = imageFileName

  Phone
    .findByIdAndUpdate(_id, query, { new: true })
    .then(editedPhone => res.json(editedPhone))
    .catch(err => res.json({ err, errMessage: "Problema editando Phones" }))


});

router.delete("/:id", (req, res) => {
  const { id } = req.params

  console.log("mirando id para borrar", id)

  Phone
    .findByIdAndDelete(id)
    .then(deletePhone => res.json(deletePhone))
    .catch(err => res.json({ err, errMessage: "Problema borrando Phone" }))
})


module.exports = router;

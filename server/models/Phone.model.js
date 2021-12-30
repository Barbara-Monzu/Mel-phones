const { Schema, model } = require('mongoose')

const phoneModel = new Schema({

  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number,

}, { timestamps: true })

const Phone = model('Phone', phoneModel)

module.exports = Phone



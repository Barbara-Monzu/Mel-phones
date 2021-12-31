const { Schema, model } = require('mongoose')

const phoneModel = new Schema({

  id: Number,
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  screen: String,
  processor: String,
  ram: Number,

  price: {
    type: Number,
    required: true,
    default: 500
  },

  imageFileName: {
    type: String,
    default:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87283644/fee_786_587_png",
  },


}, { timestamps: true })

const Phone = model('Phone', phoneModel)

Phone.syncIndexes()

module.exports = Phone



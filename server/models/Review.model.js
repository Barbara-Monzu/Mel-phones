
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      max: 5,
      min: 0,
    },

    description: {
      type: String,
      required: true,
    },

    reviewOwner: String,

    idProduct: {
      type: Schema.Types.ObjectId,
      ref: "Phone"
    },
  },

  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;

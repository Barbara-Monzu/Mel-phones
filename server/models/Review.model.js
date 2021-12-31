
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    rating: {
      type: String,
      enum: ["1", "2", "3", "4", "5"]
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

Review.syncIndexes()

module.exports = Review;

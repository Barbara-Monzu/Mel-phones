const router = require("express").Router();
const Review = require("../models/Review.model")


router.get('/:id', (req, res) => {
    const { id } = req.params;

    Review.find({ idProduct: id })
        .then(allReviews => res.json(allReviews))
        .catch(err => console.log(err))
})

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { rating, description, reviewOwner } = req.body
    console.log("Miro el ID", id)

    Review.create({ rating, description, reviewOwner, idProduct: id })
        .then(newReview => res.status(200).json(newReview))
        .catch(err => res.status(500).json(err))

})

module.exports = router;
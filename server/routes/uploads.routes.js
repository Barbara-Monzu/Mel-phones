const router = require("express").Router()
const uploader = require('../config/cloudinary.config')

router.post('/image', uploader.array("imageData", 5), (req, res) => {
console.log("mirando el req.files", req.files)
  if (!req.files) {
    res.status(500).json({ code: 500, message: 'Error loading the file' })
    return
  }

  const files = req.files.map(elm => {
		return elm.path
	})

  res.json({ cloudinary_url: files })
})

module.exports = router
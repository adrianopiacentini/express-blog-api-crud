const express = require("express")
const router = express.Router()
const postsList = require("../data/posts.js")
const postsController = require(('../controllers/postsController.js'))

router.get('/', postsController.index)
// index

router.get('/:id', postsController.show)
//show

router.post('/', postsController.store)
//create

router.put('/:id', postsController.update)
//update

router.delete('/:id', postsController.destroy)
//destroy 

module.exports = router
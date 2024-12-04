const postsList = require('../data/posts.js')

const index = (req, res) => {
    if (req.query.tags === undefined) {
        res.json({
            data: postsList,
            count: postsList.length
        })
    } else {
        const tagSearch = req.query.tags
        const result = postsList.filter((post) => post.tags.includes(tagSearch))
        res.json({
            data: result,
            count: result.length
        })
    }
}

const show = (req, res) => {
    const postId = req.params.id
    const myPost = postsList.find((post) => post.id === postId)
    if (myPost === undefined) {
        res.statusCode = 404
        res.json({
            error: 'Not found',
            message: 'Il post non è stato trovato'
        })
    } else { res.json(myPost) }
}

const create = (req, res) => {
    res.json('Crea un nuovo post')
}

const update = (req, res) => {
    const postId = req.params.id
    const myPost = postsList.find((post) => post.id === postId)
    if (myPost === undefined) {
        res.statusCode = 404
        res.json({
            error: 'Not found',
            message: 'Il post non è stato trovato'
        })
    } else { res.json(`Modifica l'intero contenuto del post con ID numero ${postId}`) }

}

const destroy = (req, res) => {
    const postId = req.params.id
    const myPost = postsList.find((post) => post.id === postId)
    const myPostIndex = postsList.findIndex((post) => post.id === postId)
    if (myPost === undefined) {
        res.statusCode = 404
        res.json({
            error: 'Not found',
            message: 'Il post non è stato trovato'
        })
    } else {
        postsList.splice(myPostIndex, 1)
        res.statusCode = 204
        res.json(console.log(postsList))
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
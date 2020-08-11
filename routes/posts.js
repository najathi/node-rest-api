const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Create Post
router.post('/', (req, res, next) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save().then(data => {

        res.json(data);

    }).catch(err => {

        res.status(400).json({ message: err });

    });

});

// GET Posts
router.get('/', async (req, res, next) => {

    try {

        const posts = await Post.find();

        if (posts) {

            res.json(posts);

        }

    } catch (error) {

        res.status(400).json({ message: error });

    }

});

// GET a Post
router.get('/:id', async (req, res, next) => {

    try {

        const post = await Post.findById(req.params.id);

        if (post) {
            res.json(post);
        }

    } catch (error) {

        res.status(400).json({ message: error });

    }

});

// UPDATE Post
router.patch('/:id', async (req, res, next) => {

    try {

        const post = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title, description: req.body.description } });

        if (post) {

            res.json(post);

        }

    } catch (error) {

        res.status.json({ message: error });

    }

});

// DELETE Post
router.delete('/:id', async (req, res, next) => {

    try {

        const post = await Post.deleteOne({ _id: req.params.id });
        // const post = await Post.remove({ _id: req.params.id });

        if (post) {

            res.json(post);

        }

    } catch (error) {

        res.status(400).json({ message: error });

    }

});

module.exports = router;
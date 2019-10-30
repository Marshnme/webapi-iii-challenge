const express = 'express';
const db = require(`./postDb`);
const router = require("express").Router();

//MVP ON ALL ROUTES-------------------------

router.get('/', (req, res) => {
    db.get()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The posts information could not be retrieved."})
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.getById(id)
    .then(postId => {
        res.status(200).json(postId)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The post information could not be retrieved."})
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
    .then(removed => {
        res.status(200).json(removed)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The post could not be removed"})
    })
});

router.put('/:id', (req, res) => {
    const oldPost = req.params.id;
    const updatedPost = req.body;

    db.update(oldPost,updatedPost)
    .then(updated => {
        res.status(200).json(updated)
    })
});



// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;
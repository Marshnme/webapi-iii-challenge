const express = 'express';
const db = require(`./userDb`);
const router = require("express").Router();

router.post('/', (req, res) => {
    
    db.insert(req.body)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The users information could not be added."})
    })
});


// NOT FUNCTIONAL -------- INSERT METHOD ONLY CAN BE USED ON USERS.
router.post('/:id/posts', (req, res) => {
    db.insert(req.body)
    .then(newPost => {
        res.status(200).json(newPost)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The users post could not be added."})
    })
});
//--------------------------------------------------------------------
router.get('/', (req, res) => {
    db.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The users information could not be retrieved."})
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

router.get('/:id/posts', (req, res) => {
    const id = req.params.id;

    db.getUserPosts(id)
    .then(userPost => {
        res.status(200).json(userPost)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"This users post information could not be retrieved."})
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
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"This users post information could not be updated."})
    })
});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

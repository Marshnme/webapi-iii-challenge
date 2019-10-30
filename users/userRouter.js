const express = 'express';
const db = require(`./userDb`);
const router = require("express").Router();

router.post('/', (req, res) => {
    
});

router.post('/:id/posts', (req, res) => {

});

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

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

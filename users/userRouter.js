const express = 'express';
const db = require(`./userDb`);
const postDb = require("../posts/postDb");
const router = require("express").Router();

router.post('/',validateUser, (req, res) => {
    
    db.insert(req.body)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The users information could not be added."})
    })
});


// MVP -------- 
router.post('/:id/posts',validatePost ,(req, res) => {
    postDb.insert(req.body)
    .then(newPost => {
        res.status(200).json(newPost)
    })
    .catch(err => {
        console.log("error", err)
        res.status(500).json({error:"The users post could not be added."})
    })
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

router.get('/:id',validateUserId ,(req, res) => {
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
    if(req.params.id){
            
    }
    next();
};
// MVP -------------------------------
function validateUser(req, res, next) {
    const {name} = req.body
    if(Object.keys(req.body).length === 0){
        res.status(400).json({message:"missing user data"})
    }else if(!name){
        res.status(400).json({message:"missing required name field"})
    }
    next();
};


//SHOULD BE MVP. CANT TEST BECAUSE POST IS BROKEN. -----------------------------

function validatePost(req, res, next) {
    const {text} = req.body
    if(Object.keys(req.body).length === 0){
        res.status(400).json({message:"missing post data"})
    }else if(!text){
        res.status(400).json({message:"missing required text field"})
    }
    next();
};

module.exports = router;

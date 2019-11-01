// code away!
require(`dotenv`).config();
const express = require(`express`);
const server = express();
const helmet = require("helmet");
const postRouter = require(`./posts/postRouter`);
const userRouter = require(`./users/userRouter`);

server.use(helmet());
server.use(express.json());
server.use(logger)

server.use(`/api/post`, postRouter);
server.use(`/api/user`, userRouter);





server.get('/', (req, res) => {
    res.status(200).json({ message: process.env.MSG });
});

//custom middleware

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}]`, `${req.method} ${req.originalUrl}`)

    next();
};


const port = process.env.PORT || 4000
server.listen(port, ()=>{
    console.log(`/n=== API on port ${port} ===/n`)\
    
})


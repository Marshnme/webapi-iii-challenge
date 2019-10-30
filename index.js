// code away!
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







//custom middleware

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}]`, `${req.method} ${req.originalUrl}`)

    next();
};



const port = 4000;
server.listen(port, ()=>{
    console.log("/n=== API on port 4000 ===/n")
})


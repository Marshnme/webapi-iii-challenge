// code away!
const express = require(`express`);
const server = express();

const postRouter = require(`./posts/postRouter`);
const userRouter = require(`./users/userRouter`);
server.use(express.json());
server.use(`/api/post`, postRouter);
server.use(`/api/user`, userRouter);


const port = 4000;
server.listen(port, ()=>{
    console.log("/n=== API on port 4000 ===/n")
})


import express from 'express'
import cors from 'cors'     // for non blocking requests 
import dotenv from 'dotenv'
import { chats } from './data/data.js'


const app = express();

app.use(cors());

dotenv.config('env');

app.get('/',(req,res) => {
    res.send("on 5000 port ")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res) => {
    // console.log(req.params.id)
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);

})

const PORT = process.env.PORT ||  5000
app.listen(PORT , console.log(`App started on Port : ${PORT}`))
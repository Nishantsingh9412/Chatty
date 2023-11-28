import express from 'express'
import cors from 'cors'     // for non blocking requests 
import dotenv from 'dotenv'
import { chats } from './data/data.js'
import ConnectDB from './config/db.js'
import userRoutes from './Routes/UserRoutes.js'

import {notFound , errorHandler} from './Middleware/errorMiddleware.js'


const app = express();

app.use(cors());

// for parsing the data or To accept Json data in server
app.use(express.json())

dotenv.config('env');
ConnectDB();

app.get('/',(req,res) => {
    res.send("on 5000 port ")
})

app.use('/api/user',userRoutes)

                // -------- ------ Error Handling ----------------------------
app.use(notFound)
app.use(errorHandler)

// app.get('/api/chat',(req,res)=>{
//     res.send(chats)
// })

// app.get('/api/chat/:id',(req,res) => {
//     // console.log(req.params.id)
//     const singleChat = chats.find((c)=> c._id === req.params.id);
//     res.send(singleChat);

// })

const PORT = process.env.PORT ||  5000
app.listen(PORT , console.log(`App started on Port : ${PORT}`))
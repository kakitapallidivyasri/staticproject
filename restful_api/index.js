import express from 'express';
//const express = require('express')
import bodyParser from 'body-parser';
const app = express();
// const users = [
//     {
//         firstName:"Geeth",
//         lastName:"kalimi",
//         qualification:"btech",
//         year:2018
//     },
    
// {
//     firstName:"Dhivya",
//     lastName:"kakatapalli",
//     qualification:"Btech",
//     year:2019

// }
// ]
const PORT  = 5000;
import usersRoutes from './routes/users.js'
app.use(bodyParser.json()); //we  call it as function
app.use('/users',usersRoutes);
app.get('/users',(req,res)=>{
    console.log(users)
})
app.listen(PORT,()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
})

//  import express from 'express';
// //const express = require('express')
// import bodyParser from 'body-parser';
// const app = express();
// const PORT  = 5000;
// app.use(bodyParser.json()); //we  call it as function
// app.get('/',(req,res)=>{
//        console.log('[Testing the server]!');
//        res.send('<h1>Admit your mistake before somenone exaggerates<h1/>')
// })
// app.get('/user',(req,res)=>{
//     console.log('[test@@]');
//     res.send('<h1>Give yourself to permission to be imperfect<h1>');
// })
// app.listen(PORT,()=>{
//     console.log(`server running on port: http://localhost:${PORT}`);
// })



//POST REQUEST..........................................................
// import express from 'express'
// import bodyParser from 'body-parser';
// const app = express()

// const PORT = 5000;
// import userRoutes from './routes/users.js'
// app.use(bodyParser.json());
// app.use('/users',userRoutes);
// app.listen(PORT,()=>{
//     console.log(`server running on port: http://localhost:${PORT}`);
// })

//Getting single users among users........................................

// import express from 'express'
// import bodyParser from 'body-parser';
// const app = express()

// const PORT = 5000;
// import userRoutes from './routes/users.js'
// app.use(bodyParser.json());
// app.use('/users',userRoutes);
// app.listen(PORT,()=>{
//     console.log(`server running on port: http://localhost:${PORT}`);
// })

//DELETE A USER FROM DATA.................................................................................

// import express from 'express'
// import bodyParser from 'body-parser';
// const app = express()

// const PORT = 5000;
// import userRoutes from './routes/users.js'
// app.use(bodyParser.json());
// app.use('/users',userRoutes);
// app.listen(PORT,()=>{
//     console.log(`server running on port: http://localhost:${PORT}`);
// })

//..............................................EXAMPLE.................................................

// import express from 'express'
// import bodyParser from 'body-parser'

// import usersRoutes from './routes/users.js'

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());
// app.use('/users',usersRoutes)
// app.get('/',(req,res)=>{res.send('hello from homepage')})

// app.listen(PORT,()=>{
//     console.log(`server running on port: http://localhost:${PORT}`)
// })
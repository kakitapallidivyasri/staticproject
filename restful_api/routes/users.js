import express from 'express';
//const express = require('express')
const router = express.Router();
const users = [
    {
        firstName:"Geeth",
        lastName:"kalimi",
        qualification:"Btech",
        year:2018
    },
    
{
    firstname:"Dhivya",
    lastNmae:"kakatapalli",
    qualification:"Btech",
    year:2019

}
]
router.get('/', (req,res)=>{
    console.log(users);
    //res.send(`<h1>you'll fail,don't give up in the process<h1>`);
    res.send(users)
});
export default router;

//POST REQUEST..............................................................
// import express from 'express';
// //const express = require('express')
// const router = express.Router();
// const users = [
//     {
//         firstName:"karthik yadav",
//         lastName:"Barla",
//         qualification:"MSc botany",
//         year:2018
//     },
    
// {
//     "first name":"Dhivya",
//     "lastNmae":"kakatapalli",
//     "qualification":"Btech",
//     "year":2019

// }
// ]
// router.post('/', (req,res)=>{
//     //console.log('display the post in console');
//     const user = req.body;
//     users.push(user)
//     console.log(users);
//     //console.log(req.body);
//     //res.send(`<h1>i love you<h1>`);
//     //res.send("posted");
//     //res.send('User with name ${user.firstName}added to the database')
//     res.send(users)
// });
// export default router;

//Getiing single users among users.........................................

// import express from 'express';
// const router = express.Router()
// const users = [
//     {
//         id:1,
//         firstName:"divya",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:2,
//         firstName:"madhu",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:3,
//         firstName:"kalyani",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:4,
//         firstName:"reeha",
//         lastName:"kakitapalli",
//         age:24
//     }
// ] 
// router.get('/:id',(req,res)=>{
//     console.log('hey i got restful api')
//     const user = users.find(bin=>bin.id===parseInt(req.params.id));
//     if(!user)res.status(404).send('the user with the given id is not found');
//     res.send(user)
// });

// export default router;

//DELETE A USER FROM DATA................................................
// import express from 'express';
// const router = express.Router()
// const users = [
//     {
//         id:1,
//         firstName:"divya",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:2,
//         firstName:"madhu",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:3,
//         firstName:"kalyani",
//         lastName:"kakitapalli",
//         age:24
//     },
//     {
//         id:4,
//         firstName:"reeha",
//         lastName:"kakitapalli",
//         age:24
//     }
// ] 
// router.delete('/:id',(req,res)=>{
//     console.log('hey i got restful api')
//     const user = users.filter(bin=>bin.id!==parseInt(req.params.id));
//     if(!user)res.status(404).send('the user with the given id is not found');
//     res.send(user)
// });

// export default router;



//.......................................................EXAMPLE...............................................................

// import express from 'express'

// const router = express.Router();

// const users = [
//     {
//         "firstName":"divya",
//         "lastName":"kakitapalli",
//         "age":24
//     },
//     {
//         "firstName":"madhu",
//         "lastName":"kakitapalli",
//         "age":24
//     }
// ]

// router.get('/',(req,res)=>{
//     //console.log(users)
//     res.send(users)
// });

// router.post('/',(req,res)=>{
//     //console.log('love you')
//     const user = req.body;
//     users.push(user)
//     res.send('added user')
// })

// export default router;
//  let promise = new Promise(function(resolve,reject){
//  setTimeout(() => resolve("done"),1000);
     

// }).then(function(div){
// console.log(div)
// });

// let promise = new Promise(function(resolve,reject){
// setTimeout(() => resolve("display it"),1000);

// }).then(function(result){
// console.log(result);
// });

// let promise = new Promise((resolve,reject)=>{
// setTimeout(() => reject("life is so beautiful"),2000);
// }).catch((result)=>{
//     console.log(result)
// });


// var p1 = new Promise(function(resolve, reject){
// var res = "divya";
// if(res){
//     resolve("yes it is me");
// }else{
//     reject("no its not me");
// }
//     }); 
//     console.log(p1);


// var p1 = new Promise(function(resolve,reject){
//     var res = "madhuri";
//     if(res){
//         resolve("yes it is me");
//     }else{
//         reject("its not me")
//     }
// }); 
// console.log(p1);
// p1.then(function(val){
// console.log(val);
// });


// var p1 = new Promise(function(resolve,reject){
// var res = false;
// if(res){
//     resolve("its me")
// }else{
//     reject("its not me")
// }
// });
// console.log(p1);
// p1.catch(function(val){
//     console.log(val)
// });



// const brand = ()=>{
//     return new Promise((resolve,reject)=>{
//         var Name="benz";
//         Name=false;
//         if(Name){
//             resolve("audi");
//         }else{
//             reject("its a good brand");
//         }
//     })
// }

// brand().catch(me =>{
//     console.log(me)
// });


// const prom1 = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         const calValue = 1000;
//         if(calValue==0){
//             reject("this is error function");
//         }else{
//             resolve(calValue);
//         }
//         },1000);
// });

// prom1
//     .then((data)=> {
//         console.log(data)
//         return new Promise(function(resolve,reject) {
//             const calValue = data + 1;
//             if(calValue==0) {
//                 reject("this is error function");
//             }else{
//                 resolve(calValue);
//             }
//         },3000);
//     });
// })

// .then(data => {
//     console.log(data)
//     return new Promise(function(resolve,reject) {
//         setTimeout(function()  {
//             const calValue = data + 200;
//             if(calValue==0){
//                 reject("this is error function");
//             }else{
//                 resolve(calValue);
//             }
            
//     },5000);

//     });
// })
// .then(data3 => {
//     console.log("completed",data3)
// }).catch(error => {
//     console.log(error)
// })


// const prom = new Promise(function(resolve,reject){
//     if("no error")
//     resolve()
//     else
//         reject("error")
// })

 
// prom.then(data => {
//     console.log(data)

// }).catch(error =>{
//     console.log(error)
// })

// const prom2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const calValue = 3000;
//         console.log("prom2")
//         if(calValue==0){
//             reject("this is error function");
//         }else{
//             resolve();
//         }
//     },3000);
//     });

// const prom3 = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         const calValue = 5000;
//      console.log("prom3")
//      if(calValue==0){
//          reject("this is error function")
//      }else{
//          resolve(calValue);
//      }

    
// },5000);
// });


// let promiseToCleanRoom = new Promise(function(resolve,reject){
//  let isClean = false;
//  if(isClean){
//      resolve("u r good")
//  }else{
//      reject("u r bad")
//  }

// })
// promiseToCleanRoom.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
// console.log(data)
// }); 

// let cleanRoom = function() {
//      return new Promise((resolve,reject) =>{
//          resolve("cleaned the room")
//      })
// };

// let garbageRemove = function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message + "garbage removed")
//     })
// };

// let wonIce = function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message + "won ice")
//     })
// };
// cleanRoom().then(function(result) {
// return garbageRemove(result)
// }).then(function(result) {
//     return wonIce(result)
// }).then(function(result){
//     console.log("finished" + result)
// });

// Promise.all([cleanRoom(),garbageRemove(),wonIce()]).then(function(){
//     console.log("all finished")
// })


// const prom1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         let a = 30;
//         setTimeout(function(){
//             resolve(a);
//         },3000)
//     });
// }

// const prom2 = (a)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(function()  {
//             if(a!=null){
//                 a = a + 200;
//                 resolve(a);
//             }else{
//                 reject("wrong param")
//             }
        
//     },5000)
// });
// }

// prom1().then((response)=>{
// console.log(response);
// return prom2(response)
// }).then((response)=>{
// console.log(response)
// });

///ex 2
// const promobj = prom2(null);
// promobj.then((result)=>{
// console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });

///ex 3

// const promobj1 = prom1()
// const promobj2 = prom2(null)

// Promise.all([prom1(),prom2()]).then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// });


// async function asyncTest(){
//     try{
//         const testingProm1 = await prom1();
//         const testingProm2 = await prom2(testingProm1);
//         const testingProm3 = await prom3(testingProm2);
//         console.log(testingProm1);
//         console.log(testingProm2);
//         console.log(testingProm3);
//     }catch(e){
//         console.log(e)
//     }
// }
// asyncTest();

// async function test1(){
//     const returnValue = await prom3;
//     console.log(returnValue);
// }
// test1();

// let p1 = new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("im a good girl")}, 3000);
// }).finally(()=>{
// console.log("promise ready");
// }).then((result)=>{
//     console.log(result)
// });

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("love yourself")}, 3000);
// }).then(()=>{
//     console.log("promise ready")
// }).catch((result)=>{
//     console.log(result)
// });

// async function test(){
// const value = await p2;
// console.log(p2)

// }
// test();

// let fruits = ['banana', 'sweet','apple','mango','lemon']
// let citrus = fruits.slice(1,3)

// console.log(citrus)

// let names = ['divya','madhu','reeha','geeth']
// let happiness = names.splice(3,2)
// console.log(happiness)

///spread operator

const Obj1 = {name:'divya', address:'sklm'};
let Obj2 = {class:'javascript'}

Obj2 = {
    ...Obj2,
    time:'2pm'
}

const finalobj = {...Obj1, ...Obj2};
console.log(finalobj)

///template literals



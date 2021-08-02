// let a = "test";

// function getEvent() {
//     a = "123";
//     console.log(a, "inside function");
// }

// console.log(a, "out side function");
// getEvent();

// // example 6
// function getName(firstName, lastName = function () {
//     return "Two"
// }) {
//     console.log(lastName)
//     console.log(firstName + " " + lastName());
// }
// getName("One");

// function getName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }

// getName("One", "two");

// function getName(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }

// getName("divya");

// example 7
// function mainFunc() {
//     // if logic 
//     console.log("one");
//     function func1() {
//         console.log("inside the function's function")
//     }
//     return func1;
    
// }

//  console.log( mainFunc,"one")
//  let returnValue = mainFunc();
//  console.log( "returnValue")
//  returnValue()

// function getName(firstName, lastName = function () {
    
//     return "Two"
// })
 

//     console.log(lastName)
//     // console.log(firstName)
//     console.log(firstName + " " + lastName());


//     const studentObj = {
//         name: "ABCD",
//         gender: "M",
//         class: "10th",
//         login: function () {
//             console.log(this.name, "present");
//         },
//         play: function () {
//             console.log("playing");
//         }
//     }
    
//     // factory function
//     function student(name, gender, section) {
//         return {
//             name: name,
//             gender: gender,
//             section: section,
//             login: function () {
//                 console.log(this.name, "present");
//             },
//             play: function () {
//                 console.log("playing");
//             }
//         }
//     }
    
//     const student1 = student("divya", "f", "10th");
//     const student2 = student("madhu", "M", "10th");
    

// console.log(student1);
// console.log(student2);



// // constructor

// function Student(name, gender, section) {

//     this.name = name;
//     this.gender = gender;
//     this.section = section;
//     this.login = function () {
//         console.log(this.name, "present");
//     };
//     this.play = function () {
//         console.log("playing");
//     }
// }

// const studen3 = new Student("manoosha", "F", "10th")

// console.log(studen3);



// function thisStudent() {
//     this.name = "name";
//     this.gender = "gender";
//     console.log(this)
// }

// console.log("===============with new=========================")
// const thisStudent1 = new thisStudent();
// console.log("==================with out new======================")
// const thisStudent2 = thisStudent();





// let a="divya";

// function student(){


    
//     setTimeout(function(){
//         a=10;
//         console.log(a)
//         console.log("getting student data");
//         },2000);


//         console.log("second");
//         console.log(a);
        
//         setTimeout(function(){
//             console.log(a);
//         },3000)
// }

// function student2(){
//     console.log('3rd log')
// }

//  student();
//  student2();



//....
 let a = 10;

function function1(callback) {
    setTimeout(function () {
        a = 30;
        console.log(a)
        callback(a)
       
    }, 3000);
}

function function2(cb2) {
  console.log(cb2)
    setTimeout(function () {
        const depValue = cb2()

        console.log(depValue)                  
    })
}
const callback = function (a) {
    let b = a + "it is dep values";
    function2( function(){ return b} );
    // function2(b)
    /* function2(function () {
        return b
    }) */

    //function2
}

function1(callback);
console.log(a);

/////////////////////////////////////////////////////
// let a = 10;

// function function1(callback) {
//     setTimeout(function () {
//         a = 30;
//         console.log(a)
//         callback(a)
//     }, 3000);
// }

// function function2(callback) {
//     setTimeout(function () {
//         const depValue = callback()
//         console.log(depValue)
//     })
// }

// const callback = function (a) {
//     let b = a + "it is dep values";
//     function2(function () {
//         return b
//     })
// }

//function1(callback);
//console.log(a);



// let a=10
// function function1() {
//     setInterval( function() {
//         return a+20;
// },3000);
// }

// function function2(func1Return) {
//     console.log(func1Return)
// } 
    
// const func1Return= function1();
// function2(func1Return);



// Promises exp1

// const prom = () => {
//     return new Promise((resolve, reject) => {
//         let a = 30;
//         setTimeout(function () {
//             resolve(a);
//         }, 3000)
//     });
// }


// const prom2 = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a != null) {
//                 a = a + 200;
//                 resolve(a);
//             } else {
//                 reject("wrong param")
//             }
//         }, 5000)
//     });
// };

// prom().then(response => {
//     console.log(response);
//    return prom2(null)
// }).then(response => {
//     console.log(response);
// }).catch(e =>{
//     console.log(e)
// })

// // exp 2

// const PromObj = prom2(40);

// PromObj.then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error);
// });

// // // exp 3

// const promObj1 = prom();
// const promObj2 = prom2(null);

// Promise.all([promObj1, promObj2]).then(data => {
//     console.log(data);
// }).catch(data => {
//     console.log(data);
// })



// const http= require("http");
//  http.createServer(function(req,res)
//   {
//       console.log("listening")
// res.write('first server');
// res.end();
//  }).listen(8080); 


// class Sample{
    
//     static testingFunction() {
//         console.log("div");
//     }
//     static divya() {
//         console.log("divsri");
//     }

// }
      // module.exports = Sample;


var http = require('http'); 
const fs = require("fs")
 const path = require("path")


// var server = http.createServer(function (req, res) {   
//     if (req.url == '/home') { 
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
    
//     }
//     else if (req.url == "/student") {
//         res.write('<html><body><p>This is student page.</p></body></html>');
//         res.end();
//     }
//     else if (req.url == "/admin") {
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();}
//     else
//         res.end('Invalid Request!');

// });
// server.listen(5000); 
// console.log('Node.js web server at port 5000 is running..')

// http.createServer(function(req,res){
//     var URL = req.url;
//     const file = path.join(__dirname,"restaurent.html");

//     const RS = fs.createReadStream(file)

//     if(URL==="/restaurent.html"){
//         RS.on("open",function(){
//             RS.pipe(res);
//         });
//         RS.on("error",function(){
//             res.statusCode = 500;
//             res.end();
//         });
//     }else  if(URL==="/about.html"){
//         res.write("this is about")
//         res.end();
//     }else{
//         res.write('test server')
//         res.end();
//     }

// }).listen(3000 ,function() { 
//     console.log('started');
// });

 

//  const fs = require("fs")
//  const path = require("path")

// const divHtml = path.join(__dirname, "divy.js");
// const divHtml1 = path.join(__dirname, "divya.html");

// const divWS = fs.createWriteStream(divHtml);

// const divHTMLRS = fs.createReadStream(divHtml1);

// divHTMLRS.pipe(divWS);

// divHTMLRS.on("data", function(data){
//     divWS.write(data.toString());
// });

// fs.readdir(path.join(__dirname, "myyhtml"),(error,files) => {
//     if(error){
//         console.log(error)
//     }
//     console.log(files);

// })

// fs.rename(path.join(__dirname, "myhtml"),path.join(__dirname, "myyhtml"),(error)=> {
//     if(error){
//         console.log(error)
//     }

// });


// fs.mkdir(path.join(__dirname, "myhtml"),(error) => {
//     console.log(error)
// })

// fs.access(path.join(__dirname, "myhtml"),(error)=> {
//     if(error){
//         console.log(error)
//     }
// })

// const one = path.join(__dirname,"divy.js")
// const two = path.join(__dirname,"fs.js");

// const div = fs.createWriteStream(one);
// const div1 = fs.createReadStream(two);
//  div1.pipe(div);
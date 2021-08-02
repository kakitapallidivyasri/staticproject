
/*export default class Unicorn{
        constructor(name,fam,klas){
            this.name = name
            this.fam = fam
            this.klas=klas
        }
    }
    export function printName(phyto){
        console.log( phyto.name)
    }
    export function printFam(phyto){
        console.log(phyto.fam)
    }
    export function printKlas(phyto){
        console.log(phyto.klas)
    }*/
//......................................................

    /*const tinge="lucious spalattering of colors at everywhere in holyday"
   let tycoon={
        name:"wealthy powerful person in business industry"
    }
    export default{
        name:"karthik yadav"
    }
    export{tinge,tycoon};*/
//........................es6 modules....................

// export default class personDetails{
//     constructor(name,age,family,gender,id){
//         this.name = name
//         this.age = age
//         this.family = family
//         this.gender = gender
//         this.id = id
//     }
// }
// export function printName(person){
//     console.log(person.name)
// }
// export function printAge(person){
//     console.log(person.age)
// }
// export function printFamily(person){
//     console.log(person.family)
// }
// export function printGender(person){
//     console.log(person.gender)
// }
// export function printId(person){
//     console.log(person.id)
// }
//.............................................................

/*const http = require('http');
http.createServer((req,res)=>{
     res.write('<h1>if you love the god the love of god manifests only about the show somw concern and compassion about the people who really need it<h1>')
     res.end();
}).listen(8080,function(){
    console.log(`http//:localhost${8080}`)
});*/

/*const {createServer} = require('http');

const server=createServer((request,Response)=>{
    Response.writeHead(200,{'content-Type':'hyper.html'});
    Response.write("<h1>Anegative mind will never give you a positive life<h1>");
    return Response.end();
});
server.listen(3000,()=>{
    console.log('console it')
});*/

/*const {createServer} = require('http');
const server = createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'hyper.htmml'})
    res.write(JSON.stringify({Dhivya:1996,
        karthikyadav:1995,
        skill:'webDeveloper',
        skill:'userInterfaceDeveloper'}));
    return res.end(); 
});
server.listen(8080,()=>{
    console.log(`conveting object into json at port ${8080}`);
});*/

//.....................filesystems........................................
/*const fs = require('fs');
fs.readFile('Dream.txt',function(error,data){
    if(error){
        console.log('status 404 is not found')
    }else{
        console.log(''+data)
    }
});*/

/*const fs = require('fs');
fs.readFile('love.txt',function(error,data){
    if(error){
        console.log('status 404 is not found')
    }else{
        console.log(''+data)
    }
});*/

/*const fs = require('fs');
const data = fs.readFileSync('mother.txt');
console.log('sync: '+data);*/

/*const lifefile = "life.txt";
const flagfile = "flag.txt";

const fs = require("fs");
fs.open("flag.txt",(error,fd)=>{
    if(error){
        console.log("this is an error message");
    }else{
        console.log("opened succesfully");
        fs.close(fd,(error)=>{
            console.log("file has to close after opening");
        })
    }
})*/

/*const pray = 'pray.txt';
const good  = 'good.txt';
const fs = require('fs');
fs.open('good.txt',(error,fd)=>{
    if(error){
        console.log('logging an error message')
    }else{
        console.log('file has opned successfully')
    
    fs.close(fd,(error)=>{
        console.log('close file')
    })
}
})*/

/*function name(){
    console.log('karthik yadav');
}
function Name(){
    console.log('Dhivya')
}
name();
Name();*/

/*function name(){
    setTimeout(function(){
        console.log('Karthik yadav')
    },6000)
}
function Name(){
    console.log('Dhivya')
}
try{
    console.log('karthik')
}
catch(error){
     console.log('catch if any erros in name function'+error)
}
finally{
    name();
}*/

/*function name(){
    setTimeout(()=>{
       console.log('karthik yadav');
    })
}
function Name(){
    console.log('Dhivya')
}
var motif = new Promise((res,rej)=>{
    console.log('karthik yadav');
    res('my name recieved')
}).then((tin)=>{
    console.log(tin);
    Name();
}).catch((error)=>{
    console.log('status 404 not found'+error)
})*/

/*function name(){
    setTimeout(() => {
        console.log('karthik yadav')
    },5000);
}
function Name(){
    console.log('Dhivya')
}
const intel  = new Promise((res,rej)=>{
    console.log('karthik yadav');
    rej('Rejected..')
}).then((tin)=>{
    console.log(tin);
    Name();
}).catch((error)=>{
    console.log(error)
})*/


// //var Siphon = ('./red.js');
// var Siphon = require ('./red.js')
// //console.log(Siphon.lifeisnotDangerous) 
// console.log(Siphon.lifeisnotDangerous());

/*const fs = require('fs');
const readStream = fs.createReadStream('hyper.txt');
var start = '';
readStream.setEncoding('utf8');
readStream.on('data',(chunk)=>{
    start +=chunk
});
readStream.on('end',()=>{
    console.log(start)
})*/

/*var fs = require('fs')
    var writeData = "Time will heal wounds but memories will remain forever in our life"
    var writeStream = fs.createWriteStream('memory.txt')
    writeStream.write(writeData,'utf8')
    writeStream.end()
    writeStream.on('finish',function(){
        console.log("this data has been printed")
    })*/

//..................EVENT EMITTER.............................
    var events = require('events')
    var eventEmitter = new events.EventEmitter()
    var power = function(){
        console.log("if we click the power button on remote it'll turn on the televison")
    }
    var selfButton = function(){
        console.log("after unlock your ingnition if press the button motor engeine will start")
    }
    eventEmitter.on('remote',power)
    eventEmitter.emit('remote')
    eventEmitter.on('engine',selfButton)
    //eventEmitter.emit('engine')

//..................GLOBAL OBJECT FACTORY.............................

/*var inter = require("./third.js")
var btech = require('./fourth.js')
inter.MPC()
btech.ECE()*/

/*var main = require('./third.js')
var main2 = require('./fourth.js')
main.madhuNo()
main2.divyaNo()*/

//...............DIRECTORY.....SYNC.......................
/*const fs = require('fs');
const dirnames = {
    sync:"developedDir",
    async:"asyncDevelopedDir",
};
function goodGem(){
    console.log("dont't torture,torment,burden yourself because of past action");
}
fs.mkdirSync(dirnames.sync,0o777);
fs.writeFileSync(`${dirnames.sync}/file.js`,`(${goodGem.toString()}())`)
//fs.writeFileSync(`${dirnames.sync}/file.js`,`(${goodGem()})`)*/

/*const fs = require('fs');
const dirnames = {
    sync:"dicoverinedDir",
    async:"asyncDiscoveredDir",
};
function exotic(){
    console.log("anything that not native");
}
fs.mkdir(dirnames.async,(error)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log(`${dirnames.async} discoverd!!!`)
        fs.writeFileSync(`${dirnames.async}/novo.js`,`(${exotic.toString()}())`)   
    }

})*/
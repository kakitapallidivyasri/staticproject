//simple basic node running..................................................................
/*user="karthik yadav";
console.log(user);*/
/*email = "karthikyadav1727@gmail.com";
console.log(email);*/
/*password = "7989400868";
console.log(password);*/
//--------------------------------------------------------------------------------------------------
/*user = "krishna yadav";
var user = "karthik yadav";
console.log(user);*/  //here globally declared variable can re-assigned only var key word..not to the const and let....
/*mobile = "lenovo";
var mobile = "red mi note-6 pro";
console.log("mobile");*/  //here if we console variable like string it will never display content we assigned to the string..it only display string. 

/*user="karthik yadav";
var user="ram";
let user="sri ram";  //user variable declared globally,cannot reassigned to the let key-word...
console.log(user);*/ //here answer is an error because the identified user variable is already declared...

/*user="karthik yadav";
var user="rajesh";
let user2="venky";
console.log(user2);*/

/*user = "karthik yadav";
var user = "ram charan";
let user2 = "lokesh";
console.log(user,user2);*/

/*user="gajalaxmi";
var user="karthik yadav";
let user2="prabhas";
const user3="ram charan";
console.log(user3);*/

/*var one  = "rajesh";
let two = "girish";
const three  = "joga rao";
console.log(one,two,three);*/

/*var one = "venky";
let two = "siva";
const three = "gana";
console.log(one);
console.log(two);
console.log(three);*/

/*let user="mani";    //variable assigned to let cannot assigned to the var... 
var user="karthik yadav";
console.log(user);*/ //identified user already declared..

/*const user="mani";
var user="gana";
console.log(user);*/ //user variable already declared two times with var and const....so error will come.var cant override the const.. 

/*let user="karthik yadav";
user="laxman";    //if the variable not assigned to any keyword then it is global variable......
console.log(user);*/ //globally declared variables can over ride the let variable values....
/*user  = "ramakoti";
var user = "vaishnavi";
console.log(user);*/

/*user  = "ramakoti";
let user = "vaishnavi";
console.log(user);*/

/*user  = "ramakoti";
const user = "vaishnavi";
console.log(user);*/   //globally declared variable cannot overRide the const,let..but globally declred variable can overRide var.....
   
// const user="anitha yadav";
// user="sunitha yadav";
// console.log(user); //here error will come because const variables can't override the globally declared variables

//scope...........................................................................
//global scope...
/*user="babji"; //this globally declared variable can access from anywhere like outside and inside the functions.. 
let study="pharmacy";
function tamil(){
    console.log("tamilnadu");
    var dist="karaikal";
    const state="pondycherry";
     console.log(user);
     console.log(dist,state);
}

console.log(study);
console.log(user);
tamil();*/

/*user = "karthik yadav";       //this global scope can be accessed with in the function and out-side the function
const village = "godalam";
function telugu(){
    console.log("andhra pradhesh");
    age = "26";
    var study = "MSc botany in andhra university";
    const other = "web developerr";
    console.log(study,other);
    console.log(user);
    console.log(village);   //var let const can be accessed in-side the function and out-side the function,if it is declared out-side the function... 
    console.log(age);
}
//console.log(age);
console.log(user);
console.log(village);
telugu();*/

/*function uma(){
    console.log("d/o krishna rao barla");
    //console.log(digitalAssistant);
    const digitalAssistant = "umadhevi";
    console.log(digitalAssistant);
    cader = "Digital Assistance";     //if the variables not assigned to any key word is global variable.if it is declared inside the function,we can access it inside the function and outsid the function..if the global variable declared outside the function we can access inside and outside the functoion..
    console.log(cader);
}
uma();
console.log(cader);*/   //varible not assigned any key word like var,let const if declared outside the function can access inside the function and outside the function..if these variables declared inside the function can access inside the function only we can't access outsiude the function.. 

/*user="faheem khan";
let study="pharmacy";
function tamil(){
    console.log("tamilnadu");
    var dist="karaikal";
    const state="pondycherry";
    console.log(user);
    console.log(dist);
    console.log(state);
    console.log(study);
}
console.log(study);
console.log(user);
tamil();*/

/*var Name="karthik yadav";
function barla(){
    console.log(Name);
    console.log("krishna yadav");
}
console.log(Name);
barla();*/  //function must call otherwise consoles in functions won't display in  the terminal....

//local scope...........................................................................
/*var Name="karthik yadav";
function MSc(){
    console.log(Name);
    var top="rajesh";
    const middle="girish";
    let base="jogarao";
    console.log(top,middle,base);
}
console.log(Name);
//console.log(top);
MSc();*/

var Name="karthik yadav";
function MSc(){
    console.log(Name);
    var top ="rajesh";
    const middle ="girish";
    let base ="jogarao";
    console.log(top,middle,base);
    
}
console.log(Name);
MSc();
//console.log(top,middle,base);*/ //answer is error because we can't access local variable outside the function..

/*var Name="karthik yadav";
function MSc(){
    console.log(Name);
    var top="rajesh";
    const middle="girish";
    let base="jogarao";
    mad="madhu";
console.log(top,middle,base);
    

}
console.log(Name);
MSc();
console.log(mad);*/ //we can access variable without key word like let and const that was written inside the function can be accessed like globally

/*let Name="karthik yadav";
let graduation="MSc Botany"
function versity(){
    let namE="ANDHRA UNIVERSITY";
    console.log(namE);
}
versity();
console.log(Name,graduation);*/

/*var subscriber="karthik yadav";
let network="jio";
const mobile="xoami";
function redmi(){
    console.log("jio digital world");
    var data="3 months validity";
    version="note6 pro";
    console.log(data);
    console.log(subscriber);
    console.log(network);
    console.log(mobile);
    console.log(version);
    console.log(data);
}
console.log(subscriber);
console.log(network);
console.log(mobile);
redmi();*/   //variables declared var,let,const even gvariable without any key word outside  the function can accessed inside the function

/*var subscriber="karthik yadav";
let network="jio";
const mobile="xoami";
function redmi(){
    console.log("jio digital world");
    var data="3 months validity";
    version="note6 pro";
    console.log(data);
    console.log(subscriber);
    console.log(network);
    console.log(mobile);
    console.log(version);
    console.log(data);
}
console.log(version);
console.log(subscriber);
console.log(network);
console.log(mobile);
redmi();*/ //variables like let,const,var without key word also present inside the function can have acess inside the function only we can't console them out side the function...

/*watch  = "fastrack";
function user(){
    console.log("karthik yadav");
    console.log(watch);
}
console.log(watch);
user();*/
//block scope..........................................................................
/*const Name="karthik yadav";
let graduation="MSc Botany"
function versity(){
    let NAME="vishakapattanam";
    let namE="aadhi kavi nannya university";
    if(NAME==="vishakapattanam"){
        let uni="andhra university";
        console.log(uni);
        console.log(namE);
        console.log(Name);
    }
}
console.log(Name,graduation);
versity();*/  /*we did'nt console any variable even though we assign some values to them.
only we console to the varaible "uni" that was in block scope..thats why while decalriong the function like versity();
 it only display the value assigned to "uni" variable..we can console that "uni" in particular curly braces only we can access
  the value out side the curly braces..we can't console the "uni"variable outside thje curly braces.*/

//error in block scope.........................................................................................................
/*let Name="karthik yadav";
let graduation="MSc Botany"
function versity(){
    let NAME="vishakapattanam";
    let namE="ANDHRA UNIVERSITY";
    if(NAME==="vishakapattanam"){
        let uni="kakatheeya university";   
    }
    console.log(uni); //we console the the block scope variable like "uni" out side the curly braces..we can't access
}
versity();*/

/*let Name="karthik yadav";
let graduation="MSc Botany";
function versity(){
    let NAME="vishakapattanam";
    let namE="ANDHRA UNIVERSITY";
    if(NAME==="vishakapattanam"){
        let uni="kakatheeya university";
        console.log(uni);
        console.log(namE);
    }  
}
versity();
console.log(Name,graduation);*/

/*let Name="karthik yadav";
let graduation="MSc Botany";
function versity(){
    let NAME="vishakapattanam";
    let namE="ANDHRA UNIVERSITY";
    if(NAME==="vishakapattanam"){
        let uni="kakatheeya university";
        console.log(uni);
    }
    console.log(NAME,namE);
}
versity();
console.log(Name,graduation);*/

/*function bio(){
    let biomolecules = "corbohydrates";
    if(biomolecules === "corbohydrates"){
        let corbohydrates= "main frame work structure";
        console.log(corbohydrates);
    }
}
bio();*/

//over riding the varaible in block scope................................................................................
/*let Name="karthik yadav";
let graduation="MSc Botany"
function versity(){
    let NAME="vishakapattanam";
    let namE="ANDHRA UNIVERSITY";
    if(NAME==="vishakapattanam"){
        let namE="kakatheeya university";
        console.log(namE);
    }
    console.log(NAME,namE);
}
versity(); //here we assigned two different values to one variable(namE)..with in the if block scope the value "kakatheeya university" got over rided over the "vishakapattanam" 
console.log(Name,graduation);*/

/*let Name="karthik yadav";
let graduation="MSc Botany"
function versity(){
    let NAME="vishakapattanam";
    let namE="ANDHRA UNIVERSITY";
    if(NAME==="vishakapattanam"){
        let namE="kakatheeya university";
        console.log(namE);
    }
    console.log(NAME); 
}
versity(); //over rided value will come..
console.log(Name,graduation);*/

 
/*var test=30;
function variableTest(){
    var test=60;
    let test2=90;
    if(test===60){
        console.log(test2);
    }
}
variableTest();*/

/*var name = "karthik yadav";
function user(){
    var name = "uma dhevi";
    let device = "lonovo octacore i3 processor";
    if(name==="umadhevi"){
        console.log(device);
    }else{
        console.log("this is the programm is showing some error");
    }
    console.log(name,device);
}
user();*/
/*var test=30;
function variableTest(){
    var test=60;
    let test2=90;
    if(test===60){
        console.log(test2);
    }
    console.log(test,test2);
}
variableTest();
console.log(test);*/

/*var test=30;
function variableTest(){
    var test=60;
    let test2=90;
    if(test===60){
        console.log(test2);
    }
    console.log(test,);
}
variableTest();
console.log(test);*/

/*var test=30;
function variableTest(){
    var test=60;
    let test2=90;
    if(test===60){
        let test2="fast track";
        console.log(test2);
    }
    console.log(test,test2);
}
variableTest();
console.log(test);*/

// var test=30;
// function variableTest(){
//     var test=60;
//     let test2=90;
//     if(test===60){
//         let brand="fast track";
//         console.log(brand);
//     }
//     console.log(test,test2);
// }
// variableTest();
// console.log(test);

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        console.log(brand);
    }
    console.log(test,test2,course);
    console.log(course); //globally declared let "course" value get over rided..
}
variableTest();
console.log(test,course);*/

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="Ramakoti";
        console.log(brand);
    }
    console.log(test,test2,course);
    console.log(course);
    console.log(me);//we can access the var outside the function...var is global variable
    }
variableTest();
console.log(test,course);*/

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="gajalaxmi";
        console.log(brand);
    }
    //console.log(test,test2,course);
    //console.log(course);
    //console.log(me);
    console.log(my);//let within the function can't be declared outside the function..
}
variableTest();
//console.log(test,course);*/

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="Ramakoti";
        console.log(brand);
        console.log(my);
    }


}
variableTest();*/

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="Ramakoti';
        const pen="mountex";
        console.log(brand);
        console.log(my);
        console.log(pen);//when we write const inside the function like if.for,while,do while..then we have access inside the function only..  
    }
}
variableTest();*/

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="Ramakoti";
        const pen="mountex";
        //console.log(brand);
        //console.log(my);
        //console.log(my);
    
    }
    //console.log(pen);//error will come because of const variable is written in soide the functionn like if..then it should be declared inside the function it cant be declared out side the curly braces...
    //console.log(test);
}
variableTest();
console.log(test);*/     //if the variable declared outside the function...it can access inside the function and outside the function..but inside the function with same variable if we assigned some othe value it can override with that value inside the function,if we console it inside the function..if we console it outside the function..same value will be printed which value we assigned 1st.

/*var test=30;
let course="life science";
function variableTest(){
    let course="botany";
    var test=60;
    let test2=90;
    if(test===60){
        let brand="fast track";
        var me="karthik yadav";
        let my="Hanuman";
        const pen="mountex";
        console.log(brand);
        
    }
    console.log(my);
        console.log(pen); //both let and const written inside the function like if then we cant declare outside..so error will come
}
variableTest();*/

/*var atom = "oxygen";
function bio(){
    var atom = "corbon";
    console.log(atom);
}
bio();
console.log(atom);*/

//redeclaration in variable like var, let, const...........................................................

/*bioMolecule = "corbohydrates";
bioMolecule = "lipids";
bioMolecule = "nucleic Acids";
console.log(bioMolecule);*/   //redeclaration is possible with with globale variable.........

/*var my="Suzuki";
var my="Gazi";
my="parama sivam";
console.log(my);*/ //redclaration is possible in the var..

/*let my="parama sivama";
let my="chaitanaya hanumanthu";
console.log(my);*/     //redeclaration is not possible with let..

/*const my="chaitanya hanumanthu";
const my="parama sivam";
console.log(my);*/ //redclaration is not possible in the const.....................................

// reinitialization for var const let............................................................................. 

/*cell="motorola";
cell="lenovo";
console.log(cell);*/ //in javascript declariing a value without using key words like let.const,var..then that variable is called global varaible..

/*let pen="mountex";
pen="raynolds";
console.log(pen);*/     //reinitialisation is possible in the let..But not Re-declaration

/*let pen="mountex";
let pen="raynolds";
console.log(pen);*     // Re-declaration is not possible with 

/*var watch="fastrack";
watch="casio";
console.log(watch);*/   //reinitialisation possible in the var..var key word almost eqaual to global variable..
 
/*const costumes="peter england";
costumes="adam parker";
console.log(costumes);*/    //Re-initialsation & re-declaration  is not possible with const....................

/*var test=30;
function variableTest(){
    var test=60;
    let test2=90;
    if(test===60){
        let test2="karthik yadav";
        console.log(test2);
    }
    //console.log(test,test2);
}
variableTest();
console.log(test);*/

/*var name1="karthik yadav";
console.log(name1);*/

//ANOTHER SIMPLE EXAMPLES USING ANOTHER TWO VARIABLES LIKE CONST & LET..
 /*let name1="Krishna yadav";
 const name2="karthikyadav";
 console.log(name1);
 console.log(name2);*/

/*a=[
     "karthik yadav",
    143,
     "botany"
]
console.log(a);*/

/*var Name = [
    "krishna yadav",
    52,
    "weightLifter"
]
console.log(Name);*/

/*let names = [
    "krishna yadav",
    "gavanamma",
    "karthik yadav",
    3
]
console.log(names);*/

/*const macroMolocules =[
    "corbon",
    "hydrogen",
    "oxygen",
    "nitrogen",
    "phosphorous",
    "potassium",
    "calcium",
    "megnisium",
    "sulphur",
     9
]
console.log(macroMolocules);*/

//###another example###
/*let a="karthik yadav";
let b="MSc Botany";
let c="andhra university";
let d="2016-2018";
let e="vishakapattanam";
let f=`my self ${a} completed post graduation ${b} in ${c} from ${d} in ${e}..`
console.log(f);*/

/* a="karthik yadav";
let b="MSc Botany";
var c="andhra university";
let d="2016-2018";
const e="vishakapattanam";
let f=`my self ${a} completed post graduation ${b} in ${c} from ${d} in ${e}..`
console.log(f);*/

 /*a="karthik yadav";
 b="MSc Botany";
 c="andhra university";
 d="2016-2018";
 e="vishakapattanam";
 f=`my self ${a} completed post graduation ${b} in ${c} from ${d} in ${e}..`
console.log(f);*/

/*var a="karthik yadav";
var b="MSc Botany";
var c="andhra university";
var d="2016-2018";
var e="vishakapattanam";
var f=`my self ${a} completed post graduation ${b} in ${c} from ${d} in ${e}..`
console.log(f);*/

/*const a="karthik yadav";
const b="MSc Botany";
const c="andhra university";
const d="2016-2018";
const e="vishakapattanam";
const f=`my self ${a} completed post graduation ${b} in ${c} from ${d} in ${e}..`
console.log(f);*/ 

//***ANOTHER***///
/*var name1="ram charan";
let name2="prabhas";
var name1="mega power star";     //Re-initialisation is possible with var.........
let name2="young rebel star";    //Re-initialisation is not possible with let.....
console.log(name1);
console.log(name2);*/

/*num = 1;
const Name = "bahubali";
num = 2;        //Re-initialisation is possible with global variables.....
Name = "rangasthalam";    //Re-initialisation is not possible with const.....
console.log(num);
console.log(Name);*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@functions@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /*function mainFunc(){
     console.log("karthik yadav");
 }
 mainFunc();*/

/*function mainFunc(){
    console.log("prabhas");
    function func1(){
        console.log("young rebel star");
    }
    func1();
}
mainFunc();*/

/*function mainFunc(){
    console.log("ramcharan");
    function func1(){
        console.log("mega power satr");
    }
    func1();
    //return 20;
    return true;
}
let returnValue=mainFunc();
console.log(returnValue);*/

/*function mine(){
    console.log("RoyalEnfield");
    function me(){
        console.log("karthik yadav");
    }
    console.log(me);     //will get like Function: me
    return 100;
}
getThat = mine();
console.log(getThat);*/

/*function mine(){
    console.log("RoyalEnfield");
    function me(){
        console.log("karthik yadav");
    }
    console.log(me());     //it will display information in the function but dispaly like undefined...
    return 100;
}
getThat = mine();
console.log(getThat);*/

/*function mine(){
    console.log("RoyalEnfield");
    function me(){
        console.log("karthik yadav");
    }
    me();     
    return 100;
}
getThat = mine();
console.log(getThat);*/

/*function mine(){
    console.log("tagetus");
    function me(){
        console.log("karthik yadav");
    }
    console.log(me());     //it will display information in the function but dispaly like undefined & it will not display return value;
    return 100;
}
mine();*/

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%^^^^^%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/*let a="karthik yadav";
function getEvent(){
    let a=143;
    console.log(a);
}
console.log(a,"outside the function");
getEvent();*/

/*const tree = "cocos nucifera";
function bot(){
    const tree = "anacardium occidentalis";
    console.log(tree);
    let tree = "casurina equisitifolia";
    console.log(tree);   //if we assigned one variable to one key-word we can't assigned same variable to other key-word.. 
}
//console.log(tree);
bot();*/
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**********************************************************************
/*function mainFunc(){
    console.log("adathoda vasica"); 
    function func1(){
        console.log("poinsettia");
    }
    return func1;  
}
let returnValue=mainFunc();
returnValue();*/

/*function bot(){
    console.log("capsicum frutiscense");
    function zoo(){
        console.log("parasite");
    }
    zoo();
}
bot();*/

/*function corbohydrates(){
    console.log("polyhydroxy aldehydes and polyhydroxy ketones");
    function nucleicacids(){
        console.log("polymers of poly-nucleotids");
    }
    let bluePrint = nucleicacids();
    console.log(bluePrint);            
                    return true;
}
let molecules = corbohydrates();
console.log(molecules);*/

/*function scientificName(){
    console.log("mangifera indica");
    function vernacularName(){
        console.log("mango tree");
    }
    //vernacularName();
    //return 1;
    //return vernacularName;     //it will return like Function name..
    return vernacularName();
}
const tree = scientificName();
console.log(tree);
//return scientificName;*/     //like this we can't get any answer..

//************************------------------------------------*******************************************
/*function mainFunc(){
    console.log("hibiscus");
    function func1(){
        console.log("musa paradisica");
    }
    func1();
}
let returnValue=mainFunc();
console.log(returnValue);*/

/*let science="botany";
function getEvent(){
    science="zoology"; 
    console.log(science);
}
console.log(science);
getEvent();*/

/*function mainFunc(){
    console.log("piper");
    function func1(){
        console.log("nigram piperaceae");
    }
     func1();
}
console.log(mainFunc)
console.log(mainFunc());*/

/*function mainFunc(){
    console.log("piper");
    function func1(){
        console.log("nigram piperaceae");
    }
     func1();
}
console.log(mainFunc())*/

/*function mainFunc(){
    console.log("piper");
    function func1(){
        console.log("nigram piperaceae");
    }
     func1();
}
let returnValue=mainFunc();
console.log(returnValue);*/

/*function mainFunc(){
    console.log("piper");
    function func1(){
        console.log("nigram piperaceae");
    }
     return func1();
}
let returnValue=mainFunc();
console.log(returnValue);*/

/*function mainFunc(){
    console.log("pyrus malus");
    function func1(){
        console.log("anacardium occidentalis");   
    }
    return func1;
}
console.log(mainFunc)
let returnValue=mainFunc();
console.log(returnValue)
//console.log(returnValue())*/

/*function mainFunc(){
    console.log("pyrus malus");
    function func1(){
        console.log("anacardium occidentalis");   
    }
    return func1;
}
console.log(mainFunc)
let returnValue=mainFunc();
console.log(returnValue)
//returnValue();*/

/*function mainFunc(){
     console.log("pyrus malus");
    function func1(){
         console.log("anacardium occidentalis");   
     }
        func1();
 }
 let returnValue=mainFunc();
 console.log(returnValue)*/

 /*function mainFunc(){
     console.log("pyrus malus");
    function func1(){
             console.log("anacardium occidentalis");   
     }

 }

let returnValue=mainFunc();*/

/*var animals = [
    { name: 'fluffykins', species: 'rabbit'},
    { name: 'cario',      species:'dog'},
    { name: 'hamilton',   species:'dog'},
    { name: 'harold',     species:'fish'},
    { name: 'poppets',    species: 'dogs'}
]
var names=[]
for(i=0;i<animals.length;i++){
    names.push(animals[i].name)
}
var species=[]
for(i=0;i<animals.length;i++){
    names.push(animals[i].species)
}
console.log(names);
console.log(species);*/

//FACTORY FUNCTIONS############################################################################
/*function student(name,gender,section){
    return{
        name:name,
        gender:gender,
        section:section,
        login:function(){
            console.log(this.name,"present");
        },
        play:function(){
            console.log("playing");
        }
    }
}
const student1=student("karthik yadav", "male", "MSc botany");
const student2=student("gajalaxmi", "female", "BSc nursing");
console.log(student1);
console.log(student2);*/

/*function botany(thallophytes,bryophytes,pteridophytes,spermatophytes){
    return{
        thallophytes:thallophytes,
        bryophytes:bryophytes,
        pteridophytes:pteridophytes,
        spermatophytes:spermatophytes,
        login:function(){
    console.log(this.thallophytes, "water living");
},
play:function(){
    console.log("phycology");
}
    }  
}
const taxonomay = botany("ulav enteromorpha caulerpa spirogyra", "funaria marchantia", "pteris sphagnum", "cycas revoluta gnetum pinus  mangifera indica");
console.log(taxonomay);*/

/*function family(cast,sirName,Name,father,mother){
    return{
        cast:cast,
        sirName:sirName,
        Name:Name,
        father:father,
        mother:mother,
    }
}
const details = family("yadav","barla","karthik yadav","krishna","gavanamma");
console.log(details);*/

/*function student(name,gender,age,qualification,section){
    return{
        name:name,
        gender:gender,
        age:age,
        qualifiaction:qualification,
        section:section,
        login:function(){
            console.log(this.name,"present");
        },
        play:function(){
            console.log("playing");
        }
    }
}
const profile = student("karthik yadav","male","25","MSc Botany","LifeSciences");
console.log(student());*/   //all the arguments passed in perenthesis are recorded as undefined....

/*function student(name,gender,age,qualification,section){
    return{
        name:name,
        gender:gender,
        age:age,
        qualifiaction:qualification,
        section:section,
        login:function(){
            console.log(this.name,"present");
        },
        play:function(){
            console.log("playing");
        }
    }
}
const profile = student("karthik yadav","male","25","MSc Botany","LifeSciences");
console.log(student);*/   //function name will displayed like [Function: student]

/*function student(name,gender,age,qualification,section){
    return{
        name:name,
        gender:gender,
        age:age,
        qualifiaction:qualification,
        section:section,
        login:function(){
            console.log(this.name,"present");
        },
        play:function(){
            console.log("playing");
        }
    }
}
const profile = student("karthik yadav","male","25","MSc Botany","LifeSciences");
console.log(profile);*/

/*function taxonomy(kingdom,division,Class,family,genus,species){
    return{
        kingdom:kingdom,
        division:division,
        Class:Class,
        family:family,
        genus:genus,
        species:species,
    }
}
const botany = taxonomy("plant kingdom","Angiosperms","spermatophyta","malvaceae","hibiscus","rosa-sinensis");
console.log(botany);*/

//with new!!!!
/*function thisStudent(){
    this.name="karthik yadav";
    this.gender="male";
    this.age ="25";
    console.log(this)
}
console.log(".....with new.....");
const thisStudent1=new thisStudent();*/
/*console.log("....without new....");
const thisStudent2=thisStudent();*/

/*function thisFamily(){
    this.religion = "yadav";
    this.sirName = "barla";
    this.father = "krishna";
    this.mother = "gavanamma";
    this.myself = "karthik yadav";
    this.elderSister = "sunitha";
    this.youngeSister = "annitha";
    this.thangacchi = "uma dhevi";
    console.log(this);
}
//const thisDetails = new thisFamily();
const thisDetails = thisFamily();*/

//constructor functions....////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function thisStudent(){
    this.name="name";
    this.gender="gender";
    console.log(this)
}
const thisStudent1=new thisStudent();
const thisStudent2=thisStudent();*/

/*function getEvent(firstName,lastName=function(){
    console.log("arg function");
})
{
    console.log(lastName);
    console.log(firstName);
}
getEvent("karthik yadav","barla");*/
/*function scientificName(genusName,speciesName = function(){

})
{
console.log(genusName);
console.log(speciesName);
}
scientificName("cocos","nucifera");*/

/*function getEvent(firstName,lastName=function(){
    console.log("arg function");
})
{
    console.log(firstName);
    console.log(lastName);
}
getEvent("karthik yadav");*/

/*function fight(husband,wife=()=>{            //arrow function
    console.log("newly married couple");
})
{
    console.log(husband);
    console.log(wife);
}
fight("sivaji","uma dhevi");*/

//setTimeout...setTimeout............................................................................................
/*function student(name){
    setTimeout(function(){
        console.log("get student data");
    },5000);
    console.log("dispaly it advance");
}
function student2(){
    console.log("display it then");
}
console.log(student2);
student2();
student();
student()*/

/*function caution(){
    setTimeout(function(){
        console.log("its too hot out-side please hydrate your body frequently");
    },3000);
    console.log("hello world it's disclaimer");
}
console.log("a strong appeal to the all the people who are roaming out-side");
caution();*/

/*function alert(){
    setTimeout(function(){
        console.log("it seems to be power off today from 9am to 5pm..so be keep charge your mobiles and laptops");
    },7000);
}
alert();*/

//call back functions........................................................................
/*function cal(num1,num2,calType){
    if(calType=="add"){
        let result=num1+num2;
        return result;
        //return num1+num2
    }else if(calType=="sub"){
        return num1-num2;
    }
}
const Value=cal(3,5,"add");
console.log(Value);
const returnValue=cal(20,5,"sub");
console.log(returnValue);*/

/*function cal(num1,num2,calType){
    if(calType=="mult"){
        let result=num1*num2;
        return result;
    }else if(calType=="sub"){
        return num1-num2;
    }
}
returnValue=cal(200,60,"mult");
console.log(returnValue);
returnValue=cal(200,20,"sub");
console.log(returnValue);*/

//call back functions...................................................................................
/*let a = 10;
function function1(callback) {
    setTimeout(()=> {
        a = 30;
        console.log(a);
        callback(a)
    },3000);
}
function function2(callback) {
    setTimeout(()=> {
        const depValue = callback()
        console.log(depValue);
    })
}
const callback = (a)=> {
    let b = a + "it is dep values";
    function2(()=> {
        return b
    })
}
function1(callback);
console.log(a);*/

/*let k = 100;
function range(callbak){
    setTimeout(() => {
        k = 200;
        console.log(k);
        callbak(k);
    },4000);
}
function capacity(callbak){
    setTimeout(()=>{
        const depValues = callbak()
        console.log(depValues);
    })
}
const callbck = (k)=>{
    let g = a+500;
    capacity(()=>{
        return g
    })
}
range(callbck);
console.log(k);*/

/*let a=10;
function function1(callback){
    setTimeout(function(){
        a=30;
        console.log(a);
        callback(a)
    },3000);
}
console.log(function1());
console.log(a);*/

/*let Name = "karthik yadav";
function love(callback){
    setTimeout(()=>{
        Name="gajalaxmi paramasivam";
        console.log(Name);
        callback(Name);
    },2000);
}
console.log(Name);
console.log(love);*/    //here we did'nt call love() function so it cna't display the constents in the function..it can display the name of the function..[Function: love]

/*let scientificName="musa paradisica";
function bot(callback){
    setTimeout(()=>{
        scientificName = "zinziber officnalis";
        console.log(scientificName);
        callback(scientificName);
    },5000);
}
console.log(scientificName);
bot();*/

//returnig function1 value in function2..
/*let a=10;
function function1(){
    return a+30;
}
//console.log(function1);
//console.log(function1());
function function2(number){
    setTimeout(()=>{
        console.log(number)
    },2000)
}
const number=function1();
function2(number);*/

/*var herb = "allium cepa";
function liliaceae(){
    return herb + " onion";
}
function amaryllidaceae(monocot){
    console.log(monocot);
}
console.log(liliaceae());*/

/*let Name="young rebel star";
function function1(){
    return Name+"  PRABHAS";
}
function function2(Func1Return){
    console.log(Func1Return);
}
const Func1Return=function1();
function2(Func1Return);*/

/*let lemonGrass="cymbopogon citratus";
 function function1(){
     return lemonGrass+" cyperaceae";
 }
 function function2(scent){
     console.log(scent);
 }
 var scent=function1();      //we can use any keyWord like var, let, const for assigning the parameters passed in the perenthesis..
 function2(scent);*/

 //asynchronous functions..................................................

 /*function function1(){
     setTimeout(function(){
         console.log("karthik yadav");
         console.log("MSc botany andhra university");
     },10000)
     
 }
console.log("beauty in botany & botany in beauty..");
function function2(){
    return"this one ha sto get";
}
function1()
var a=function2();
console.log(a);*/

/*console.log("karthik yadav");
console.log("MSc botany");
setTimeout(()=>{
    caleculate();
},10000)
console.log("andhra university");
console.log("vishakapattanama");
function caleculate(){
    let sum=0;
    for(let i=0; i<1000;i++){
    sum=sum+i;
    }

console.log("math result",sum);
}*/

//synchronous calls in javascript.....................................................

/*console.log("karthik yadav");
console.log("MSc botany");

    caleculate();
console.log("andhra university");
console.log("vishakapattanama");
function caleculate(){
    let sum=0;
    for(let i=0; i<1000;i++){
    sum=sum+i;
    }

console.log("math result",sum);
}*/
//simple setTimeout function in javacript
/*function function1(){
    setTimeout(()=>{
        console.log("display it after sometime");
    },10000)
}
console.log(function1());
console.log("wait for it");*/
/*function function1(){
    setTimeout(()=>{
        console.log("display it after sometime");
    },10000)
}
function1();
console.log("wait for it");*/ 

//setInerval function in javascript......................................................

/*function function1(){
    setInterval(() => {
        console.log("welcome");
    },10000);
}
function1();
console.log("wait for it");*/

//promisesssssssssssssss.............................................................................
/*let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("display it"), 10000);
  }).then(function(kit){console.log(kit);
})*/
/*let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("people only die nwhen they are forgotten by the people most dear to them "),8000);
}).catch((ono)=>{console.log(ono);
})*/

//a simple example..
/*var p1=new Promise(function(resolve,reject){
     var res="karthik yadav";
     if(res){
         resolve("yes it's me");
     }
     else{reject("it's not me");}
 })
 console.log(p1);*/

/*var p1=new Promise(function(resolve,reject){
     var rest="royal enfield";
     if(rest){
         resolve("yes it's mine");
     }
     else{reject("it's not me");}
 })
 console.log(p1);
 p1.then( function(val) {console.log(val); })*/ //if the value is resolved then it will come .then

/*var p1=new Promise(function(resolve,reject){
     var rest=false;
     if(rest){resolve("yes its true");}
     else{reject("yes bits false")}
 })
 console.log(p1);
 p1.catch(function(valk){console.log(valk);})*/

/*const prom = () => {
    return new Promise((resolve, reject) => {
        let a = "parama sivam";
        setTimeout(function () {
            resolve(a);
        }, 3000)
    });
}
console.log(prom());
prom().then(karthik=>{console.log(karthik);})*/

/*const brand = () =>{
    return new Promise((resolve,reject)=>{
        var Name="havells";
        Name=false;
        if(Name){
            resolve("phillips");
        }else{
            reject("its nice");
        }
    })
}
console.log(brand());
brand().catch(mine =>{console.log(mine);})*/

/*const brand = () =>{
    return new Promise((resolve,reject)=>{
        var Name="havells";
        Name=true;
        if(Name){
            resolve("phillips");
        }else{
            reject("its good brand");
        }
    })
}
console.log(brand());
brand().then(mine =>{console.log(mine);})*/  /*ikkada naaku ardhamiandhi yemiti ante varaible ki false ani assign chesthe reject avuthundhi and
aa reject iina value ni manam .catch method tho accesss cheyocchu..varaible ni false ani cheppi .then tho access cheyalemu..kaani varaible ni
some true ki assign chesi resolve chesi .then method tho access cheyocchu..*/  
    
/*const prom = () => {
    return new Promise((resolve, reject) => {
        let a = 30;
        setTimeout(function () {
            resolve(a);
        }, 3000)
    });
}
const prom2 = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a != null) {
                a = a + 200;
                resolve(a);
            } else {
                reject("wrong param")
            }
        }, 5000)
    });
};

prom().then(response => {
    console.log(response);
    return prom2(response)
}).then(response => {
    console.log(response);
});

const PromObj = prom2(null);

PromObj.then(result => {    //if the value get rejected we can use only .catch because it is handler..no need use .then..orelse we can use .catch and .then but only .catch only useful..
console.log(result)
}).catch(error => {
    console.log(error);
});
PromObj.catch(karthik=>{
console.log(karthik);
})

const promObj1 = prom();
const promObj2 = prom2(null);

Promise.all([promObj1, promObj2]).then(data => {
    console.log(data);
}).catch(data => {
    console.log(data);
})*/

/*let promise=new Promise(function(resolve,reject){
    setTimeout(()=>resolve("karthik yadav"),3000);
});
console.log(promise);
promise.then((bin)=>{console.log(bin);
});*/

/*let promise=new Promise(function(resolve,reject){
    setTimeout(()=>reject("karthik yadav"),3000);
});
console.log(promise);
promise.then((bin)=>{console.log(bin); 
    }).catch((tin)=>{console.log(tin);
    })*/

/*let promise=new Promise(function(resolve,reject){
        setTimeout(()=>reject("paramasivam"),3000);
    });
    console.log(promise);
    promise.catch((bin)=>{console.log(bin); 
        })*/

/*new Promise((resolve, reject) => {
            setTimeout(() => resolve("result"), 2000)
          })
            .finally(() => {console.log("Promise ready");
        })
            .then(result =>{ console.log(result);
            });*/

/*new Promise(function(resolve,reject){
    setTimeout(()=>resolve("karthik yadav"),3000);
})
.finally(()=>{console.log("ome");
}).then((rim)=>{console.log(rim);
})*/

/*new Promise((resolve, reject) => {
    setTimeout(() => reject("result"), 2000)
  })
    .finally(() => {console.log("Promise ready");
})
    .catch((result) =>{console.log(result);
    });*/

/*let promise = new Promise(resolve => resolve("be eco-friendly"));

promise.then(function(lint){console.log(lint);
});*/

//re-resolve a Promise.....................................................................................................
/*let promise = new Promise(function(resolve, reject) {
    resolve("karthik yadav");
  
    /*setTimeout(() => resolve("paramasivam"), 1000);
  });
  
  promise.then((kin)=>{console.log(kin);
}); //here is printing the 1st condition ignoring the remainging

/*function delaying(core){
    return new Promise(resolve=>setTimeout(resolve,core));
}
delaying(9000).then(()=>{console.log("be good for no reason");
})*/

/*function dietary(lin){
    return new Promise(resolve=>setTimeout(resolve,lin));
}
dietary(5000).then(()=>{console.log("we are what we eat");
})*/

/*function orange(ram){
    return new Promise(reject=>setTimeout(reject,ram));
}
orange(6000).catch(()=>{console.log("citrallus lantus");
})*/
//PROMISES API........................................................................................................

/*Promise.all([
    new Promise((resolve) =>setTimeout(()=>resolve("karthik yadav"),2000)),
    new Promise((resolve)=>setTimeout(()=>resolve("paramasivam"),4000)),
    new Promise((resolve)=>setTimeout(()=>resolve("chaiatanya"),6000)),
new Promise((resolve)=>setTimeout(()=>resolve("andhrapradhesh"),12000)),
]).then((don)=>{console.log(don);
})*/

/*Promise.all([
    new Promise((resolve,reject)=>setTimeout(()=>resolve("karthikm yadav"),5000)),
    new Promise((resolve,reject)=> setTimeout(()=>resolve("paramasivam"),10000)),
    new Promise((reolve,reject)=>setTimeout(()=>reject("chaitanya"),10000)),
]).catch(function(bin){console.log(bin);
});*/ //if one got failed other one can't excute

/*Promise.all([
    new Promise((resolve,reject)=>{setTimeout(()=>resolve("karthik yadav"),5000)
}),
"rajesh",
"girish",
"joga"

]).then(function(bot){console.log(bot);
})*/

/*Promise.all([
    new Promise(function(resolve,reject){
        setTimeout(()=>resolve("barla krishna yadav"),1000)
    }),
"barla gavanamma",
"barla karthik",
"gajalaxmi paramasivam",
"ankaboina sunitha",
"korlana anitha",
"pilaka uma dhevi"

]).then(function(fam){console.log(fam);
})*/

/*Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("disgusting!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then((fig)=>{console.log(fig);
});*/

/*Promise.race([
  new Promise((resolve,reject)=>setTimeout(()=>resolve("prabhas"),5000)),
  new Promise((resolve,reject)=>setTimeout(()=>resolve("ram charan"),4000)),
  new Promise((resolve,reject)=>setTimeout(()=>reject("NTR"),6000)),  
]).then((tin)=>{console.log(tin);
})*/

/*Promise.allSettled([
    new Promise((resolve,reject)=>setTimeout(()=>resolve("prabhas"),5000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve("ram charan"),4000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject("NTR"),6000)),  
  ]).then((tin)=>{console.log(tin);
  })*/

//chain in promisingggggggggggggggggg..............................................................................
/*new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) {
    console.log(result);
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });*/

/*new Promise (function(resolve,reject) {
      setTimeout(()=> resolve(10), 5000);
  
    }).then(ka=>{console.log(ka);
        return ka*2;
}).then((ka=>{console.log(ka);
    console.log(ka);
    return ka*3;

})).then((ka=>{console.log(ka);
    console.log(ka);
}))*/

//another example of chaining in promises..................................................................................
/*new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("karthik yadav"),2000);
}).then(lov=>{console.log(lov);
return lov +"nature";
}).then((lov)=>{console.log(lov);
return lov+ "eternal";
}).then((lov)=>{console.log(lov);
return lov
});*/

/*let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("prabhas"),4000);
})
promise.then((rebel)=>{console.log(rebel);
return rebel+ "star";
}).then((rebel)=>{console.log(rebel);
})*/

/*let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("nucleic acids"),10000);
})
promise.then((blueprint)=>{console.log(blueprint);
    return blueprint+  "deoxy ribo nucleic acids";
}).then((blueprint)=>{console.log(blueprint);
    return blueprint+  "ribo nucleic acids"
}).then((blueprint)=>{console.log(blueprint);
    return blueprint
})*/

//resolving promises one after other........................................................................................
/*new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("karthik yadav"),10000);
}).then((NAMEs)=>{console.log(NAMEs);
})
return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("MSc botany"),2000);  
}).then((NAMEs)=>{console.log(NAMEs);
})*/
/*new Promise((resolve, reject)=> {

    setTimeout(() => resolve(1), 1000);
  
  }).then((result)=> {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then((result)=> { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then((result)=> {
  
    console.log(result); // 4
  
  });*/

 /*new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(100),7000);
  }).then((bin)=>{
      console.log(bin);
return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(bin*20),5000);
});
  }).then((bin)=>{console.log(bin);
})*/
//async and await functions in javascript..................................................................................

/*async function f() {
    return "karthik yadav";
  }
  console.log(f())*/

/*async function f() {
    return "paramasivam";
  }
  console.log(f());
  
  f().then((make=>{console.log(make);}));*/

  /*Lasync function f() {
    let mine= "paramasivam";
    console.log(mine);
  }
  //f();//it calls like normal function

  //console.log(f()); //it calls like promise in pending
  
  f().then((make=>{console.log(make);}));*/ //it calls like handler..fulfilled

 /*async function f() {
    return Promise.resolve("jisna saanvitha");
  }
  console.log(f()) //promise in pending because every async function returns promise
  
  f().then((korlana=>{console.log(korlana);}));*/ //it is handler
  
  /*async function fin() {
    return Promise.resolve("srikakulam");
  let result=await promise;
  }
  fin().then((kite=>{console.log(kite);}))*/

 /*async function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error iof we don't put async infront of the function...
    //console.log(result);
  }
 //console.log(f());
  f().then((kit=>{console.log(kit);}))*/

  /*async function fin() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("laugh but not in all situations"), 3000)
    });
  
    let result = await promise;

    console.log(result); // wait until the promise resolves (*)
}
    //f().then((result=>{console.log(result);})) // "done!"
  fin();*/

//call() FUNCTION IN JAVASCRIPT.......................................................................
/*let Name={
   firstname:"karthik yadav",
   lastname:"barla",
   printFullName:function(){
       console.log(this.firstname+"  "+this.lastname);
   }
}
Name.printFullName();
let name2={
   firstname:"krishna yadav",
   lastname:"barla",
}
Name.printFullName.call(name2);*/

/*let name1={
   firstname:"Barla",
   lastname:"parama sivam",
}
let printFullName=function(){
   console.log(this.firstname+" "+this.lastname);
}
printFullName.call(name1);
let name2={
   firstname:"karthik yadav",
   lastname:"barla",
}
printFullName.call(name2);*/

/*let name1={
    firstname:"venkata satyanarayana prabhas raju",
    lastname:"uppalapaati",
    printFullName:function(){
        console.log(this.firstname+" "+this.lastname);
    }
}
name1.printFullName();*/

/*let name$={
    firstname:"laxminarayana",
    lastname:"ankaboina",
}
let printFullName=function(){
    console.log(this.firstname+" "+this.lastname);
}
printFullName.call(name$);
let name2={
    firstname:"ram charan",
    lastname:"konidhela",
}
printFullName.call(name2);*/

/*let name2={
    firstname:"ram charan",
    lastname:"konidhela",
}
printFullName.call(name2);
let name$={
    firstname:"laxminarayana",
    lastname:"ankaboina",
}
let printFullName=function(){
    console.log(this.firstname+" "+this.lastname);
}
printFullName.call(name$);*/     //error cannot access 'printFullName' before initialisation....

/*let name_={
    firstname:"manoj",
    lastname:"korlana",
}
let printFullName=function(){
    console.log(this.firstname+" "+this.lastname);
}

printFullName.call(name_);*/

//IF WE PASS SOME ARGUEMENTS IN PARENTHESIS....................................................................

/*let name1={
    firstname:"karthik yadav",
    lastname:"barla",
}
let printFullName=function(district,state){
    console.log(this.firstname+" "+this.lastname+ " from " +district+ ","+state);
}
printFullName.call(name1,"srikakulam","andhrapradhesh.");*/
/*let name2={
    firstname:"Laxmi",
    lastname:"perumalswami",
}
let printFullName=function(district,state){
    console.log(this.firstname+" "+this.lastname+" from "+district+","+state);
}
printFullName.call(name2,"karaikal","puducherry");*/

//apply() Method IN JAVASCRIPT FUNCTIONS.................................................//

/*let name3={
    firstname:"laxminarayana",
    lastname:"ankaboina",
}
let printFullName=function(district,state){
    console.log(this.firstname+" "+this.lastname+" from "+district+","+state);
}
printFullName.apply(name3,["paralakhimundi","orisaa"]);*/

//bind() Method IN JAVASCRIPT FUNCTIONS................................................................................
/*let nAMe={
    firstname:"Hibiscus",
    lastname:"rosa-sinensis",
}
let printFullName=function(famili,divis,clas){
    console.log(this.firstname+" "+this.lastname+":"+famili+":"+divis+":"+clas);
}
let printMyName=printFullName.bind(nAMe,"malvaceae","angiosperm","dicotyledonae");*/
//console.log(printMyName);
//printMyName();


//toString() method in javascript in node.js................................................................................
/*function physiology(){
    console.log("photosynthesis,respiration")
}

console.log(physiology.toString());
console.log(typeof physiology.toString());*/

//creation of object literals..........................................................................................
/*pen={cost:5,name:"mountex",color:"black"}
console.log(pen.cost+" "+pen.name+" "+pen.color)*/

/*emp={
    class:"dicotyledons",
    order:"malvales",
    family:"malvaceae",
    genus:"thespicea",
    species:"populina",
}
console.log(emp.clsss+
    emp.order+
    emp.family+
    emp.genus+
    emp.species)*/
//creation of object new keyWord Object..........................................................................
/*var pen = new Object()
pen.cost="Rs20/-",
pen.name="writo-meter Flair",
pen.color="black"
console.log(pen)*/

//classes are special type of functions and we can declare the classes like function declaration and function expression.........
/*class student{
    constructor(name,age,gender,qualification){
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.qualification = qualification;
    }
    details(){
        console.log(this.name+" "+this.age+" "+this.gender+" "+this.qualification);
    }
}
var candidate1 = new student("Laxmi","18","female","pharmacy");
var candidate2 = new student("karthik yadav","25","male","MSc Botany");
candidate1.details();
candidate2.details();*/

//javascript object literal..................................................................................
/*emp = {id : 108,name : "karthik yadav",designation : "faculty",qualification : "MSc botany"}
console.log(emp.id+" "+emp.name+" "+emp.designation+" "+emp.qualification);*/
//creating instancce object...........................................................................................
/*var student = new Object();
student.id=1717;
student.name = "Rachana";
student.age = 18;
student.group = "pharmacy";
student.gender ="female";
console.log(student.id+" "+student.name+" "+student.age+" "+student.group+" "+student.gender);*/
/*movie = {name : "bahubali", hero : "prabhas"}
console.log(movie.name+" "+movie.hero);*/

//object constructor...............................................................................
/*function student(name,age,group){
    this.name = name,
    this.age = age,
    this.group = group
}
var e = new student("scarlet",18,"pharmacy")
console.log(e.name+" "+e.age+" "+e.group);*/

//javascipt prototype object..................................................................................
/*function family(firstName,lastName){
     this.firstName = firstName;
     this.lastName = lastName;
}
family.prototype.fullName = function(){
    return this.firstName+" "+this.lastName;
}
var member1 = new family("krishna yadav","barla");
var member2 = new family("gavanamma","barla");
var member3 = new family("karthik yadav","barla");
console.log(member1.fullName());
console.log(member2.fullName());
console.log(member3.fullName());*/

//static method in javascript..............................................................................................
/*class Text{
    static dispaly(){
        return "karthik yadav belongs to andhra pradhesh"; 
    }
}
console.log(Text.dispaly());*/
/*class Test{
    static display1(){
        return "karthik yadav from andhra pradhesh"
    }
    static display2(){
        return "senthil from tamilnadu"
    }
}
console.log(Test.display1());
console.log(Test.display2());*/

/*class language{
    static state(){
        return "tamil";
    }
    static state(){
        return "telugu";
    }
}
console.log(language.state());*/

/*class test{
    static dispaly(){
        return "hello world be eco-friendly";
    }
    text(){
        console.log(test.dispaly());
    }
}
var eco = new test();
eco.text();*/
//javascript encapsulation method binding the data to function.................................................
/*class Student{
    constructor(){
        var Name;
        var qualification;
    }
    getName (){
                return this.Name; 
    }
    setName (Name){
        this.Name = Name;
    }
    getQualification(){
        return this.qualification
    }
    setQualification(qualification){
        this.qualification = qualification;
    }
}
var study = new Student();
study.setName("karthik yadav");
study.setQualification("MSc Botany from andhra university");
console.log(study.getName()+" "+study.getQualification());*/

/*class student{
    constructor(){
        var name;
        var place;
    }
    getName(){
        return this.name;
    }
    setName(name){
         this.name = name;
    }
    getPlace(){
        return this.place;
    }
    setPlace(place){
        this.place = place;
    }
}
lover = new student();
lover.setName("jogg water falls");
lover.setPlace("Karnataka");
console.log(lover.getName()+" "+lover.getPlace());*/

/*class friend{
    constructor(){
        let name;
        let place;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getPlace(){
        return this.place;
    }
    setPlace(place){
        this.place = place;
    }
}
var odian = new friend();
odian.setName("rajesh babu yerraminida thaluppula");
odian.setPlace("from kakinada");
console.log(odian.getName()+" "+odian.getPlace());*/

/*class student {
      constructor(){
          var name;
          var marks;
      }
      getName(){
          return this.name;
      }
      setName(name){
          this.name = name;
      }
      getMarks(){
          return this.marks;
      }
      setMarks(marks){
          if(marks<35){
              console.log("fail")
          }else{
              this.marks = marks;
          }
      }
}
var study = new student();
study.setName("gajalaxmi paramasiavam");
study.setMarks(88);
console.log(study.getName()+" "+study.getMarks());*/
//JavaScript Encapsulation Example: Prototype-based approach..........................................
/*function Student(name,marks)  
{  
  var name=name;  
  var marks=marks;  
  Object.defineProperty(this,"name",{  
    get:function()  
    {  
      return name;  
    },  
  set:function(name)  
  {  
    this.name=name;  
  }  
    
});  
   
    Object.defineProperty(this,"marks",{  
    get:function()  
    {  
      return marks;  
    },  
  set:function(marks)  
  {  
    this.marks=marks;  
  }  
    
});  
    
}  
  var stud=new Student("John",80);  
  console.log(stud.name+" "+stud.marks);*/

/*function jersey(name,number){
      /*const name = name;
      const number = number;
      let name = name;
      let number = number;*/
      /*var name = name;
      var number = number;
      Object.defineProperty(this,"name",{
          get:function(){
              return name;
          },
          set:function(name){
              this.name = name;
          }
      });
      Object.defineProperty(this,"number",{
          get:function(){
              return number;
          },
          set:function(){
              this.number = number;
          }
      });
  }
  var cricket = new jersey("virat kohili",18);
  console.log(cricket.name+" "+cricket.number);*/

  //The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.......

//Object constructor....................................................................................................
/*function physiology(photoSynthesis,Respiration){
    this.photoSynthesis=photoSynthesis;
    this.Respiration=Respiration;
}
phyto = new physiology("lightReactions","DarkReactions")
console.log(phyto.photoSynthesis+" "+phyto.Respiration)*/

/*function constructive(photoSynthesis,LightReactions){
    this.photoSynthesis=photoSynthesis,
    this.LightReactions=LightReactions
}
anabolic = new constructive("6Co2 + 12H2O -->C6H12O6 + 6H2O + 6O2","photoSystem-1 & photoSystem-2")
console.log(anabolic.photoSynthesis+":"+anabolic.LightReactions)*/

/*function falseFruit(pedicel,thalamus){
    this.pedicel = pedicel,
    this.thalamus = thalamus
}
pesudo = new falseFruit("Anacardium Occidentalis","Pyrus malus")
//console.log(pesudo.thalamus+";"+pesudo.pedicel)
//console.log(pesudo)*/

//Definig method Objects in javaScripts...................................................
    /*function acedemics(name,degree,year){
        this.name = name;
        this.degree = degree;
        this.year = year;

        this.changeDegree = changeDegree;
        function changeDegree(postDegree){
            this.degree = postDegree;
        }
        this.changeYear = changeYear;
        function changeYear(postYear){
            this.year = postYear;
        }
    }
    qualification = new acedemics("Karthik yadav","BSc botany,Chemistry,Bio-Technology","2013-2016")
    console.log(qualification.name+" "+qualification.degree+" "+qualification.year)
    console.log(qualification);
    qualification.changeDegree("MSc Botany");
    console.log("<br>"+qualification.name+" "+qualification.degree+" "+qualification.year)
    qualification.changeYear("2016 - 2018")
    console.log("<br>"+qualification.name+" "+qualification.degree+" "+qualification.year)*/
 //Object.assign method in javaScript.........................................................
    /*const object1 = {  
        a: 1,  
        b: 2,  
        c: 3  
      };  
      const object3= {  
        g: 1,  
        h: 2,  
        i: 3  
      };    
        
      const object2 = Object.assign({c: 4, d: 5}, object1);  
      const object4 = Object.assign({g: 34, h: 25}, object3);  
      console.log(object2.c, object2.d);  
      console.log(object4.g, object4.h);*/

      /*const object1 = {  
        a: 100,  
        b: 200,  
        c: 300  
      };  
        
      const object2 = Object.assign({c: 400, d: 500, e: 700}, object1);  
      console.log(object2.c, object2.d, object2.e);*/ 

      
//Object.create in javaScript..........................................................................................
    /*const people = {  
   print:function()  
   {  
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
  }  
};  
const me = Object.create(people);  
me.name = "Karthik Yadav"; // "name" is a property set on "me", but not on "person"  
me.isHuman = true; // inherited properties can be overwritten  
me.print();*/

/*const fruit  = {
    printPomo:function(){
        console.log(`pedicel developed in to fruit in ${this.name} and thalamus developed into fruit in ${this.name}`);
    }
};
const falseFruit = Object.create(fruit)
falseFruit.name = "Anacardium occidentalis";
falseFruit.name = "Pyrus malus";
falseFruit.printPomo();*/

/*const physiology = {
    printPhysio:function(){
        console.log(`light reactions are taking place in the presence of light in ${this.name} & dark reaction are taking place without involvement of light in ${this.name}`);
    }
}
const photoSynthesis = Object.create(physiology);
photoSynthesis.name = "grana";
photoSynthesis.name = "stroma";
photoSynthesis.printPhysio();*/

/*const catabolic = {
    printReductive:function(){
        console.log(`this catabolic reaction taking place in the ${this.name} 4 process tkaing place in the glycolisis,oxidative de-carbaxilation ans tricarbaxilic acid cycle take place ${this.name} and the photophosphorylation taking place in the ${this.name}`);
    }
}
const respiration = Object.create(catabolic);
respiration.name = "mitochodria";
respiration.name = "inner mitochodrial membrane";
respiration.printReductive();*/

/*const summer = {
    printSeason:function(){
        console.log(`this very hot and terrible climate and devastating ${this.name}`);
    }
}
const season = Object.create(summer)
season.name ="covid pandemics";
season.printSeason();*/

//object.defining property..............................................................
/*const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: "karthikyadav1727@gmail.com", } );  
  object1.property1;  
    // throws an error in strict mode  
console.log(object1.property1);*/

/*const object2 = {}
Object.defineProperty(object2,'property2',{
    value:"evrything will come to you on rightTime if you really deserve it"
});
Object.defineProperty(object2,'property3',{
  value:"be good for no reason"
});
object2.property2;
console.log(object2.property2);
console.log(object2.property3)*/

/*const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: "karthik yadav",  
  value: "Ramesh",  
  value: "jagadheesh",  
  });  
object1.property1
// throws an error in strict mode  
console.log(object1.property1);*/

/*var object2 = {};
Object.defineProperty(object2,'property2',{
value:"ram charan",
value:"prabhas",
value:"karthik yadav",
})
object2.property2;
console.log(object2.property2);*/

//object.defineProperties() in javaScript..............................................................................
/*const obj = {};  
Object.defineProperties(obj,{  
  property1: {  
    value: 142,  
    value: 422,  
    value: 423,  
    },  
  property2: {  
  value: 22,  
  value: 12,}  
});  
console.log(obj.property1,obj.property2);*/

/*let fam = {};
Object.defineProperties(fam,{
    property2: {
        value:"krishna yadav",
        value:"karthik yadav"
    },
    property3:{
        value:"gavanamma",
        value:"gajalaxmi paramasivam"
    }
});
console.log(fam.property2+";"+fam.property3);*/

/*var physiology = {};
Object.defineProperties(physiology,{
    photosynthesis:{
        value:"photoSystem-1",
        value:"photoSystem-2",
        value:"light reactions"
    },
    respiration:{
        value:"glycolysis",
        value:"oxidative De-carbaxilation",
        value:"Tri-carbaxilation acid cycle",
        value:"oxidative phosphorylation"
    }
});
console.log(physiology.photosynthesis+":"+physiology.respiration);*/

//Object.entries() in javaScript........................................................................
/*const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(obj)[2]);*/

/*let plants = {1:"pterocarpus santalinus", 2:"withania somanifera" ,3:"tectonia grandis"}
console.log(Object.entries(plants)[1]);*/

/*var bacteria = {1:"bacillus thurengenesis", 2:"thiomargirata namiebiensis", 3:"Epilofisum fishelsoni", 4:"delphinium"}
console.log(Object.entries(bacteria)[2]);*/
//console.log(Object.entries(bacteria));

/*const obj = { 1: 'marrc', 2: 'sort', 3: 'carry' };     
console.log(Object.entries(obj)[2]);*/

//Object.freeze() method is used to prevent the alteration of exisiting property.................................
/*const object1 = {  
    property1: 143,  
  };  
  const object2 = Object.freeze(object1);  
  object2.property1 = 33;  
  // Throws an error in strict mode  
  console.log(object2.property1);*/

  /*var bacteria = {
      value:"thiomargirata namiebiensis",
  };
  var parasite = Object.freeze(bacteria)
  parasite.bacteria = "eupilopisum fishelsoni"
  console.log(parasite.value)*/

  /*const plant = {
      value:"solanum melangena",
  };
  phyto = Object.freeze(plant);
  phyto.plant = "psidium gujava";
  console.log(phyto.plant)*/  //undefined


  /*const obj1 = {value:"freeze it"};
  const obj2 = Object.freeze(obj1);
  obj2.value ="disolve it";
  console.log(obj2.value);*/

  /*var nameObj = {value:"karthik yadav"};
  //console.log(nameObj);
  nameObj2 = Object.freeze(nameObj)
  nameObj2.value = "onida"
  console.log(nameObj2.value)*/ 

  /*var obj = { prop: function() {}, name: 'charry' };  
       console.log(obj);  
       obj.name = 'karri';  
       delete obj.prop;  
       console.log(obj);*/ 
       /*var o = Object.freeze(obj);  
       obj.name = 'chris';  
       console.log(obj);*/

 //javascript object getOwnPropertyDescriptor() method..................................................................
 /* const object1 = {  
    property1: 42  
  }  
  const object2 = {  
    property2: 34  
  }  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');  
  const descriptor2 = Object.getOwnPropertyDescriptor(object2, 'property2');  
  console.log(descriptor1.enumerable);  
  console.log(descriptor2.enumerable);  
  console.log(descriptor1.value);  
  console.log(descriptor2.value);*/

  /*const obj1 = {
      value:"karthik yadav",
  };
  const obj2 = {
      value:"Panther",
  };
  const descriptor1 = Object.getOwnPropertyDescriptor(obj1,'value')
  const descriptor2 = Object.getOwnPropertyDescriptor(obj2,'value')
  console.log(descriptor1.enumerable)
  console.log(descriptor2.enumerable)
  console.log(descriptor1.value)
  console.log(descriptor2.value);*/

  /*const palnt1 = {
      value1:"spathodea campanulata",
  };
  const plant2 = {
      value2:"heliotropium indicum",
  };
  const descriptor1 = Object.getOwnPropertyDescriptor(palnt1,'value1')
  const descriptor2 = Object.getOwnPropertyDescriptor(plant2,'value2')
  console.log(descriptor1.enumerable)
  console.log(descriptor2.enumerable)
  console.log(descriptor1.value)
  console.log(descriptor2.value)*/

  //Object.getOwnPropertyDescriptors() method in javaScript................................................................
  /*const cast = {
      value:"yadava's",
  };
  const fam = Object.getOwnPropertyDescriptors(cast);
  console.log(fam.value.writable)
  console.log(fam.value)*/

  /*let flower = {
      value:"refflesia",
  };
  //const horti = Object.getOwnPropertyDescriptors(flower)
  const horti = Object.getOwnPropertyDescriptor(flower,'value')
  //console.log(horti.value.writable)
  console.log(horti.enumerable)
  console.log(horti.value)*/

  /*const object1 = {  
    property1: 22  
  };  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
  console.log(descriptors1.property1.value);  
  console.log(descriptors1.property1);  
  console.log(descriptors1.property1.writable);*/
//-----------------------------------------------------------------------------------------------
  /*const fan = {
      property1:"prabhas",
  };
  const fav = {
      property2:"ram charan",
  };
  //const descriptor1 = Object.getOwnPropertyDescriptor(fan,/*fav,'property1',*//*'property1')*/
  /*const descriptor2 = Object.getOwnPropertyDescriptor(fav,'property2')
  console.log(descriptor1.enumerable)
  console.log(descriptor1.value)
  console.log(descriptor2.enumerable)
  console.log(descriptor2.value)*/
  //const descriptor1 = Object.getOwnPropertyDescriptors(fan)
  //const descriptor2 = Object.getOwnPropertyDescriptors(fav)
  /*console.log(descriptor1.property1.writable)
  console.log(descriptor1.property1.value)
  console.log(descriptor1.property1)*/
  /*console.log(descriptor2.property2.writable)
  console.log(descriptor2.value)  //this is displaying undefined
  console.log(descriptor2.property2.value)
  console.log(descriptor2.property2)*/
//-----------------------------------------------------------------------------------------------------
//javaScript Object.getOwnPropertyNames()..........................................................................
/*const object1 = {  
    karthikYadav: 0,  
    gajaLaxmiParamaSivam: 1,  
    saiChaitanyaHanumanthu: 2,  
  };  
  console.log(Object.getOwnPropertyNames(object1));*/

  /*var obj = { 0: 'a', 1: 'b', 2: 'c' };  
console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'  
  
// Logging property names and values using Array.forEach  
  
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {  
  console.log(val + ' -> ' + obj[val]);  
  
});*/
/*const names = {peterEngland:1 , usPolo:2 ,AdamParker:3};
console.log(Object.getOwnPropertyNames(names));*/

//Object.is() method in javaScript..............................................................................................
/*const object1 = {value:"karthik yadav",
value:"karthik yadav"};  
/*console.log(Object.is(object1));
Object.seal(object1)
console.log(Object.isSealed(object1))*/
//console.log(Object.isExtensible(object1))

//JavaScript Array method..................................................................................................
/*var emp=["Sonoo","Vimal","Ratan"];  
for (i=0;i<emp.length;i++){  
console.log(emp[i]);  
}*/ 

/*var family=["krishna yadav", "gavanamma yadav", "karthik yadav"];
for(i=0;i<=family.length;i++){
    console.log(family[i]);
}*/
/*const planets = [
    "earth",
    "marse",
    "jupiter",
    "venus"
];
planets.forEach((elements)=>{
    console.log(elements)
});*/

//array find()...........................................................................
/*const states = [
    "andhra pradhesh",
    "telangana",
    "tamilnadu",
    "karnataka",
    "kerala"
];
const DifStates = states.find((lang)=>{
    return "karnataka" === lang;
});
console.log(DifStates);*/
//array findIndex()......................................................................................
/*const dist = [
    "srikakulam",
    "vizayanagaram",
    "vishakapattanam",
    "east godavari",
    "west godavari",
    "krishna",
    "guntooru",
    "prakasham"
];
const area = dist.findIndex((telugu)=>{
    return "guntooru" === telugu;
})
console.log(area);*/

/*const language = [
    {lan:"sanskrit", state:"south india"},
    {lan:"telugu", state:"andhra pradhesh"},
    {lan:"tamil", state:"tamilnadu"},
    {lan:"kannada", state:"karnataka"},
    {lan:"malayalam",state:"kerala"}
];
const lang = language.map((ind)=>{
    return ind.state
});
console.log(lang);
console.log(language);*/

/*const language = [
    {state:"maharastra",lan:"marwadi"},
    {state:"gujarath",lan:"gujarathi"},
    {state:"rajasthan",lan:"hindhi"},
    {state:"punjab",lan:"punjabi"},
    {state:"orisaa",lan:"odia"},
    {state:"west bengal",lan:"bengali"},
    {state:"meghalaya",lan:"konchini"},
];
const northIndia = language.filter((ind,index)=>{
    //return ind.lan !=="odia";
    return ind.lan ==="odia";
});
console.log(northIndia);*/
//javascript array includ() method........................................................................................
/*var bot=[
    {vernacularName:"chikkudu", scientificName:"pisum sativum"},
    {vernacularName:"blackgram", scientificName:"phaseolus areus"},
    {vernacularName:"greengram", scientificName:"phaseolus mungo"},
    {vernacularName:"sankampoolu", scientificName:"clitoris ternata"},
    {vernacularName:"kommu senagalu", scientificName:"cicer aeratinum"},
    {vernacularName:"veru senaga", scientificName:"arachis hypogea"},
    {vernacularName:"pigeon pea", scientificName:"cajanus cajan"}
];
var fabaceae = bot.includes({vernacularName:"sankampoolu", scientificName:"clitoris ternata"});
console.log(fabaceae);*/
/*const fruits = [
    "pyrus malus",
    "psidium gujava",
    "vitis vinifera",
    "mimosaps ellangi",
    "musa paradisica"
];
var horti = fruits.includes("vitis vinifera");
console.log(horti);*/

//javascript join() is used to join all the elements in the array into single new array......................................
/*var colors = [
      "white",
      "black",
      "green",
      "red",
      "blue",
      "pink",
      "orange"
];
 var colours = colors.join();
console.log(colours);*/
//console.log(colors);
/*var types = [
    "pome","pepo","drupe","hesperidium","berry"
];
var pomology = types.slice(1);
console.log(pomology);*/

 /*var inFlorescence = [
     "hypanthodium","cyathium","verticellaster","head","spadix","catkin","racemose","cymose","helicoid","scorpioid"
 ];*/
 /*var flower = inFlorescence.findIndex((ink)=>{
     return "head" ===ink;
 });
 console.log(flower);*/
 /*var peduncle = inFlorescence.splice(3);
 console.log(peduncle);*/
//javascript Array directly new keyWord().........................................................................
/*var i;  
var emp = new Array();  

emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i=0;i<=emp.length;i++){  
console.log(emp[i]);  
}*/

//javaScript array constructor (new Keyword).........................................................................
/*var emp=new Array("virat","rohit","shikar","rahul","rishab","mayank","jadeja");  
for (i=0;i<emp.length;i++){  
console.log(emp[i]);  
}*/

//javascript array concate() method.....................................................................
/*const plants = ["thalamus","pedicel","entire inFlorescence","single ovule to fruitLet"];
const example = ["pyrus malus","anacardium occidengtalis","artocarpus","annanus squamosa"];
/*const Bot = example.concat(plants)
console.log(Bot);*/
/*const Bot = plants.concat(example)
console.log(Bot);*/

//javascript array copyWithin()Method..............................................................................
/*var arr=["srikakulam","vizayanagaram","vishakapttanm","eastGodavari","westGodavari","krishna","guntur","praksham"]    
var result=arr.copyWithin();  
console.log(result);*/

//javaScript array entries()method.....................................................................
/*var arr=['John','Michael','Embrose','Herry','Lewis'];  
    var itr=arr.entries();  
    console.log("After applying the entries method:"+"<br>");  
  
    for(var e of itr) //for loop using var.  
    {  
        console.log(e+"</br>");  
    }*/

    /*var arr = ["orange","dhruva","rangasthalam","chirutha",",magadheera"]
    var Name = arr.entries();
    console.log("apply");
    for(var e of Name){
        console.log(e);
    }*/

     /*const pen = ["mountex","reynolds","flair","spirit","Brite","Elkos"]
     const ink = pen.entries();
     for(var gel of ink){
        console.log(gel);
     }*/
     /*const movies = ["darling","mr.perfect","bahubali","mirchi","varshma","chathrapathi"]
     const chitram = movies.entries();
     console.log("prabhas movie")
     for (const hits of chitram){
         console.log(hits)
     }*/

     //JavaScript Array every() method
     /*var marks=[50,40,45,37,60];  
  
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  
  
console.log(marks.every(check));*/

/*const covidCases  =[100,120,150,40];
function pandemic(value1){
    return value1>90;
}
console.log(covidCases.every(pandemic))*/
//using flat() method................................................................
/*var arr=['a','b',['c','d']]; //given 2D array  
var newArr=arr.flat(); //using flat() method  
document.write("After flattening the array:  "+newArr);*/ 

/*var loveBirds=['karthik yadav','gajalaxmi paramasivam',['AndhraPradhesh','TamilNadu']]; 
var Love=loveBirds.flat();   
console.log(Love);*/

/*var graduation = ["botany","chemistry","bio-technology",["Botany,zoology"]];
var bio = graduation.flat();
console.log(bio);*/

//Testing a multidimensional array with flat() method................................................
/*var myFam = ["karishnaYadav","Gavanamma","karthikYadav",["LaxmiNarayanaAnakaboina","SunithaAnkaboina",["ManojKorlana","AnithaKorlana",["SivajiPilaka","UmaDheviPilaka"]]]];
var yadavas = myFam.flat();
console.log(yadavas);*/

//JavaScript String literal.......................................................................
/*var Name = "karthik yadav";
console.log(Name);*/

//creating string in JavaScript by new keyword.....................................................
/*const berry = new String("musa paradisica")
console.log(berry);*/

//JavaScript String charAt() Method Example...........................................................
/*var str="Javatpoint";  
console.log(str.charAt(0));
console.log(str.charAt(5));*/

//javascript charCodeAt() method...............................................................
/*var x="zeaMays";  
console.log(x.charCodeAt(0));
console.log(x.charCodeAt(2));*/

//JavaScript String concat() Method Example
/*var me = "karthik yadav";
var mine = "gloriosa";
var aff = "raulfia";
console.log(me.concat( " v/s "+mine," v/s ",aff));*/

//JavaScript String indexOf() method example..............................................................................
/*let plant = "crysoludigocarpus lutiscence";
console.log(plant.indexOf('o'));*/
//1st character of givenj string..............................................
/*const Name = "karthik yadav";
console.log(Name.indexOf('yadav'));*/

//The JavaScript string search() method is used to search the regular expression in the given string.........................................
/*var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("Scripting"));*/
//console.log(str.search(/scripting/));

/*const string = "javascript is a scripting language. Scripting languages are often interpreted";
console.log(string.search(/Scripting/i));*/

/*const Name = "karthik yadav  Krishna yadav";
console.log(Name.search("barla"));*/

//The JavaScript string match() method is used to match the string against a regular expression.......................................
/*let fruit = "citrallus lanatus";
//console.log(fruit.match("lanatus"));
//console.log(fruit.match(/lanatus/));
//console.log(fruit.match("Lanatus"));
//console.log(fruit.match(/Citrallus/gi));
//console.log(fruit.match(/Citrallus/g));
//console.log(fruit.match(/[a-m]/));
//console.log(fruit.match(/[c-p]/g));  //globalSearch.
//console.log(fruit.match(/[c-p]/gi));*/  //flag modifier ig.

//The JavaScript string replace() method is used to replace a part of a given string with a new substring........................
//let myDetails = "mySelf karthik yadav and my mail-Id karthikyadav1727@gmail.com karthik yadav have completed masters in andhra university in botanical sciences";
//console.log(myDetails.replace('karthik yadav','krishna  yadav'));
//console.log(myDetails.replace('/krishna yadav/','karthik yadav'));

//The JavaScript string substr() method fetch the part of the given string and return the new string.................................
/*const Name = "karthikYadav";
console.log(Name.substr());
console.log(Name.substr(0,7));
console.log(Name.substr(7));*/

//JavaScript String substring() Method............................................................
/*let Name = "karthikyadav";
console.log(Name.substring(7,8));*/

//The JavaScript string slice() method is used to fetch the part of the string and returns the new string.........................
/*var whale = "BelanopteraMusculus";
console.log(whale.slice(0));
console.log(whale.slice(0,6));
console.log(whale.slice(6));
console.log(whale.slice(-6));*/

//The JavaScript string toLowerCase() method is used to convert the string into lowercase letter.................................
//let snake = "STACHYTERPETAJEMEICHENESIS";
/*var snake  = new String("BIGNONIA");
console.log(snake.toLowerCase()); 
console.log(snake.toLocaleLowerCase());*/

//The JavaScript string toUpperCase() method is used to convert the string into uppercase letter...................................
//const tree = "mangiferaindica";
/*let tree = new String("PongamiaPinnata");
console.log(tree.toUpperCase());
console.log(tree.toLocaleUpperCase());*/

//JavaScript String toString() Method.........................................................................
/*const pepo = "CucumisSativus"; 
console.log(pepo.toString());*/
/*const drupe =new String ("coconut");
console.log(drupe.toString());*/

//JavaScript String valueOf() Method..................................................................................
/*let leaf = "victoria regia";
console.log(leaf.valueOf());*/

/*let flower  = new String("refflessia");
console.log(flower.valueOf());*/

//JavaScript math object provides several constants and methods to perform mathematical operation............................
/*var num = 4
console.log (Math.sqrt(num));*/
//console.log(Math.random()); getting one random inbetween 0-1....
//console.log(Math.pow(2,3));
//console.log(Math.floor(9.1));    //9
//console.log(Math.ceil(8.1));     //9
/*console.log(Math.round(9.1));
console.log(Math.round(9.5));*/

/*console.log(Math.abs(null));
console.log(Math.abs([]));
console.log(Math.abs(""));*/
/*console.log(Math.abs("null"));
console.log(Math.abs("string"));
console.log(Math.abs());
console.log(Math.abs([6,8]));*/

//JavaScript Number isFinite() method...................................................
/*var x=6;
var x =9.7;
var x= -9;
var i = 0;
console.log(Number.isFinite(x));
console.log(Number.isFinite(i));*/
//var num = "infinity";
//console.log(Number.isFinite(num));
/*function num(j,p){
  return j+p;
}
console.log(num(9,5));*/

//JavaScript Number isInteger() method
//var num = 4.7;
//var num = 4;
//var num =-5;
//var num = "interger";
//console.log(Number.isInteger(num));

//JavaScript Number parseFloat() method example..................................................................
//var num = "8.9";
//var num = "8";
//var num = "8 eight";
//var num = "eight";
//console.log(Number.parseFloat(num));
//boolean..........................................
/*var a = 50;
console.log(20<(a));*/
//the javascript navigator object used for the browser detection........................
/*document.writeln(navigator.appCodeName);
            document.writeln(navigator.appName);
            document.writeln(navigator.appVersion);
            document.writeln(navigator.cookieEnabled);
            document.writeln(navigator.language);
            document.writeln(navigator.languages);
            document.writeln(navigator.userAgent);
            document.writeln(navigator.userLanguage);
            document.writeln(navigator.plugins);
            document.writeln(navigator.onLine);
            document.writeln(navigator.platform);*/

//The JavaScript screen object holds information of browser screen.
/*console.log(screen.width);
            console.log(screen.height);
            console.log(screen.availHeight);
            console.log(screen.availWidth);
            console.log(screen.pixelDepth);
            console.log(screen.colorDepth);*/

/*var emp=new Object();
emp.name="karthik yadav",
emp.qualification="MSc Botany",
emp.salary=50000
console.log(emp.name+" "+emp.qualification+" "+emp.salary)*/

/*let name4={
    firstname:"datura",
    lastname:"metel",
}
let printFullName=function(famili,division,clas){
    console.log(this.firstname+" "+this.lastname+";"+famili+";"+division+";"+clas);
}
printMyName=printFullName.bind(name4,"solanaceae","angiosperms","dicotyledons");
console.log(printMyName);
printMyName();*/
//node JS.......................................................................................................................
//console.log("karthik yadav");
//console.log("we can also %s","format specifier");
//console.error(new Error("hello!mr'karthik yadav this is wrong method"));
/*const Name="karthik yadav";
console.warn(`dont mesh-up with ${Name}`);*/
 /*let Name="hamlets";
 console.warn(`i like  ${Name}`);*/
 /*var pen="Mountex";
 console.warn(`this is ${pen}`);*/
//node.js http request...........................in command prompt
/*var http = require("http");
http.createServer(function (req, res) {
  res.write("Botany"); 
  res.end(); 
}).listen(8080);
console.log("Server running at http://127.0.0.1:8080/");*/

//node js module in javascript.......................................................................................................
/*export function (n){
    return n*5;
}*/
/*var a="karthk yadav";
console.log(a);*/

//create severe object..........................................................................
/*const http=require("http");
http.createServer(function(req,res){
    res.write("karthik yadav testing server");
    res.end();
}).listen(3000, function(){
console.log("started")
})*/

/*const http=require("http");
http.createServer(function(req,res){
    res.write("don't show discrimination on anyone with regarding to colour cast creed");
    res.end();
}).listen(8080, function(){
    console.log("karthik yadav")
})*/

/*const {createServer} =require('http');

const server=createServer((request,Response)=>{
    Response.writeHead(200,{'content-Type':'kinley.html'});
    Response.write("<h1>hai world<h1>");
    return Response.end();
});
server.listen(3000);*/

/*const {createServer} =require("http");
const server=createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'green.html'});
    response.write("restricted world");
    return response.end();
});
server.listen(8080);*/
//application/json...................

/*Lconst {createServer} =require("http");
const server=createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'application/json'});
    response.write(JSON.stringify({a:1, b:2, c:3}));
    return response.end();
});
server.listen(8080);*/

/*const http =require("http");
http.createServer(function(res,req){
    console.log(req.url);
    res.write("testing server in browser");
    res.end();
}).listen(3000, function(){
    console.log("starting server by karthik yadav")
})*/

/*const http =require("http");
const { callbackify } = require("node:util");
http.createServer(function(req,res){
    var URL = req.url;
    if(URL === "junk.html"){
        res.write("this is junk.html")
        res.end();
    }else if (URL === "/intel.html"){

    }else{
        res.write("karthik yadav testing server")
    }
}).listen(3000, function (){
    console.log("started")
})*/

/*var fs = require('fs')
fs.readFile("junk.html",(error,data)=>{
    if(error){
        console.log("this is an error message")
    }else{
        console.log("karthik yadav:"+data)
    }
})
console.log("gajalaxmi paramasiavam");*/

//node.js synchronous mode function excution......................................................................
/*function myName(){
    console.log("karthik yadav");
}
function qualification(){
    console.log("MSc botany in andhra university");
}
myName();
qualification();*/

//By default node.js asynchronous type of function excution.................................................................
/*function myName(){
    setTimeout(()=>{
        console.log("karthik yadav");
    },10000)
    
}
function qualification(){
    console.log("MSc botany in andhra university");
}
myName();
qualification();*/

//synchronous can be used through try catch block method.....................................................................
/*function myName(){
    setTimeout(()=>{
        console.log("karthik yadav");
    },10000)
    
}
function qualification(){
    console.log("MSc botany in andhra university");
}
//myName();
//qualification();
    try{
        console.log("karthik yadav")
    }
    catch(error){
        console.log("if an error while getting myName."+error)
    }
    finally{
        qualification();
    }*/

//synchronous can be used through promises.............................................................
 /*function myName(){
        setTimeout(()=>{
            console.log("karthik yadav");
        },10000)
        
    }
    function qualification(){
        console.log("MSc botany in andhra university");
    }
    var me=new Promise((res,rej)=>{
        //console.log("karthik yadav")
        res("myName has recived")
    }).then((data)=>{
        console.log(data)
        qualification()
    }).catch((error)=>{
        console.log(error)
    })*/

    /*function myName(){
        setTimeout(()=>{
            console.log("karthik yadav");
        },10000)
        
    }
    function qualification(){
        console.log("MSc botany in andhra university");
    }
    var me=new Promise((res,rej)=>{
        console.log("karthik yadav")
        res("myName has recived")
    }).then((data)=>{
        //console.log(data)
        qualification()
    }).catch((error)=>{
        console.log(error)
    })*/

    /*function myName(){
        setTimeout(()=>{
            console.log("karthik yadav");
        },10000)
        
    }
    function qualification(){
        console.log("MSc botany in andhra university");
    }
    var me=new Promise((res,rej)=>{
        console.log("karthik yadav")
        res()        //no need write any string in the res()
    }).then((data)=>{
        //console.log(data)
        qualification()
    }).catch((error)=>{
        console.log(error)
    })*/

    //if i reject the promise then it will come to catch bolck
    /*function myName(){
        setTimeout(()=>{
            console.log("karthik yadav");
        },10000)
        
    }
    function qualification(){
        console.log("MSc botany in andhra university");
    }
    var me=new Promise((res,rej)=>{
        console.log("karthik yadav")
        //res()
        rej()
    }).then((data)=>{
        //console.log(data)
        qualification()
    }).catch((error)=>{
        console.log(error)
    })*/

    //EXPORT AND REQUIRE....................................................................
    /*let x = ('./pen')
    console.log(x.karthikYadav)*/
    //result is undefined because we have to use require

    /*let x = require('./pen.js')
    console.log(x.karthikYadav)*/
    //result is function:hello..

    /*let x = require('./pen.js')
    console.log(x.karthikYadav())*/
    //we have to function assigned keyword like a function()

    /*let x = require('./pen.js')
    console.log(x.karthikyadav)
    x.karthikyadav();
    console.log(x.name) //exporting property
    x.user("it's me karthik yadav")*/

    /*let x = require('./pen.js')
    console.log(x.barla)
    x.barla();
    console.log(x.name) //exporting property
    x.user("it's me karthik yadav")*/

    //readStream in node.js.............................................
    /*var fs = require('fs');
    var readStream = fs.createReadStream('kinley.html')
    var orange ='';
    readStream.setEncoding('utf8')
    readStream.on('data',function(ramcharan){
        orange +=ramcharan
    })
    readStream.on('end',function(){
        console.log(orange)
    })*/
    //writeStream in node js..........................................................................
    /*var fs = require('fs')
    var writeData = "karthik yadav MSc botany andhra university in vishakapttanam,during the year 2016-2018"
    var writeStream = fs.createWriteStream('myProfile.txt')
    writeStream.write(writeData,'utf8')
    writeStream.end()
    writeStream.on('finish',function(){
        console.log("this data has been printed")
    })*/

    //events in node.js....................................................................................................
    /*var events = require('events');
    var eventEmitter = new events.EventEmitter();
    var button = function(){
        console.log("karthik yadav clicking the door bell")
    }
    eventEmitter.on('DoorBell',button)
    eventEmitter.emit('DoorBell')*/

    /*var events = require('events')
    var eventEmitter = new events.EventEmitter();
    var hungry = function(){
        console.log("when you feel like hungry and you are sleeping on the right moment you have some ice in fridge then what will you open 1st")
    } 
    eventEmitter.on('eyesLashes',hungry)
    eventEmitter.emit('eyesLashes')*/

    /*var events = require('events')
    var eventEmitter = new events.EventEmitter();
    var Switch = function(){
        console.log("fan has revolve")
    }
    eventEmitter.on('power',Switch)
    eventEmitter.emit('power')*/

    /*var events = require('events')
    var eventEmitter = new events.EventEmitter()
    var power = function(){
        console.log("if we click the power button on remote it'll turn on the televison")
    }
    var selfButton = function(byk){
        console.log("after unlock your ingnition if press the button motor engeine will start"+byk)
    } //we can pass arguments also in anonymous function perenthesis
    eventEmitter.on('remote',power)
    eventEmitter.emit('remote')
    eventEmitter.on('engine',selfButton)
    eventEmitter.emit('engine',"vikranth 15 a ghazi ship metal made vehicle")*/

/*const https = require("https");
const fs = require("fs");
const path = require("path");
const option = {
    hostname:'reqres.in',
    path:'/api/users?page=2',
    method:'GET'
};
const req = https.request(option,(res)=>{
    console.log('statusCode:',res.statusCode);
    console.log('headers:',res.headers);
    res.on('data',(d)=>{
        console.log(d);
    });
});
req.on('error',(e)=>{
    console.error(e);
});
req.end();*/

/*const https = require("https");
const fs = require("fs");
const path = require("path");
const option = {
    hostname:'reqres.in',
    path:'/api/users?page=2',
    method:'GET'
};
const axios = require('axios')
axios.get("https://reqres.in/api/users?page=2").then(data=>{
    console.log(data);
})*/

/*const axios = require('axios')
axios.get("https://reqres.in/api/users?page=2").then(data=>{
    console.log(data);
})*/

/*const axios = require('axios')
async function getUsersData(){
    const data = await axios.get("https://reqres.in/api/users?page=2")
    console.log(data);
}
getUsersData();*/

/*const axios = require('axios')
async function karthikYadav(){
    const data = await axios.get("https://reqres.in/api/users?page=2")
    console.log(data.data)
}
karthikYadav();*/

//GET REQUEST list of users.................................................
/*const axois = require('axios')
async function laxmi(){
    const data = await axios.get("https://reqres.in/api/users?page=2")
    console.log(data.data)
}
laxmi();*/
//GET REQUEST single user.............................................................
/*const axios = require('axios')
async function hike(){
    const data = await axios.get("https://reqres.in/api/users/2")
    console.log(data)
}
hike();*/

//POST REQUEST using api axios.........................................................
/*const axios = require('axios')
async function user(){
    const data = await axios.get("https://reqres.in/api/users")
    console.log(data.data)
}
user();*/

//PUT REQUEST...............................................................................
/*const axios = require('axios')
async function kit(){
    const data = await axios.get("https://reqres.in/api/users")
    console.log(data)
}
kit();*/

//DELETE REQUEST.................................................................
/*const axios = require('axios')
async function kite(){
    const data = await axios.get("https://reqres.in/api/users/2")
    console.log(data)
}
kite();*/

//POST REQUEST...........................................................................
/*const axios = require('axios')
async function lit(){
    const data = await axios.get("https://reqres.in/api/register")
    console.log(data)
}
lit();*/


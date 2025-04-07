// function sayHello()
// {
//     let you=prompt("Waht's on your mind ?");
//     console.log("Hello",you+"!");
// }
// sayHello();



// let varcontainingFunction = function()
// {
//     let varInFunction="I'm in a function";
//     console.log("hi! there",varInFunction);
// };
// varInFunction();




// PARAMETERS & ARGUMENTS
// **********************

// function tester(para1,para2)
// {
//     return para1+" "+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// let= tester(arg1,arg2);
// console.log(let);


// function addTwoNumbers(x,y)
// {
//     console.log(x+y);
// }
//  input1=parseInt(prompt("Enter the first number"));
//  input2=parseInt(prompt("Enter the second number"));
//  addTwoNumbers(input1,input2);

// let arr=[];
// arr.push("argument");


// DEFAULT ARGUMENTS
// function addTwoNumbers(x=2,y=3)   // def arguments are x and y
// {
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(2,4);                         
// addTwoNumbers(1,2,3,4);
// let result = addTwoNumbers(2,4);  // to neeche undefined bhi aayega ans le baad if ek argument dete to dusra apne aap undefined leta toh ans hi undefined aata kyuki js code ko crash nahi krta hai



// ARROW FUNCTION
// let doingArrowStuff= x => console.log(x);
// doingArrowStuff("Great!");

// arrow function syntax =
// (para1 , para2) => {body};
// let doingArrowStuff = x => console.log(x);

// const arr = ["ayushi", "alapce", "buddy"];
// arr.forEach (e => console.log(e));


// SPREAD OPERATORS = 

// let spread = ["ayushi", "sahhan"];
// let message = ["hello" , "hii" , ...spread , "and"];
// console.log(message);

// function add(x,y, z,a){
//     console.log(x+y + z+ a);
// }
// let arr = [5,6];
// let arr2 = [6,8];
// add(...arr , ...arr2);


// REST OPERATOR  = can take any number of arguments just like varargs in java 
// function Hello(para1, ...para2){     // use triple dot to make para2 rest operator 
        
//     console.log(para1, para2); 

// }
// Hello("hii", "hello", "how are your");



// RETURNING FUNCTION VALUE 
// let addTwoNumbers = (x,y) => x+y;
// let resultArr=  [];
// for(let i = 0; i<10 ; i++){
//     let result = addTwoNumbers(i, i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);




// let addTwoNumbers = (x,y) => x+y;          // no need to write return in single line code
// OR
// let addTwoNumbers = (x,y) => {
//     console.log("adding..");
//     return x+y;
// }

// let result = addTwoNumbers(12,15);
// console.log(result);


// VARIABLE SCOPE IN FUNCTIONS  = LET VAR AND CONST
//  let and cosnt are same = block scope => visible inside fxn
    // let acn be re initialize but not re-declare 
// var = function scope     => like global var 

// function availibility(x){
//     console.log("available", x);      // gives available hii
// }
// availibility("hii");
// console.log("not available", x);    //here, refernece error x is undefined (coz x in local var not global)


// function availibility(){
//     let y = "local var";
//     console.log("available", y);      // gives available hii
// }
//   availibility("hii");
//   console.log("not available", y); //here, reference error x is undefined (coz x in local var not global)



//   function availibility(){
//     let y = "ill return";
//     console.log("available", y);      // gives available hii
//     return y;
// }
//   let z = availibility();
//   console.log(" z available", z)
//   console.log(" y not available", y);


// function stuff(){
//     if(true){
//         var x = "local";        // output aayega agar coz var fxn scope me hota hai if
//         let x = "local"                //  let hota vo nahi output aayega 

//     }
//     console.log(x);
// }
// stuff();

// function stuff(){
//     if(true){
//         console.log(x);              // reference error aayega coz declare baad me kiya gaya hai
//         // let x = "local"               
//           var x = "local"              // gives undefined not error
//     }
    
// }
// stuff();


// CONST SCOPE = cant be reinitilize
// function stuff(){
//         if(true){
                                   
//             const x = "local"              
//         }
//         console.log(x);         // gives ref error
//     }
//     stuff();





// GLOBAL VARIBALE =  deined at top of the program 
// if want to hide gloval var visibility make a local var with same name toh gloabl var overwrite kr dega
// let globalvar = "accessible!";
// console.log("outise fxn" , globalvar);

// function newScope(x){
//     console.log("access to global vars inside fxn" , globalvar);
// }

// newScope("some para");
// console.log("still available", globalvar)

// let x = "global"

// function stuff(){
//     let x = "local"
//     console.log(x)
// }
// stuff();
// console.log(x);

// let x = "global"

// function stuff(x){       // this x is local chahe to argument bana lo ya let x kr ke bana lo dono hi local honge 
   
//     console.log(x)
// }
// stuff("param");


// let x = "global"

// function stuff(x){       // this x is global hai kyuki declare nhi kiya ki let hai ya var hai ya const to by def yeh global hoga
//    x = "guess my scope";
//     console.log("inside fxn", x)
// }
// stuff();
// console.log("outside", x)














































































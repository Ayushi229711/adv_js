// CLASS = blue rint for object creation
// OBJECTS = collection and properties of methods = in js its a key-value pair
// 1.constructor = one time initialize value at the time of obj creation  
// class ClassName{
//     constructor(prop1, prop2){ 
//         this.prop1 = prop1;    // [this prop1 = class object ko point krte hain that is = obj]  prop1 = local variable
//         this.prop2 = prop2;   // if local and class variable = same then use this to differentiate
//     }
// }
// // this = regfers to the object it belong to , its the first property of the instance pf ClassName
// let obj = new ClassName("arg1", "arg2");

// console.log(obj.prop1);
// console.log(obj.prop2);


// class Dog{
//     constructor(dogname, weight, color,breed){
//         this.dogname = dogname;
//         this.weight = weight;
//         this.color =color;
//         this.breed = breed;

//     }
// }
// let dog = new Dog("goofy", 26.67, "golden","retriever")

// console.log(dog.dogname , "is a "+ dog.breed + "and weight"+ dog.weight + "kg");



// class Person {
//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname= lname;
//     }
// }
// // let p = new Person("ayushi", "sachan");
// let p1 = new Person("ayushi");
// console.log("hi", p1.fname, p1.lname);
// // console.log("hi", p.fname); // less agru toh its will give undefined not error 


// class Person {
//     constructor(fname, lname = "do"){
//         this.fname = fname;
//         this.lname= lname;
//     }
// }
// let p1 = new Person("ayushi");
// console.log("hi", p1.fname, p1.lname);





// CONNSTRUCTOR = IMPLICITY\LY DEFINED 
// 2. METHOD = USER\LY DEFINED returns undefined if no paramters there


// class Person {
//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname= lname;
//     }
    
// greet(){
//     console.log("t\]hiii", this.fname); // without "this " = throws amd error 
// }
// }

//  let p = new Person("ayushi", "sachan");   // isme constructor is automatically invoked 
//  p.greet();                                 // user defined to call krna padega 
// console.log("hi", p.fname, p.lname);
// // console.log("hi", p.fname);




// class Person {
//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname= lname;
//     }
// greet(){
//     console.log("t\]hiii", this.fname); // without "this " = throws amd error 
// }
// compliment(name, object){
//     return "thats a wonderfll" + object + name;
// }
// }
// let p = new Person("ayushi", "sachan");
// let x = p.greet();
// console.log(x);
// let compliment = p.compliment("chatu",  "sachan");
// console.log(compliment)


// 3. properties

// class Person {
//     constructor(fname, lname){
//         this.fname = fname;           // has 2 prop from constuctor  = fname , lname
//         this.lname= lname;
//     }
// }
// let p = new Person("ayushi", "sachan");
// console.log("hi", p.fname);

// to make PRIVATE use hash"#" to not be direct;y accessible 
// class Person{
//     #fname;
//     #lname;

//     constructor(fname, lname){
//         this.#fname = fname;           
//         this.#lname= lname;
// }
// }

// let p = new Person("ayushi", "sachan");
// console.log("hi", p.fname);       // gives undefined as fname is private not accessible 

//  to access private then use method to access 

// class Person{
//     #fname;
//     #lname;
//     constructor(fname, lname){
//         if(fname.startsWith("M")){
//             this.#fname =  fname;
//         }
//         else{
//             this.fanem = "M" + fname;
//         }
//         this.#lname = lname;
// }
// }
// let p = new Person("ayushi", "sachan");
// console.log(p)

    

// GETTER AND SETTER  =[encapsulation ]
// getter = {no argument} particular obj ki particular value ko returnn karega 
// set ={atleast 1 argument} to reinitialize any value 


// eg:
// class Person{
//         #fname;
//         #lname;
    
//         constructor(fname, lname){
//             this.#fname = fname;           
//             this.#lname= lname;
//     }
//     get fname(){
//         return this.#fname;
//     }
//     set fname(fname){          // atleast i parameter 
//         return this.#fname = fname;
//     }
//     get lname(){
//         return this.#fname;
//     }
//     set lname(lname){          // set should have atleast i parameter 
//         return this.#lname = lname;
//     }
//  }
    
//  let p = new Person("ayushi", "sachan");    // constu
//  console.log(p.fname);           // call get method if argument is passes then set 
//  p.fname = "charu";       // agrument hai toh will call set 
//  console.log(p.fname);



// INHERITENCE = CODE REUSEABILITY == "extends"
// "super " = to invoke the parent constructor at  child constructor


// class Vehicle{ // parent class with 3 sttribbutes 
//     constructor(color, speed , maxspeed){
//         this.color = color;
//         this.speed = speed ;
//         this.maxspeed = maxspeed;
//     }

//     move(){ // method(user difined)
//         console.log("moving at" , this.speed);
//     }
//     accelerate(amount){
//         this.speed += amount;
//     }
// }               // "super" to invoke the parent class constructor

// class motorcycle extends Vehicle{
//     constructor(color , speed , maxspeed , fuel){
//         super(color , speed , maxspeed);
//         this.fuel = fuel; 
//     }
//     dowheelie(){
//             console.log("driving on the one whweel");
//     }
// }

// let motor = new motorcycle("black", 0 , 250, "gasoline");
// console.log(motor.color);

// console.log(motor.accelerate(50));
// console.log(motor.move());



// PROTOTYPES


































































































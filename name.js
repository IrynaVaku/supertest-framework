class MyNewClass {
  constructor(myname) {
    this.name = myname;
  }
greeting (s){
console.log(`Hello ${this.name.toUpperCase()}`);
} 
}
let marry = new MyNewClass('Marry')
//console.log(a);
//marry.greeting()
//console.log(marry.name);

let user1 ={
firstName:'Pol',
lastName:'Creg',
fullName: 'Pol Creg',
age:30,
meeting(){
  return `Hello my name is ${this.firstName} and I am ${this.age} years old`
}}
let b = user1.meeting()
//console.log(b);
//console.log(user1.meeting());

let user2 ={
  firstName:'Ann',
  lastName:'Frog',
  fullName: `${user2.firstName} ${user2.lastName}`,
  age:40,
  meeting(){
    return `Hello my name is ${this.firstName} and I am ${this.age} years old`
  }}
  console.log(user2.fullName);

  let user3 ={
    firstName:'Marta',
    lastName:'Brack',
    fullName: `${user3.firstName} ${user3.lastName}`,
    age:35,
    meeting(){
      return `Hello my name is ${this.firstName} and I am ${this.age} years old`
    }}
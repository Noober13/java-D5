//Exercise A
let test = "This is a test of my knowledge of javascript on week 2 in Epicode"

console.log(test);

//Exercise B the original number was 13 and I added 3 to get the result of 16 when code is ran in the terminal//
let number = 13

console.log("This is the result of adding in javascript", number + 3)

//Exercise C Generating numbers from 0 to 20//
let lowerNumber = 0
let higherNumber = 20

let randomNumber = Math.floor(Math.random() * (lowerNumber + higherNumber))
console.log(randomNumber)
//Exercise D
let firstName = "Jonell Carl";
let middleName = "Zaño";
let lastName = "Lim";
let me = firstName + ' ' + middleName + ' ' + lastName

let myAge = "27"

function myName(firstName, middleName, lastName) {
    console.log("My name is"+' ' + firstName + ' ' + middleName + ' ' + lastName)
}
myName(firstName, middleName, lastName);
//Exercise E
function meAge(myAge){
    console.log("I am" +' '+ myAge+' '+ "years old")
}
meAge(myAge)
//Exercise F
const skills = ["Cooking", "Singing", "Sarcasm", "Gaming"]

const removeSkills = (arr, item) =>{
    let newArray = [...arr]
    const index = newArray.findIndex((element) => element === item)
    if (index !== -1){
        newArray.splice(index, 1)
        return newArray
    }
}

console.log(removeSkills(skills, "Sarcasm"))
console.log(skills)
//Exercise 1
let lowerDice = 1
let higherDice = 6

let randomDice = Math.floor(Math.random() * (lowerDice + higherDice))
console.log(randomDice)
//Exercise 2
let x = 69
let y = 13
function whoIsBigger(x, y) {
    if (x > y) {
       return z = x
    }
}
console.log(whoIsBigger(x ,y))
//Exercise 3
let myStatement = "I learn coding in Epicode"
function splitMe(string){
    const stateWord = string.split [" "]
    return string
}
console.log(splitMe(myStatement))

//Exercise 4
let booleanDel = "Whatever"
let boolean= "Daki"
function deleteOne(string, boolean) {
    // if (boolean === true) *I left this here so you can check the true and false values*
    if (boolean === "Daki")
    {return string.slice(1)}
    else
    {return string.slice(0,-1)}
}
console.log(deleteOne(booleanDel, boolean))

//Exercise 5
let justLetters = "UG has 4 boomers"
function onlyLetters(string){
    return string.replace(/ \d+/g, '') //(/[0-9]/g, '') I used this code as well but used a regex /\d+/g
}
console.log(onlyLetters(justLetters))

//Exercise 6
const validEmail = "noober@gmail.com"
const notValidEmail = "noober@gmail,com"
function isThisEmail (string){
    if (string.match(/\w+@\w+.com/g))//I checked in regex101 and the code is showing that notValidEmail is false yet javascript is showing true in the console
    {return true}
}
console.log(isThisEmail(validEmail))
console.log(isThisEmail(notValidEmail))

//Exercise 7
function whatDayIsIt (){
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = d.getDay(); 
// let day = weekday[d.getDay()]; If you run this code instead it would give you the weekday instead
return day
}
console.log(whatDayIsIt())


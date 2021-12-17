var a = 22;//number
var b = 11;
var string = `sanjay kumar j`;//string
var result;
result = a + b;//arithmetic operation
console.log(result);
console.log(string);

var display = document.querySelector(`.string`);
display.textContent = string;

var display = document.querySelector(`.result`);
display.textContent = result;

//if conditions
var string1 = `sanjay j`;

if (string1 == `sanjay kumar j`) {
    console.log(`my name is ${string1}`);

} else if (string1 == `sanjay j`) {
    console.log(`my name is ${string1} condition two`);
}
else {
    console.log(`my name is doesn't match ${string1}`);
}

//switch case
var sign = `/`;
switch (sign) {
    case `+`:
        console.log(`number ${a} and number ${b} is ${a + b}`)//add
        break

    case `-`:
        console.log(`number ${a} and number ${b} is ${a - b}`)//sub
        break

    case `*`:
        console.log(`number ${a} and number ${b} is ${a * b}`)//multi
        break

    case `/`:
        console.log(`number ${a} and number ${b} is ${a / b}`)//division
        break
}

//loop
var name2 = [`s`, `a`, `n`, `j`, `a`, `y`, `looping`];
var show = ``;

for (var i = 0; i < name2.length; i++) {
    show = show + name2[i];
}
document.querySelector(`.loop`).innerHTML = show

//functions
//name function
function sanjay() {
    var display = `sanjay`
    console.log(`i am ${display}`)
}
sanjay();//calling name function

//function with parameter
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));

//anonynous function
var sub = function (a, b) {
    return a - b;
}
console.log(sub(6, 9));

//imediately invoke function
var divi = (function (a, b) {
    return a / b;
})(18, 9);
console.log(divi);

//call back
function san1() {
    san2();
    console.log(`welcome`);
    san3();
}
function san2() {
    console.log(`hello`);
}
function san3() {
    console.log(`to my page`);
}
san1();

//date functions
var checkDate = new Date;   
var myDate = checkDate.getDate();//date 
var myMonth = checkDate.getMonth();//month
var myYear = checkDate.getFullYear();//year

var fullDate = myDate + `/` + eval(myMonth + 1) + `/` + myYear;

 document.querySelector(`.date`).innerHTML= fullDate;




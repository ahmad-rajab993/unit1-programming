// let num1=5;
// let num2=6;
// let operator=">";
// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 === 0) {
//       console.log("Can't divide by zero");
//     } else {
//       result = num1 / num2;
//     }
//     break;

//     default:
//         console.log( "invalid operator");
// }

// if(result !== undefined)
// console.log(`result is ${result}`);

// let attendanceAverage;
// let puanAverage;
// let shcolarship;

//  if(puanAverage>=95 && attendanceAverage>= 95){
//     shcolarship = "100%";
//     console.log(`Accepted your sholarship average is ${shcolarship}`);
// }else if(puanAverage >=85 && attendanceAverage>=90){
//     shcolarship = "50%";
//     console.log(`Accepted your sholarship average is ${shcolarship}`);
// }else if( puanAverage >= 75 && attendanceAverage >= 85){
// shcolarship = "25%";
//     console.log(`Accepted your sholarship average is ${shcolarship}`);
// }else if(puanAverage< 75 ){
//     console.log( "rejected: Your average under 75");
// }else {
//     console.log("rejected: your attendance average is under 85");
// }

// let balance=705;
// let withdrawAmount = 600;

// if(withdrawAmount> balance){
//     console.log("Not enough balance");
// }else if(withdrawAmount< 10){
//     console.log("You can't take less than 10");
// }else if (withdrawAmount> 1000){
//     console.log("You can't take more than 1000");
// }else if(withdrawAmount> 500 && balance-withdrawAmount<100 ){

//         console.log("you can't take more than 500 and leave less than 100");
// }else if(withdrawAmount%10 !== 0){
//     console.log("invalid ammount");
// }else{
//     balance -= withdrawAmount;
//     console.log("you took " + withdrawAmount);
//     console.log(` your new balance is ${balance}`);
// }

let workDay= "Tuesday";
let ticketType="Standard";
let age = 9;

let price;
let ageDiscount;
let tusedayDiscount;

switch (ticketType) {
  case "Standard":
    price = 10;
    break;
  case "3D":
    price = 15;
    break;
  case "IMAX":
    price = 20;
    break;
  default:
    console.log("invalid ticket type");
}

if(workDay ==="Tuesday" && ticketType !== "IMAX"){
    tusedayDiscount = price*0.2;
}else{
    tusedayDiscount=0;
}

if(age<= 12 ){
    ageDiscount=price*0.5;
}else if(age>= 60){
    ageDiscount=price*0.3;
}else{
    ageDiscount=0;
}

price -= tusedayDiscount;
price -= ageDiscount;

price = price<5 ? 5 : price;

console.log(`ticket price is ${price}`)
if(ageDiscount) console.log(`age discount is ${ageDiscount}`)
if (tusedayDiscount) console.log(`Tuseday discount is ${tusedayDiscount}`);




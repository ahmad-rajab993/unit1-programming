// let scholerShip;
// let attendanceAverage;
// let resultAverage;

// if(resultAverage< 0.7){
//     console.log("Your result is under 70%");
// }else if(attendanceAverage< 0.85){
//      console.log("Your attendance average is under 85%");
// }else if(attendanceAverage>= 0.95 && resultAverage >= 0.95 ){
//     scholerShip = "100%";
//     console.log(`you have a sholarship of ${scholerShip} `);
// }else if (attendanceAverage>= 0.9 && resultAverage >= 0.85){
//       scholerShip = "50%";
//     console.log(`you have a sholarship of ${scholerShip} `);
// }else if(attendanceAverage>= 0.85 && resultAverage >= 0.75){
//      scholerShip = "25%";
//     console.log(`you have a sholarship of ${scholerShip} `);
// }else{
//       console.log(`you don't have a scholarship due result average under 75% `);
// }

// let amount = 50;

// if(amount%10 === 0){
//     console.log("amount can be divided by 10");
// }else{
//     console.log("amount can not be divided by 10");

// }

// let blanace= 700;
// let withdrawAmount=510;

// if(withdrawAmount>blanace){
//     console.log(`your balance isn't enough your current balance is ${blanace}`);
// }else if(withdrawAmount> 1000){
//     console.log("You can't take more than 1000$ in single process");
// }else if (withdrawAmount<10){
//     console.log("Withdraw amount should be more than 10$");
// }else if(withdrawAmount%10 !== 0){
//     console.log("withdraw amount should be divided by 10");
// }else if (withdrawAmount>500 && blanace - withdrawAmount < 100){
//         console.log(" the reaminig balance should be 100$ or more due to withdraw amount is more than 500$")
// }else{
//     blanace -= withdrawAmount; // balance = balance - withdrawAmount
//     console.log(`Withdraw amount is ${withdrawAmount}`)
//     console.log(`Your current balance is ${balance}`)
// }

let age=65;
let ticketType="Standard";
let workDay= "Tuseday";

let price;
let ageDiscount;
let tuesdayDiscount;
let ageDiscountedAmount;
let tusedayDiscountedAmount;

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
    console.log("Wrong ticket type");
}

if(age<=12){
    ageDiscount=0.5;
}else if(age>=60){
    ageDiscount=0.3;
}else{
    ageDiscount=0;
}
ageDiscountedAmount = price * ageDiscount;

if(workDay==="Tuseday" && ticketType !== "IMAX"){
tuesdayDiscount= 0.2;
}else{
    tuesdayDiscount =0;
}

tusedayDiscountedAmount = price * tuesdayDiscount

price -= ageDiscountedAmount;
price -= tusedayDiscountedAmount;


if(price<5){
    price =5
}

console.log(`the final price is ${price}`);
if(ageDiscount) console.log(` age discount is ${ageDiscount}`);
if(tuesdayDiscount) console.log(`tuseday discount is ${tuesdayDiscount}`);
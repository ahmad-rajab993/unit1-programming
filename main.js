// // inputs
// let roomType = "double suite";
// let peopleCount = 1;
// let isGoldMember = false;
// let requestedNights=20;
// let currentMonth="September";

// // calculated values
// let roomCapacity;
// let message;
// let guestsCount;

// // outputs
// let reservationValue;
// let durationDiscount=0;
// let membershipDiscount=0;
// let decemberAddition=0;
// let guestsAddition=0;

// if (requestedNights > 30 || requestedNights < 2) {
//   message = "you can't reserve for more than 30 nights or less than 2 nights";
// }

// switch (roomType) {
//   case "Single":
//     roomCapacity = 1;
//     pricePerNight = 50;
//     break;
//   case "Double":
//     roomCapacity = 2;
//     pricePerNight = 80;
//     break;
//   case "Suite":
//     roomCapacity = 4;
//     pricePerNight = 150;
//     break;
//   default:
//     if(!message)
//     message = "Invalid room type";
//     break;
// }

// if (!message & peopleCount - roomCapacity > 0) {
//   guestsCount = peopleCount - roomCapacity;
// } else {
//   guestsCount = 0;
// }

// if (!message && guestsCount > 2) {
//   message = "rejecte due to guests count exceed 2 gusets";
// }

// guestsAddition = guestsCount * 20 * requestedNights;

// if (!message && currentMonth === "December") {
//   decemberAddition = pricePerNight * 0.2 * requestedNights;
// }

// if (!message && requestedNights >= 7) {
//   durationDiscount = pricePerNight * requestedNights * 0.1;
// } 

// if (!message && isGoldMember) {
//   membershipDiscount = requestedNights * pricePerNight * 0.05;
// }

// if(!message){
//     reservationValue=requestedNights*pricePerNight + decemberAddition + guestsAddition - durationDiscount - membershipDiscount
// console.log(`reservation value is ${reservationValue}`);
// if (decemberAddition) console.log(`December addition is ${decemberAddition}`);
// if(guestsAddition) console.log(`Guests addition is ${guestsAddition}`);
// if(durationDiscount)console.log(`Duration discount is ${durationDiscount}`);
// if(membershipDiscount) console.log(`Membership Discount is ${membershipDiscount}`);
// }else{
//     console.log(message);
// }


// let num1=5;
// let num2=8;
// let numbersDividedBy3=0;
// let maxNumberDividedBy9;
// for(let i=num1; i<=num2;i++){
//     if(i%2 === 0)
//     console.log(i);

//     if(i%3 === 0){
//         numbersDividedBy3++
//     }
//     if(i%9===0){
//         maxNumberDividedBy9=i;
//     }
// }



// console.log(`count of numbers divided by 3 is ${numbersDividedBy3}`);
// if(maxNumberDividedBy9)console.log(`the max number divided by 9 is ${maxNumberDividedBy9}`)

// for(let i=num2; i>=num1;i--){
//     if(i%9===0){
//         console.log(`the max number divided by 9 is ${i}`)
//         break;
//     }
// }


// let balance=100;
// let days =0;

// while(balance<500)
//     {
//     balance+=20;
//     days++;
// }

// console.log(days);
// console.log(balance);


let sumofNumbers=0;
let i=0;

while(sumofNumbers<4000){
    i++;
    sumofNumbers+=i;
    
}

console.log(i);
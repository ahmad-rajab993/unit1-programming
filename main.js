// //inputs
// let peopleCount = 4;
// let roomType = "double suite";
// let requestedNights = 8;
// let isGold = true;
// let currentMonth = "December";

// // calculated values
// let basePrice;
// let roomCapacity;
// let extraGuests;

// //outputs
// let reservationValue;
// let memebershipDiscount=0;
// let durationDiscount=0;
// let guestsAddition=0;
// let decemberAddition=0;
// let message;



// switch (roomType) {
//   case "Single":
//     basePrice = 50;
//     roomCapacity = 1;
//     break;
//   case "Double":
//     basePrice = 80;
//     roomCapacity = 2;
//     break;
//   case "Suite":
//     basePrice = 150;
//     roomCapacity = 4;
//     break;
//   default:
//     message = "Invalid room type";
//     roomCapacity=0;
//     break;
// }

// if (!message && (requestedNights < 2 || requestedNights > 30)) {
//   message = " You can't reserve less than two nights or more than 30 days";
// }
// if(!message && peopleCount>roomCapacity +2){ 
//   message = "no available room with that number of guests";
    
// }

// if (currentMonth === "December"){
//   decemberAddition=basePrice* 0.2 *requestedNights;}



// extraGuests = peopleCount - roomCapacity;

// if (!message && extraGuests>0 && extraGuests<=2) {
//     guestsAddition =20 *extraGuests*requestedNights
// } else if (!message && extraGuests > 2) {
//   message = "exceed room capacity with more than 2 people";
// }

// if (isGold) {
//   memebershipDiscount = basePrice * 0.05*requestedNights;
// }
// if(requestedNights>=7){

//     durationDiscount =basePrice*0.1*requestedNights;
// }

// if(message) {
    //     console.log(message);
    //     }else{
        // reservationValue = basePrice*requestedNights + guestsAddition -memebershipDiscount-durationDiscount + decemberAddition

//         console.log(`reservation value is ${reservationValue}`);
//         if(memebershipDiscount) console.log(`MembershipDiscount ${memebershipDiscount}`);
//         if (durationDiscount) console.log(`duration discount  is ${durationDiscount}`);
//         if (decemberAddition) console.log(`december addition   is ${decemberAddition}`);
//         if(guestsAddition)console.log(`guests addition   is ${guestsAddition}`);
//     }

// let days=0;

// for(let i=100; i<500;i+=20){
//     days +=1
// }

// console.log(days);



let days=0;
let value=100;
while(value<500)
    {
    days+=1
    value+=20;
}

console.log(days);
console.log(value);
// let mark;

// mark = 60;

// if(mark > 85){
//     console.log("Excellent");
// }else if(mark>= 70){
//     console.log("good");
// }else if ( mark>= 60){
//     console.log("pass");
// }else{
//     console.log("Failed");
// }

// let isLoggedIn;
// let accountType;
// let page;

// isLoggedIn = true;
// accountType ="Normal user"

// if (isLoggedIn) {
//   if (accountType === "Admin") {
//     page = "admin Page";
//   } else {
//     page = "Normal Page";
//   }
// } else {
//   page = "Forbidden Page";
// }

// console.log(page)

let isInsideCity=false;
let area="D";

let cost;

if (isInsideCity) {
  if (area === "A") {
    cost = 20;
  } else {
    cost = 30;
  }
} else {
  if (area === "C") {
    cost = 50;
  } else {
    cost = 70;
  }
}

console.log(cost);

// let num1=5;
// let num2=20;

// let countOf3Divided=0;
// let maxNumberDividedBy9;

// for(let i = num1;i<=num2;i++){

//     if(i%2 ===0){
//         console.log(i);
//     }

//     if(i%3 === 0){
//         countOf3Divided++;
//     }

//     if(i%9 === 0){
//         maxNumberDividedBy9 = i;
//     }
// }

// console.log(`the count of numbers that accept divide by 3 is ${countOf3Divided}`);
// console.log(`the max number divided by 9 is ${maxNumberDividedBy9}`);


// for(let i =1;i<=50; i++){
//     console.log(i);
//     if(i%11 === 0){
//         break;
//     }
// }

// for(let i =1;i<=50; i++){
 
//     if(i%11 === 0){
//         break;
//     }
//        console.log(i);
// }


// let operator="+";
// let num1=3;
// let num2=6;

// switch(operator){
// case "+":
// console.log(num1+num2);
// break;

// case "*":
// console.log(num1*num2);

// }

// for(let i=50; i<=100;i++){
//     if(i%4==0 && i%7 === 0){
//         console.log(i);
//         break;
//     }
    
// }

// for(let i= 100; i>=20; i--){
//      if(i%4==0 && i%7 === 0){
//     console.log(i);
//     break;
//      }
// }

// let maxNumberDividedBy4And7;
 
// for (let i = 20; i <= 100; i++) {
//     if (i % 4 === 0 && i % 7 === 0) {
//         maxNumberDividedBy4And7=i;
//     };
// }
// console.log(maxNumberDividedBy4And7);

// let firstNumberDividedByTwoNumbers;
 
// for (let i = 34000; i <= 35000; i++) {
//     if (i % 127 === 0 && i % 137 === 0) {
//         firstNumberDividedByTwoNumbers=i;
//         break;
//     };
// }
// console.log(firstNumberDividedByTwoNumbers);

// let minRange;
// let maxRange;
// let num1;
// let num2;
 
// if(maxRange>minRange){
//     for(i=minRange; i<=maxRange; i++){
//         if(i%num1===0 && i%num2===0){
//             console.log(i)
//             break;
//         }
//     }
// }else{
//     for(i=maxRange; i<=minRange; i++)
//         if(i%num1===0 && i%num2===0){
//             console.log(i)
//             break;
//         }
// }


// let num1=6;
// let num2=8;
 
// let minRange=40;
// let maxRange=45;

 
// for (let i = minRange; i <= maxRange; i++) {
//     if (i % num1 === 0 && i % num2 === 0) {
//         console.log(i);
//         break;
//     }
// }
 

// let num1=6;
// let num2=8;
 
// let minRange=40;
// let maxRange=50;

// let firstNumberDividedByTwoNumbers;
 
// for (let i = minRange; i <= maxRange; i++) {
//     if (i % num1 === 0 && i % num2 === 0) {
//         firstNumberDividedByTwoNumbers =i;
//         break;
//     }
// }
 
// if(firstNumberDividedByTwoNumbers){

//     console.log(firstNumberDividedByTwoNumbers)
// }else{
//     console.log ("no number found");
// }


// for (let i = 1; i <= 20; i++) {
//     if(i===5) continue;

//         console.log(i);
    

//     // code print table of number
// }


// for (let i = 1; i <= 20; i++) {
//     if(i%3 ===0)continue;
//     console.log(i);
// }


// for (let i = 1; i <= 20; i++) {
   
//     if(i%2 ===0)continue;
//     if(i%3 ===0)continue;
//     console.log(i);
// }
 
// for(let i =1; i<=20; i++){
//     if(i%2===1 && i%3!==0){
//         console.log(i);
//     }
// }

for(let i=1;i<=20;i++){
    if(i%2===0 || i%3===0){
        console.log(i);
    }
}
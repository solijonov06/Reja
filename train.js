/*MIT task-E*/ 
/*E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"*/

function getReverse(str) {
  return str.split('').reverse().join('');
}

console.log(getReverse("assalomu alaykum"));
console.log(getReverse("hit"));

// function content (string1,string2){
//     for(i of string1){
//       for(b of string2){
//    if(i == b){
//    console.log(true);
// } else{
//  console.log(false);
// }
// }
// }
// }
// console.log(content("hello","elloh"));


/*                                     task D                                                      */ 
/*   agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
// */
// 
// function checkContent(str1, str2) {
  
//   if (str1.length !== str2.length) {
//     console.log("Matnlar bir xil harflardan iborat emas");
//     return false;
//   }

  
//   const sorted1 = str1.split('').sort().join('');
//   const sorted2 = str2.split('').sort().join('');

//   if (sorted1 === sorted2) {
//     console.log("Matnlar bir xil harflardan iborat");
//     return true;
//   } else {
//     console.log(true);
//     console.log("Matnlar bir xil harflardan iborat emas");
//     return false;
//   }
// }
//  console.log("Natija:", checkContent("rewq3", "k3wer"));








/*                      task C                                */
/*Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
  Har bir method ishga tushgan vaqt ham log qilinsin.
  
  return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) &
   shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
  */

// const moment = require('moment');

// class Shop {
//   constructor(bread, lagman, cola) {
//     this.bread = bread;
//     this.lagman = lagman;
//     this.cola = cola;
//   }

//   getTime() {
//     return moment().format('HH:mm:ss');
//   }

//   receive(itemName, amount) {
//     this[itemName] += amount;  //kiritilgan  parametr nomi bilan saqlangan qiymatni qaytaradi this.itemName dan farqli ravishda
//     console.log(`Received: ${amount} ${itemName} (${this.getTime()})`);
//   }

//   sell(itemName, amount) {
//     if (this[itemName] >= amount) {
//       this[itemName] -= amount;
//       console.log(`Sold: ${amount} ${itemName} (${this.getTime()})`);
//     } else {
//       console.log(`Error: Not enough ${itemName} (${this.getTime()})`);
//     }
//   }

//   stock() {
//     console.log(
//       `At ${this.getTime()}, there are ${this.bread} bread, ${this.lagman} lagman, and ${this.cola} cola in stock.`
//     );
//   }
// }


// const shop = new Shop(45, 15, 22);


// shop.stock();                  
// shop.sell("bread", 4);         
// shop.receive("cola",30);      
// shop.stock();                  











// /*


//   //solution
//   const moment = require('moment');
// const time = moment().format('HH:mm:ss');

//   class Shop {
//     //state
//     time;
//     name;
//     number;


//     constructor(name, number) {
//       this.name = name;
//       this.number = number;
//       this.time = time;
      
//     }

//     //methods
//     receive(initialNumber) {
    
//       console.log(`Received ${initialNumber} ${this.name} at ${this.time}`);
//       // logic for receiving
//       initialNumber = this.number + initialNumber;
//     }



//     sell(name,sold) {
//       return console.log(`Selling ${this.sold} ${this.name} at ${time}`);
//       // logic for selling
      



//     }

//     reminder(){
//       leftover = initialNumber - sold;
//       return console.log(`Remaining ${leftover} ${this.name} at ${this.time}`);
//           }


//   }

// //     receive(name, number) 
// const shop = new Shop("apple", 10);
// shop.sell("apple", 5);
// shop.receive("apple", 3);
// shop.reminder();



// const moment = require('moment');

// class Shop {
//   constructor(non, lagmon, cola, lag) {
//     this.name = name;
//     this.initialNumber = number;
//     this.sold = 0;
//     this.time = moment().format('HH:mm:ss');
//   }

//   receive(amount) {
//     this.initialNumber += amount;
//     console.log(`Received ${amount} ${this.name} at ${this.time}`);
//   }

//   sell(amount) {
//     this.sold += amount;
//     console.log(`Selling ${amount} ${this.name} at ${this.time}`);
//   }

//   reminder() {
//     const leftover = this.initialNumber - this.sold;
//     console.log(`Remaining ${leftover} ${this.name} at ${this.time}`);
//   }
// }

// const shop = new Shop("apple", 10);
// shop.sell(5);
// shop.receive(3);
// shop.reminder();





// /*                           Task B*/ 
// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9') {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("gf2567")); 






//  ⭐️ Asynchronous: CALLBACK, ASYNC && PROMISE

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bololmaydi", null, null);
//   } else {
//     callback(null, a % b ,false);
//   }
// }

// CALL
// qoldiqliBolish(10, 10, (err, data1, data2) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Data:", data1, data2);
//   }
// });



// //Task A
// //  a function that counts how many times a letter appears in a word
// function countLetter(word, letter) { //word bu ixtiyoriy so'z, letter esa so'z tarkibidagi ixtiyoriy necha marta qaytarilishi kerak bo'lgan harf
//   let count = 0;
//   for (let i = 0; i < word.length; i++) { //tekshiruv hafr uzunligidan kichkina bo'lsin
//     if (word[i] === letter) { //agar turi ham qiymati ham mos kelsagina count 1ga o's
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("banana", "a"));// malumot string bo'lishi kerak!!


// console.log("Advice of Jack Ma");

// list = [
    
//     "Be agood student.",//0-20
//     "Choose the right boss and do as many many mistakes as you possibly can.",// 21-30
//     "Start your own business.",// 31-40
//     "Do what you are god at.",// 41-50
//     "Invest youth.",// 51-60
//     "Take a rest, there is no way." //60<  // This will be returned after 4 seconds
// ];

//Callback function

// function giveAdvice(a,callback){
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a<=20) callback(null, list[0]);
//     else if (a>=20 && a<=30) callback(null, list[1]);
//     else if (a>=30 && a<=40) callback(null, list[2]);
//     else if (a>=40 && a<=50) callback(null, list[3]);
//     else if (a>=50 && a<=60) callback(null, list[4]);
//     else{
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log("passed here 0");
// giveAdvice(65, (err,data)=>{
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Answer:", data);
//     }
// });
// console.log("passed here 1");

//Promise function/async function
//  async function giveAdvice(a){
//     if (typeof a !== "number") throw new Error ("insert a number", null);
//     else if (a<=20) return list[0];
//     else if (a>=20 && a<=30) return list[1];
//     else if (a>=30 && a<=40) return list[2];
//     else if (a>=40 && a<=50) return list[3];
//     else if (a>=50 && a<=60) return list[4];
//     else{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=> {
//                 resolve(list[5]);
//             },4000);
//         });
//     }
// }

//then/catch
// console.log("passed here 0");
// giveAdvice(65)
// .then((data)=>{
//     console.log("Answer:", data);
// })
// .catch((err)=>{
//     console.log("Error:",err);
// });
// console.log("passed here 1");

//async/await
// async function run(){

//     let javob = await giveAdvice(56);
//     console.log("Answer:", javob);
//      javob = await giveAdvice(71);
//     console.log("Answer:", javob);
//      javob = await giveAdvice(23);
//     console.log("Answer:", javob);
// }

// run();
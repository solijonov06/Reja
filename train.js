console.log("Advice of Jack Ma");

list = [
    
    "Be agood student.",//0-20
    "Choose the right boss and do as many many mistakes as you possibly can.",// 21-30
    "Start your own business.",// 31-40
    "Do what you are god at.",// 41-50
    "Invest youth.",// 51-60
    "Take a rest, there is no way." //60<  // This will be returned after 4 seconds
];

//Callback function

function giveAdvice(a,callback){
    if (typeof a !== "number") callback("insert a number", null);
    else if (a<=20) callback(null, list[0]);
    else if (a>=20 && a<=30) callback(null, list[1]);
    else if (a>=30 && a<=40) callback(null, list[2]);
    else if (a>=40 && a<=50) callback(null, list[3]);
    else if (a>=50 && a<=60) callback(null, list[4]);
    else{
        setInterval(function() {
            callback(null, list[5]);
        }, 1000);
    }
}

console.log("passed here 0");
giveAdvice(65, (err,data)=>{
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Answer:", data);
    }
});
console.log("passed here 1");

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
console.log("--------------------");
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
console.log("--------------------");
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
console.log("Advice of Jack Ma");

list = [
    
    "Be agood student.",//0-20
    "Choose the right boss and do as many many mistakes as you possibly can.",// 21-30
    "Start your own business.",// 31-40
    "Do what you are god at.",// 41-50
    "Invest youth.",// 51-60
    "Take a rest, there is no way." //60<  // This will be returned after 4 seconds
];

function giveAdvice(a,callback){
    if (typeof a !== "number") callback("insert a number", null);
    else if (a<=20) callback(null, list[0]);
    else if (a>=20 && a<=30) callback(null, list[1]);
    else if (a>=30 && a<=40) callback(null, list[2]);
    else if (a>=40 && a<=50) callback(null, list[3]);
    else if (a>=50 && a<=60) callback(null, list[4]);
    else{
        setTimeout(function() {
            callback(null, list[5]);
        }, 5000);
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
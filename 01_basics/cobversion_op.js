let score = null;
console.log("Score before conversion:", score, typeof score);
console.log(typeof score);
console.log(typeof (score), "Same as above");
let scoreNum = Number(score);
console.log("Score after conversion:", scoreNum, typeof scoreNum);
console.log(typeof (scoreNum));
console.log(scoreNum);// 33 why not NaN?
//alert(scoreNum); // 0

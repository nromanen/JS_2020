function mul(a, b) {
   return a * b;
}
var doubleMul = mul.bind(null,2);
var qudraMul = mul.bind(null,4)
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

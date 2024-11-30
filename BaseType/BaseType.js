var decLiteral = 6;
var hexLiteral = 0xf00d; // 十六进制
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(typeof null);
console.log(typeof undefined);
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}

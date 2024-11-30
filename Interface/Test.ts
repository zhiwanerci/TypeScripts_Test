// TypeScript支持两种索引签名：字符串和数字。
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

// 由下面的Woman可知，数字的索引签名类型需是字符串的索引签名类型的子集

interface Woman {
    [a: string]: string | number;
    [a: number]: number;
}
// interface Woman1 {
//     [a: string]: string;
//     [a: number]: string | number;
// }
// interface Woman2 {
//     [a: string]: string;
//     [a: number]: number;
// }

let woman: Woman = {
    100 : 100,
    "99" : 100,
    aaaa:"aaa",
    aaa:1,
    "dss":"sad",
    "asdasd":1,
}
/*
 * @author: qileisong
 * @LastEditors: qileisong
 * @Copyright: 2024 Tencent Inc. All rights reserved.
 * @Date: 2024-11-27 16:55:26
 * @FilePath: \TS\Generics\GenericsTest.ts
 * @Desc: File Desc
 */

namespace GenericsTest {
    interface GenericIdentityFn<T> {
        (arg: T): T;
    }
    function identity<T>(arg: T): T {
        return arg;
    }
    
    // 我们可能想把泛型参数当作整个接口的一个参数。
    // 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。
    // 这样接口里的其它成员也能知道这个参数的类型了
    let myIdentity: GenericIdentityFn<number> = identity; // 明确指定使用泛型的类型
    
    
    
    
    
    
    
    
    
    
    
    
    // 泛型约束
    // 我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束
    interface Lengthwise {
        length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }
    let l1 = loggingIdentity<number>; // Type 'number' does not satisfy the constraint 'Lengthwise'.
    let l2 = loggingIdentity<string>;
    
    // 在泛型约束中使用类型参数
    function getProperty<T>(obj: T, key: keyof T) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a"); // okay
    getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}
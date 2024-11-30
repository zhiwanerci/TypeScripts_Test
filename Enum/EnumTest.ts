/*
 * @author: qileisong
 * @LastEditors: qileisong
 * @Copyright: 2024 Tencent Inc. All rights reserved.
 * @Date: 2024-11-27 17:34:51
 * @FilePath: \TS\Enum\EnumTest.ts
 * @Desc: File Desc
 */
namespace EnumTest {
    function getSomeValue() {
        return 10;
    }
     
    enum E {
        A = getSomeValue(),
        B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
    }




    // 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
    // 首先，枚举成员成为了类型
    enum ShapeKind {
        Circle,
        Square,
    }
    
    interface Circle {
        kind: ShapeKind.Circle;
        radius: number;
    }
    
    interface Square {
        kind: ShapeKind.Square;
        sideLength: number;
    }
    
    let c: Circle = {
        kind: ShapeKind.Square,
        radius: 100,
    }

    // 另一个变化是枚举类型本身变成了每个枚举成员的 联合
    enum E {
        Foo,
        Bar,
    }
    
    function f(x: E) {
        if (x !== E.Foo || x !== E.Bar) {
            //             ~~~~~~~~~~~
            // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
        }
    }




    // 运行时的枚举  枚举是在运行时真正存在的对象。
}
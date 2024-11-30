/*
 * @author: qileisong
 * @LastEditors: qileisong
 * @Copyright: 2024 Tencent Inc. All rights reserved.
 * @Date: 2024-11-27 17:34:51
 * @FilePath: \TS\Enum\EnumTest.ts
 * @Desc: File Desc
 */
var EnumTest;
(function (EnumTest) {
    function getSomeValue() {
        return 10;
    }
    var E;
    (function (E) {
        E[E["A"] = getSomeValue()] = "A";
        E[E["B"] = void 0] = "B";
    })(E || (E = {}));
    // 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
    // 首先，枚举成员成为了类型
    var ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    var c = {
        kind: ShapeKind.Square,
        radius: 100,
    };
    // 另一个变化是枚举类型本身变成了每个枚举成员的 联合
    (function (E) {
        E[E["Foo"] = 0] = "Foo";
        E[E["Bar"] = 1] = "Bar";
    })(E || (E = {}));
    function f(x) {
        if (x !== E.Foo || x !== E.Bar) {
            //             ~~~~~~~~~~~
            // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
        }
    }
    var Bird = /** @class */ (function () {
        function Bird() {
        }
        Bird.prototype.fly = function () {
            throw new Error("Method not implemented.");
        };
        Bird.prototype.layEggs = function () {
            throw new Error("Method not implemented.");
        };
        return Bird;
    }());
    var Fish = /** @class */ (function () {
        function Fish() {
        }
        Fish.prototype.swim = function () {
            throw new Error("Method not implemented.");
        };
        Fish.prototype.layEggs = function () {
            throw new Error("Method not implemented.");
        };
        return Fish;
    }());
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    // function isFish(pet: Fish | Bird): boolean {
    //     return (<Fish>pet).swim !== undefined;
    // }
    var getSome = function (type) {
        if (type == 'Bird') {
            return new Bird();
        }
        return new Fish();
    };
    var pet = getSome('Fish');
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    // 运行时的枚举  枚举是在运行时真正存在的对象。
})(EnumTest || (EnumTest = {}));

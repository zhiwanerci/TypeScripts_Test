
namespace AdvancedTypeTest {
    // 类型保护与区分类型

    // 用户自定义的类型保护    parameterName is Type这种形式
    interface IBird {
        fly();
        layEggs();
    }
    
    interface IFish {
        swim();
        layEggs();
    }

    class Bird implements IBird {
        fly() {
            throw new Error("Method not implemented.");
        }
        layEggs() {
            throw new Error("Method not implemented.");
        }
        
    }

    class Fish implements IFish {
        swim() {
            throw new Error("Method not implemented.");
        }
        layEggs() {
            throw new Error("Method not implemented.");
        }

    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }
    // function isFish(pet: Fish | Bird): boolean {
    //     return (<Fish>pet).swim !== undefined;
    // }

    let getSome = (type: string): Fish | Bird =>{
        if (type == 'Bird') {
            return new Bird();
        }
        return new Fish();
    }
    let pet: Fish | Bird = getSome('Fish');

    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }


    // typeof类型保护
    // 然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。
    // 幸运的是，现在我们不必将 typeof x === "number"抽象成一个函数，因为TypeScript可以将它识别为一个类型保护。
    // 也就是说我们可以直接在代码里检查类型了。
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }


    // instanceof类型保护 是通过构造函数来细化类型的一种方式。
    interface Padder {
        getPaddingString(): string
    }
    
    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }
    
    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }
    
    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }
    
    // 类型为SpaceRepeatingPadder | StringPadder
    let padder: Padder = getRandomPadder();
    
    if (padder instanceof SpaceRepeatingPadder) {
        padder; // 类型细化为'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // 类型细化为'StringPadder'
    }


    type Alias = { num: number }
    interface Interface {
        num: number;
    }
    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;
}
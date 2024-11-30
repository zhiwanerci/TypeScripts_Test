namespace FunctionTest {
    let a: () => number = (): number => {
        return 0;
    };

    class Anima {
        numLegs: number;
    }
    
    function createInstance<A extends Anima>(c: new () => A): A {
        return c(); // 构造函数不能直接调用，必须使用 new 关键字
    }
}
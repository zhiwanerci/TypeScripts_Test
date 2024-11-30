namespace ClassTest {
    // TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
    // 然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员，
    // 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

    // 下面来看一个例子，更好地说明了这一点：

    // private
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }
    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    animal = rhino;
    animal = employee; // 错误: Animal 与 Employee 不兼容. 存在私有属性时，结构化类型判断就不行了

    class Animal1 {
        name: string;
        constructor(theName: string) { this.name = theName; }
    }
    class Employee1 {
        name: string;
        constructor(theName: string) { this.name = theName; }
    }
    let animal1 = new Animal1("Goat");
    let employee1 = new Employee1("Bob");

    animal1 = employee1; // 可以看到共有的name是可以互相赋值的。







    // protected
    // protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。





    // readonly修饰符
    // 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor (theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的





    // 参数属性: 通过给构造函数参数前面添加一个访问限定符来声明。
    class Octopus1 {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
    class Octopus2 {
        readonly numberOfLegs: number = 8;
        constructor(private name: string) {
        }
    }
    class Octopus3 {
        readonly numberOfLegs: number = 8;
        constructor(public name: string) {
        }
    }
    class Octopus4 {
        readonly numberOfLegs: number = 8;
        constructor(protected name: string) {
        }
    }









    // 存取器 get/set











    // 抽象类: 做为其它派生类的基类使用。 它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节。












    // 高级技巧 - 构造函数
    class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }

    let greeter1: Greeter;
    greeter1 = new Greeter();
    console.log(greeter1.greet());

    // 我们直接使用类。 我们创建了一个叫做 greeterMaker的变量。
    // 这个变量保存了这个类或者说保存了类构造函数。
    // 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。
    // 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型。
    // 这个类型包含了类的所有静态成员和构造函数。
    // 之后，就和前面一样，我们在 greeterMaker上使用 new，创建 Greeter的实例。
    let greeterMaker: typeof Greeter = Greeter; // typeof Greeter 类型包含了类的所有静态成员和构造函数
    greeterMaker.standardGreeting = "Hey there!";

    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());








    // 把类当做接口使用
    // 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。这就是接口可以extends类的原因
}
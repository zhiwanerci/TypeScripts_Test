namespace InterfaceTest {
  // 函数类型
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
  }
  mySearch.apply
  mySearch.bind
  mySearch.call
  mySearch.prototype






  // 索引类型 见Test.ts





  // 类类型
  // 类类型 - 类静态部分和实例部分
  // 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。

  // 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。
  // constructor存在于类的静态部分，所以不在检查的范围内。
  // 因此，我们应该直接操作类的静态部分。
  interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
  tick();
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
  }
  class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
}
/*
 * @author: qileisong
 * @LastEditors: qileisong
 * @Copyright: 2024 Tencent Inc. All rights reserved.
 * @Date: 2024-11-30 11:16:51
 * @FilePath: \TypeScripts\Decotator\DecotatorTest.ts
 * @Desc: File Desc
 */
namespace DecotatorTest {
    function f() {
        console.log("f(): evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("f(): called");
        }
    }
    
    function g() {
        console.log("g(): evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("g(): called");
        }
    }
    
    class C {
        @f()
        @g()
        method() {}
    }
}
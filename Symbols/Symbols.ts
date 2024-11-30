/*
 * @author: qileisong
 * @LastEditors: qileisong
 * @Copyright: 2024 Tencent Inc. All rights reserved.
 * @Date: 2024-11-28 10:09:52
 * @FilePath: \TS\Symbols\Symbols.ts
 * @Desc: File Desc
 */
namespace SymbolsTest {
    const a = Symbol();

    class b {
        c = Array<number>();
        
        [Symbol.iterator]() {
        }
    }

}
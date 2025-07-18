// 이 기능은 자주 사용되는 기능이 아닙니다.
// 왜냐하면 처음부터 `function calculate(x: number, y?: number, z?: number): number `
// 와 같이 작성하면 되기 때문입니다.
// 복잡한 파라미터 조합 등을 사용할 때 사용하라고 만들어놓은 문법이지만
// 저는 실무에서 거의 사용하지 않습니다.

function add(x: number): number;
function add(x: number, y: number): number;
function add(x: number, y: number, z: number): number;
function add(x: number, y?: number, z?: number): number {
    if (y === undefined) return x;
    if (z === undefined) return x + y;
    return x + y + z;
}

console.log(add(1));          // 1
console.log(add(1, 2));       // 3
console.log(add(1, 2, 3));    // 6
// arr에 마우스를 올리면 타입이 number[]로 추론됩니다.
const arr = [1, 2, 3, 4, 5];
arr.push(6); // Valid operation, arr is inferred as number[]
// arr.push("7"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(typeof arr); // Outputs: object
console.log(arr);

// arr2에 마우스를 올리면 타입이 (number | string)[]로 추론됩니다.
// 이러한 여러개의 타입을 가지고 있는 것을 유니언 타입이라고 합니다.
const arr2 = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
arr2.push(6); // Valid operation, arr2 is inferred as (number | string)[]
arr2.push("d"); // Valid operation, arr2 is inferred as (number | string)[]
// arr2.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
console.log(arr2);

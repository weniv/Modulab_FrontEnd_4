let obj = {
    name: 'jun',
    age: 20,
    address: 'seoul'
};

let obj2: {
    name: string;
    age: number;
    address: string;
} = {
    name: 'jun',
    age: 20,
    address: 'seoul'
}

// 불편해요! 정의할 때에도 선언하고, function에 인자로 넘길 때에도 선언해야 합니다.
// 그래서 type을 따로 선언해서 사용합니다.
function print(obj: { name: string; age: number; address: string }) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.address);
}

print(obj);
print(obj2);
// 여기서 가장 주의해야할 점!
// {}가 나오니 객체라고 생각하고 콤마를 찍으면 안됩니다. 
type Human = {
    name: string;
    age: number;
    address: string;
};

let obj: Human = {
    name: 'jun',
    age: 20,
    address: 'seoul'
};

function print(obj: Human) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.address);
}

print(obj);
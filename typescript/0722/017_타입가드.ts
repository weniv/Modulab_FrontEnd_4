// 타입스크립트는 타입이 중요합니다.
// A 함수 => B 함수 => C 함수가 실행된다고 가정해보죠.
// A 함수에서 B 함수로 넘어갈 때, B 함수가 어떤 타입을 받는지 명확히 알 수 있어야 합니다.
// 그런데 javascript에서는 이러한게 불명확한 경우가 많습니다.
// 그래서 타입스크립트에서는 타입을 명확히 정의하고, 이를 보장하기 위해 타입가드를 사용합니다.

// 타입가드는 쉽게 얘기하면 타입을 보장하는 것입니다.
// 자바스크립트로 따지자면 if로 타입을 체크하는 것과 비슷합니다.

// 예를 들어 아래와 같은 함수
function isString(value: any) {
    if (typeof value === 'string') {
        return value;
    }
    return value.toString();
}

console.log(isString('hello')); // 'hello'
console.log(isString(123)); // '123'


class Dog {
    bark() {
        console.log('멍멍');
    }
}

class Cat {
    meow() {
        console.log('야옹');
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // 타입가드로 Dog 타입임을 보장
    } else if (animal instanceof Cat) {
        animal.meow(); // 타입가드로 Cat 타입임을 보장
    }
}

makeSound(new Dog()); // '멍멍'
makeSound(new Cat()); // '야옹'
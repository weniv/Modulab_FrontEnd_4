// 다른 언어에서는 특히 interface를 class와 같은 곳에 사용을 많이 합니다.
// 무조건 구현해야 하는 속성들을 정의할 때 사용합니다.
// 예를 들어, 계산기와 같은 interface를 정의한다고 하면
// 더하기, 빼기, 곱하기, 나누기와 같은 메서드를 '무조건 정의'해야 하는 용도로 사용하는거죠.
// python에서는 '추상클래스'라는 이름으로 사용합니다.(인터페이스라는 것이 python엔 없거든요.)

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
    // 이 중 하나라도 구현하지 않으면
    // TypeScript는 오류를 발생시킵니다.
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
}

const calculator = new SimpleCalculator();
console.log(calculator.add(5, 3)); // 8
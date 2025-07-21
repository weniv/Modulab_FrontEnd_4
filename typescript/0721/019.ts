// 제네릭인터페이스

interface Human<K, T> {
  id: K;
  name: T;
  age: number;
  email: string;
}


const human1: Human<number, string> = {
  id: 1,
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

console.log(human1);

import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

function App() {
  const [name, setName] = useLocalStorage<string>("name", "");
  const [count, setCount] = useLocalStorage<number>("count", 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useLocalStorage 예제</h1>
      
      <div>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="이름 입력"
        />
        <p>이름: {name}</p>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>
          카운트: {count}
        </button>
      </div>

      <p>페이지를 새로고침해도 값이 유지됩니다!</p>
    </div>
  );
}

export default App;
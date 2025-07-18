import { useState } from 'react'

function App() {
  // typescript이니 useState<string>('')와 같이 제네릭을 사용하여 타입을 명시할 수 있습니다.
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  function calculate(): string {
    const num1: number = parseFloat(input1)
    const num2: number = parseFloat(input2)
    let res: string = ''
    switch (operation) {
      case '+':
        res = (num1 + num2).toString()
        break
      case '-':
        res = (num1 - num2).toString()
        break
      case '*':
        res = (num1 * num2).toString()
        break
      case '/':
        res = (num1 / num2).toString()
        break
      default:
        res = '잘못된 연산자입니다.'
    }
    setResult(res)
    return res
  }
  return (
    <>
      <h1>계산기</h1>
      <input 
        type="text" 
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input type="text"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      />
      <input type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button
       onClick={calculate}
      >계산하기</button>
      <div>
        <h2>결과: {result}</h2>
      </div>
    </>
  )
}

export default App

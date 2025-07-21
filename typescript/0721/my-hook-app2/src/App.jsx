import { useState, useEffect, useRef } from 'react'

function App() {
  // useState Hook: 할 일 목록을 관리하는 상태
  // 초기값은 빈 배열이며, 각 할 일은 id, text, completed 속성을 가짐
  const [todos, setTodos] = useState([])
  
  // useState Hook: 입력 필드의 값을 관리하는 상태
  // 사용자가 입력하는 텍스트를 실시간으로 추적
  const [inputValue, setInputValue] = useState('')
  
  // useState Hook: 수정 모드를 관리하는 상태
  // null이면 수정 모드가 아니고, todo의 id가 들어있으면 해당 todo를 수정 중
  const [editingId, setEditingId] = useState(null)
  
  // useState Hook: 수정 중인 텍스트를 관리하는 상태
  const [editingText, setEditingText] = useState('')
  
  // useRef Hook: 입력 필드의 DOM 요소에 직접 접근하기 위한 참조
  // 포커스를 제어하거나 DOM 조작이 필요할 때 사용
  const inputRef = useRef(null)
  
  // useRef Hook: 수정 입력 필드의 참조
  const editInputRef = useRef(null)
  
  // useRef Hook: 다음 todo의 id를 생성하기 위한 카운터
  // 컴포넌트가 리렌더링되어도 값이 유지됨
  const nextIdRef = useRef(1)

  // useEffect Hook: 컴포넌트가 처음 마운트될 때 실행
  // 로컬 스토리지에서 저장된 할 일 목록을 불러옴
  useEffect(() => {
    // 로컬 스토리지에서 'todos' 키로 저장된 데이터를 가져옴
    const savedTodos = localStorage.getItem('todos')
    
    if (savedTodos) {
      // JSON 문자열을 객체로 파싱
      const parsedTodos = JSON.parse(savedTodos)
      setTodos(parsedTodos)
      
      // 저장된 todos가 있다면, 가장 큰 id를 찾아서 다음 id 설정
      if (parsedTodos.length > 0) {
        const maxId = Math.max(...parsedTodos.map(todo => todo.id))
        nextIdRef.current = maxId + 1
      }
    }
    
    // 컴포넌트가 마운트되면 입력 필드에 자동으로 포커스
    inputRef.current?.focus()
  }, []) // 빈 의존성 배열: 컴포넌트 마운트 시 1번만 실행

  // useEffect Hook: todos 상태가 변경될 때마다 실행
  // 할 일 목록을 로컬 스토리지에 저장
  useEffect(() => {
    // todos가 비어있지 않을 때만 저장 (초기 렌더링 시 빈 배열 저장 방지)
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos]) // todos가 변경될 때마다 실행

  // useEffect Hook: 수정 모드가 활성화될 때 실행
  // 수정 입력 필드에 자동으로 포커스
  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus()
      // 텍스트 끝으로 커서 이동
      editInputRef.current.setSelectionRange(
        editingText.length, 
        editingText.length
      )
    }
  }, [editingId]) // editingId가 변경될 때마다 실행

  // 할 일 추가 함수
  const addTodo = () => {
    // 입력값이 비어있거나 공백만 있으면 추가하지 않음
    if (inputValue.trim() === '') return
    
    // 새로운 todo 객체 생성
    const newTodo = {
      id: nextIdRef.current,
      text: inputValue,
      completed: false,
      // 생성 시간 저장 (useEffect에서 활용 가능)
      createdAt: new Date().toISOString()
    }
    
    // 상태 업데이트: 기존 todos에 새 todo 추가
    setTodos(prevTodos => [...prevTodos, newTodo])
    
    // 입력 필드 초기화
    setInputValue('')
    
    // 다음 id를 위해 카운터 증가
    nextIdRef.current += 1
    
    // 입력 필드에 다시 포커스 (UX 개선)
    inputRef.current?.focus()
  }

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    // filter를 사용해 해당 id를 가진 todo를 제외한 새 배열 생성
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // 할 일 완료 상태 토글 함수
  const toggleTodo = (id) => {
    // map을 사용해 해당 id를 가진 todo의 completed 상태를 반전
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  // 수정 모드 시작 함수
  const startEdit = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  // 수정 저장 함수
  const saveEdit = () => {
    if (editingText.trim() === '') return
    
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === editingId
          ? { ...todo, text: editingText }
          : todo
      )
    )
    
    // 수정 모드 종료
    setEditingId(null)
    setEditingText('')
  }

  // 수정 취소 함수
  const cancelEdit = () => {
    setEditingId(null)
    setEditingText('')
  }

  // Enter 키로 할 일 추가
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  // Enter 키로 수정 저장, Escape 키로 취소
  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit()
    } else if (e.key === 'Escape') {
      cancelEdit()
    }
  }

  // 완료된 할 일 개수 계산
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div>
      <h1>Todo App with React Hooks</h1>
      
      {/* 할 일 추가 섹션 */}
      <div>
        <input
          ref={inputRef} // useRef로 생성한 참조 연결
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="할 일을 입력하세요..."
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 진행 상황 표시 */}
      <div>
        <p>
          전체: {todos.length}개 | 
          완료: {completedCount}개 | 
          미완료: {todos.length - completedCount}개
        </p>
      </div>

      {/* 할 일 목록 */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              // 수정 모드일 때 표시
              <div>
                <input
                  ref={editInputRef}
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyPress={handleEditKeyPress}
                />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </div>
            ) : (
              // 일반 모드일 때 표시
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span 
                  style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? 0.6 : 1
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => startEdit(todo.id, todo.text)}>
                  수정
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                  삭제
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* 전체 삭제 버튼 */}
      {todos.length > 0 && (
        <button 
          onClick={() => {
            if (window.confirm('정말로 모든 할 일을 삭제하시겠습니까?')) {
              setTodos([])
              localStorage.removeItem('todos')
              nextIdRef.current = 1
            }
          }}
        >
          전체 삭제
        </button>
      )}
    </div>
  )
}

export default App

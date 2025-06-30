import { useState } from "react"

function App() {
  const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
    { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
  ]

  const [selectedId, setSelectedId] = useState(null)

  // console.log(selectedId)

  return (
    <>
      {data.map(item => {
        return (
          <>
            <h2 onClick={() => setSelectedId(selectedId === item.id? null : item.id)}>{item.name}</h2>
            {selectedId === item.id && (
              <div>
                <p>{item.email}</p>
                <p>{item.job}</p>
              </div>
            )}
          </>
        )
      })}
    </>
  )
}

export default App

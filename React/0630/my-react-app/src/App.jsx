
function App() {

  return (
    <>
      <Hello name="World" />
      <Hello name="React" />
      <Hello name="User" />
    </>
  )
}

function Hello({ name }) {
  return (
    <div>Hello, {name}!</div>
  )
}

export default App

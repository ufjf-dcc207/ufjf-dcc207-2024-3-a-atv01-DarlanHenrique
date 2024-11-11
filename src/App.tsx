import Disciplina from "./Disciplina"

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <Disciplina code={"DCC202"} name={"Desenvolvimento Web I"} />
      <Disciplina code={"DCC206"} name={"Desenvolvimento Web II"} />
      <Disciplina code={"DCC207"} name={"Desenvolvimento Web Front-End"} />
    </div>
  )
}

export default App

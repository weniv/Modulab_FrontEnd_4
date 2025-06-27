import ButtonList from "./component/ButtonList"
import DisplayMood from "./component/DisplayMood"
import "./App.css"
import { useState } from "react"

function App() {

    const [currentMood, setCurrentMood] = useState("");

    console.log(currentMood);

    return (
        <article className="app-main" >
            <h1>오늘의 기분을 선택해주세요 😄</h1>
            <ButtonList setCurrentMood={setCurrentMood} />
            <DisplayMood currentMood={currentMood} />
        </article>
    )
}

export default App

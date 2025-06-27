import "./DisplayMood.css"

function DisplayMood({ currentMood }) {
    return (
        <section className="container">
            <h2>{currentMood ? `기분이 ${currentMood}` : `아직 선택하지 않았습니다.`}</h2>
        </section>
    );
}

export default DisplayMood;
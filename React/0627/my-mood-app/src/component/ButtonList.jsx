import "./ButtonList.css"
function ButtonList({ setCurrentMood }) {

    const menus = ["좋아요! 😃", "정말 좋아요! 😃", "최고에요! 😃", "미쳤어요! 😃"];

    return (
        <ul className="container-list">
            {menus.map((moodEl, index) => {
                return (
                    <li key={index}>
                        <button className="btn-item" onClick={() => setCurrentMood(moodEl)}>{moodEl}</button>
                    </li>
                )
            })}
        </ul>
    );
}

export default ButtonList;
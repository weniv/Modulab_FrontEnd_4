import { useState } from "react";

function Detail() {
  return <div>상세정보</div>;
}

function Question() {
  return <div>Q&A</div>;
}

function Review() {
  return <div>리뷰</div>;
}

function ContentsContainer({ listName }) {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
  return null; // 기본값을 반환하거나 에러 처리
}

function NavBar() {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            className={listName === "detail" ? 'strong' : ''}
            onClick={checkId}
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            className={listName === "qa" ? 'strong' : ''}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            className={listName === "review" ? 'strong' : ''}
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

function App() {
  return (
    <>
      <NavBar />
    </>
  )
}

export default App

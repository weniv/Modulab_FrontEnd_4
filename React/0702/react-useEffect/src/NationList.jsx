import styled from "styled-components";
import { useEffect, useState } from 'react';

const List = styled.div`
     margin: 60px auto;

    ul {
      display:flow-root;
      padding: 10px;
    }

    li {
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      list-style: none;
      margin: 20px 0;
    }

    .options{
        display:flow-root;
        padding: 10px;
    }
        button{
            float:right;
            padding: 10px;
            border-radius: 5px;
            border:1px solid black;
            background-color: #fff;
        }
`


function NationList() {
    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/nations');

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setNations(json));
    }, [url]);


    return (
        <List>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((data) =>
                    <li key={data.id}>
                        <h3>{data.title}</h3>
                        <strong>{data.population}</strong>
                    </li>
                )}
            </ul>
            <div className="options">
                <button onClick={() => setUrl('http://localhost:3000/nations?loc=europe')}>유럽 목록</button>
                <button onClick={() => setUrl('http://localhost:3000/nations')}>전체 목록</button>
            </div>
        </List>
    );
}

export default NationList;
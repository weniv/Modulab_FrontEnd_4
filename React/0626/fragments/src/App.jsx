import MyComponent from "./MyComponent";
import React from "react";


function App() {
    const items = [
        { id: 1, name: 'Apple', desc: '빨간건 사과' },
        { id: 2, name: 'Banana', desc: '바나나는 길어' },
        { id: 3, name: 'Cherry', desc: '체리는 비싸' }
    ];
    const itemList = items.map(({ id, name, desc }) => {
        return (
            <React.Fragment key={id}>
                <dt> {name}</dt>
                <dd>{desc}</dd>
            </React.Fragment>
        );
    }
    )
    return (
        <dl>
            {itemList}
        </dl>
    );
}

export default App

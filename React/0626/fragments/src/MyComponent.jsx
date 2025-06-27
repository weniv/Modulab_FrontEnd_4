import React from 'react';
import './FragmentTest.css';

function MyComponent() {
    return (
        <React.Fragment key="my-fragment">
            <h1 className="my-fragment">리엑트프레그먼트</h1>
            <p className="my-fragment">테스트입니다!</p>
        </React.Fragment>
    );
}

export default MyComponent;
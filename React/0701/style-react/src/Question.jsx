import React from "react";
import styled from 'styled-components';
import styles from "./Question.module.css";


const ContentDiv = styled.div`
    margin: 40px;
`;

const ContentH2 = styled.h2`
    width: 200px;
    margin: 0 auto;
    text-align: center;
    color: teal;
`;


const Question = () => {
    return (
        <ContentDiv className={styles.box}>
            <ContentH2 className={styles.text}>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
        </ContentDiv>
    );
};

export default Question;
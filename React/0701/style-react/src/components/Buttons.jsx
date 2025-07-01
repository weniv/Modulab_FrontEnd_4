import styled from 'styled-components';


const ButtonBasic = styled.button`
    background-color: royalblue;
    padding: 10px;
    color: white;
`;

const ButtonStyle2 = styled(ButtonBasic)`
    color: black;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    span{
        
    }
`;

const ButtonStyle3 = styled(ButtonBasic)`
    color: yellow;
    background-color: lightgreen;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.2);
`;

export { ButtonBasic, ButtonStyle2, ButtonStyle3 };



import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.$fullWidth ? '100%' : 'auto'};
    background-color: ${(props) => {
        switch (props.color) {
            case 'danger':
                return 'red';
            case 'success':
                return 'green';
            default:
                return 'gray';
        }
    }};
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        transform: ${(props) => props.size === 'large' ? 'scale(1.5)' : 'scale(1)'}
    }
`;


const StyledButtons = () => {
    return (
        <>
            <StyledButton color="danger" size="large" $fullWidth={false}>버튼입니다</StyledButton>
            <StyledButton color="success">버튼입니다</StyledButton>
            <StyledButton size="large">버튼입니다</StyledButton>
        </>
    )
}


export default StyledButtons;
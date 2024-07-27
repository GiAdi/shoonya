import styled from "styled-components";

export default function Button (props) {
    return(
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 0.8em;
    border-radius: 6px;
    border: none;
    color: white;
    background: ${({disabled}) => disabled ? "silver" : "midnightblue"};
    cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
`;

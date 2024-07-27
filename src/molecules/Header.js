import styled from "styled-components"

export default function Header() {
    return (
        <StyledHeading>
            Wellness Retreats
        </StyledHeading>
    )
}

const StyledHeading = styled.div`
    display: flex;
    background: midnightblue;
    color: white;
    font-size: 2rem;
    padding: 0.5em;
`;
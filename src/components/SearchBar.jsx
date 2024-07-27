import styled from "styled-components";

export default function SearchBar({ handleChange }) {

    const debounce = () => {
        let timer;
        return (
            (e) => {
                timer && clearTimeout(timer);
                timer = setTimeout(() => handleChange('title', e.target.value), 1000);
            }
        )
    }
    const debouncedChangeHandler = debounce();

    return (
        <SearchContainer>
            <StyledSearch type='text' onChange={debouncedChangeHandler} placeholder="Search retreats by title" />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    display: flex;
    flex-grow:1;
    justify-content: end;
        @media (max-width: 800px) {
        width: 100%;
  }
`

const StyledSearch = styled.input`
    border: none;
    padding: 1em;
    width: 20em;
    border-radius: 8px;
    background: midnightblue;
    color: white;
    @media (max-width: 800px) {
        color: black;
        width: 100%;
        background: gainsboro;

  }
`;
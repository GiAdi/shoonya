import styled from "styled-components"

export default function FilterPill({ name, values = [], handleChange }) {

    return (
        <StyledSelect name="pets" id={name} onChange={e => handleChange('filter', e.target.value)}>
            <option value="">Filter by {name}</option>
            {values.map(_ =>
                <option value={_} key={_}>{_}</option>
            )}
        </StyledSelect>
    )
}

const StyledSelect = styled.select`
    padding: 1em;
    border: none;
    width: 10em;
    border-radius: 8px;
    background: midnightblue;
    color: white;
    @media (max-width: 800px) {
        width: 100%;
        background: gainsboro;
        color: black;
  }
`
import styled from "styled-components";
import FilterPill from "../components/FilterPill";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

export default function ControlBar() {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (key, value = null) => {
        setSearchParams(params => {
            const { page, ...paramsObj } = Object.fromEntries(params);

            if (value) {
                return { ...paramsObj, [key]: value }
            }
            else {
                const { [key]: discardValue, page, ...newParams } = paramsObj;
                return newParams;
            }
        });
    }

    return (
        <ControlsContainer>
            <FiltersContainer>
                <FilterPill name='Date' values={['2023-2024', '2024-2025']} handleChange={handleChange} />
                <FilterPill name='Type' values={['Yoga', 'Meditation', 'Detox']} handleChange={handleChange} />
            </FiltersContainer>
            <SearchBar handleChange={handleChange} />
        </ControlsContainer>
    )
}

const FiltersContainer = styled.div`
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
     @media (max-width: 800px) {
        flex-direction: column;
        gap: 1em;
        width: 100%;
  }
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    gap: 2em;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 1em;
  }
`;
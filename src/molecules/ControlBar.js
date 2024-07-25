import FilterPill from "../components/FilterPill";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

export default function ControlBar() {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (key, value = null) => {
        setSearchParams(params => {
            const {page, ...paramsObj} = Object.fromEntries(params);

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
        <div>
            <FilterPill name='Date' values={['2023-2024', '2024-2025']} handleChange={handleChange} />
            <FilterPill name='Type' values={['Yoga', 'Meditation', 'Detox']} handleChange={handleChange} />
            <SearchBar handleChange={handleChange} />
        </div>
    )
}
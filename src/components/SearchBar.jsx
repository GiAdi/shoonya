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
        <input type='text' onChange={debouncedChangeHandler} />
    )
}
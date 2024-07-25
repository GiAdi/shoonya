export default function FilterPill({ name, values = [], handleChange }) {

    return (
        <select name="pets" id={name} onChange={e => handleChange('filter', e.target.value)}>
            <option value="">Filter by {name}</option>
            {values.map(_ =>
                <option value={_} key={_}>{_}</option>
            )}
        </select>
    )
}
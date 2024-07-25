import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Pagination() {

    let [searchParams, setSearchParams] = useSearchParams();
    const retreats = useSelector(state => state.retreats.retreats);
    const currentPage = +searchParams.get('page') || 1;

    const handlePageChange = (_) => {
        setSearchParams( params => {
            const paramsObj = Object.fromEntries(params);
            const newPage = (_ === 'inc') ? (currentPage + 1) : (currentPage - 1);
            return { ...paramsObj, page: newPage };
        })

    }

    return (
        <>
            <button disabled={currentPage <= 1} onClick={()=>handlePageChange('dec')}>Prev</button>
            {currentPage}
            <button disabled={(retreats?.length < 3)}onClick={()=>handlePageChange('inc')}>Next</button>
        </>
    )
}
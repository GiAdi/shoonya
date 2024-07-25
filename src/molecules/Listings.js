import { useSelector, useDispatch } from 'react-redux';
// import { addToList } from "../store/retreatsSlice";


export default function Listings() {

  const results = useSelector(state => state.retreats.retreats);
//   const dispatch = useDispatch();

    return (
        <div>
            {
                Object.keys(results || {})
                    .map( (item, index) =>
                        <div key={index}>
                            {results[item].title}
                        </div>
                    )
            }
            {/* <button onClick={()=>dispatch(addToList())}>add to list</button> */}
        </div>
    )
}
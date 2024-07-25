import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router-dom";
import Pagination from './Pagination';
import { populateList } from "../store/retreatsSlice";
import { callApi } from "../utils/apis";
import ListingCard from "../components/ListingCard";

export default function Listings() {
    
    const retreats = useSelector(state => state.retreats.retreats);
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await callApi(searchParams);
          dispatch(populateList(data));
        }
        catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, [searchParams, dispatch]);

    return (
        <>
            {
                Object.keys(retreats || {})
                    .map((item, index) =>
                            <ListingCard data={retreats[item]} key={index}/>
                    )
            }
            <Pagination />
        </>
    )
}
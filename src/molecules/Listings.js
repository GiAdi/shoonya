import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router-dom";
import Pagination from './Pagination';
import { populateList } from "../store/retreatsSlice";
import { callApi } from "../utils/apis";
import ListingCard from "../components/ListingCard";
import styled from "styled-components";

export default function Listings() {

    const retreats = useSelector(state => state.retreats.retreats);
    const retreatsKeys = Object.keys(retreats || {});
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
                dispatch(populateList({}));
            }
            finally {
            }
        }
        fetchData();
    }, [searchParams, dispatch]);

    return (
        <>
            <ListingContainer>
                {retreatsKeys.length ?
                    retreatsKeys.map((item, index) =>
                        <ListingCard data={retreats[item]} key={index} />
                    )
                    :
                    <div>No results found</div>
                }
            </ListingContainer>
            <Pagination />
        </>
    )
}

const ListingContainer = styled.div`
    display: flex;
    gap: 2em;
    padding: 0 2em;
    flex-wrap: wrap;
    min-height: 40vh;
    margin-bottom: 2em;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
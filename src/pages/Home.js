import { Link } from "react-router-dom";
import ControlBar from "../molecules/ControlBar";
import Header from "../molecules/Header";
import Listings from "../molecules/Listings";

export default function Home ({results}) {
    return (
        <>
        <Header/>
        <ControlBar/>
        <Listings results={results}/>
        <Link to='/details'>Details</Link>
        </>
    )
}
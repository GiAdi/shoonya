import { Link } from "react-router-dom";
import ControlBar from "../molecules/ControlBar";
import Header from "../molecules/Header";
import Listings from "../molecules/Listings";

export default function Home () {
    return (
        <>
        <Header/>
        <ControlBar/>
        <Listings/>
        {/* <Link to='/details'>Details</Link> */}
        </>
    )
}
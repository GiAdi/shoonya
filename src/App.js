import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { populateList } from './store/retreatsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
        try {
            const {data} = await axios.get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats");
            dispatch(populateList(data));
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchData();

}, []);


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<DetailsPage/>}/>
    </Routes>
  );
}

export default App;

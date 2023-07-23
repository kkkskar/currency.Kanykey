import {Header} from "./components/Header";
import { useState } from "react";
import Main from "./pages/Main";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App=()=>{
const [currency, setCurrency] = useState('USD')
const [img, setImg] = useState('')
// console.log(currency);
  return (
    <>
    <Router>
    <Header setCurrency={setCurrency}/>
    <Routes>
    <Route path="/" element={<Main currency={currency} setImg={setImg}/>}/>
    <Route path="/details" element={<Details currency={currency} img={img}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;

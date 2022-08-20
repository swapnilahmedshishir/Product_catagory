import { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
 
  const [catagory, setCatagory] = useState('camera')

  return (
  <div>
    <Header catagory={catagory} setCatagory= {setCatagory}></Header>
    <Home catagory={catagory}></Home>
  </div>
  
  );
}

export default App;

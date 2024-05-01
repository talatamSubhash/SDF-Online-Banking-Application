import React from "react";
import Headder from "./Headder";
import Body from "./Body";
import Footer from "./Footer";
import './App.css'
const App =()=>{
  return(<>
    <div id="div01">
    <div id="div1">
    <Headder />
    </div>
    <div id="div2">
    <Body />
    </div>
    <div id="div3">
    <Footer />
    </div>
    </div>
    </>)
}
export default App;
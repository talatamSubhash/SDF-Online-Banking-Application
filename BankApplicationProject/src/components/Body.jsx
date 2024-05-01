import React from "react";
import { Routes,Route } from "react-router";
import Home from './Home';
import AddAccount from "./AddAccount";
import ViewAccount from "./ViewAccount";
import DepositAmount from "./DepositAmount";
import WithdrawAmount from "./WithdrawAmount";
import TransferAmount from "./TransferAmount";
import CloseAccount from "./CloseAccount";
import About from "./About";
import './Body.css'


const Body =()=>{
    return(<>
        <div id="div4">
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/newAccount' element={<AddAccount />}></Route>
        <Route path='/viewBalance' element={<ViewAccount />}></Route>
        <Route path='/addBalance' element={<DepositAmount />}></Route>
        <Route path='/withdrawBalance' element={<WithdrawAmount />}></Route>
        <Route path='/transferBalance' element={<TransferAmount />}></Route>
        <Route path='/closeAccount' element={<CloseAccount />}></Route>
        <Route path="/about" element={<About />}></Route>
        </Routes>
        </div>
        </>)
}
export default Body;
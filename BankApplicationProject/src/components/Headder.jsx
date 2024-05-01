import React from "react";
import { Link } from 'react-router-dom';


const Headder = () => {
    return (<>
        <div>
            <h1 style={{textAlign:"center"}}>SDFC BANK</h1>
            <h3 style={{textAlign:"center"}}>EXTRA ORDINARY SERVICES</h3>
        </div>
        <div>
        <Link to = '/' style={{marginRight:100}}>Home</Link>
        <Link to = '/newAccount' style={{marginRight:100}}>New Account</Link>
        <Link to = '/viewBalance' style={{marginRight:100}}>Balance</Link>
        <Link to = '/addBalance' style={{marginRight:100}}>Deposit</Link>
        <Link to = '/withdrawBalance' style={{marginRight:100}}>Withdraw</Link>
        <Link to = '/transferBalance' style={{marginRight:100}}>Transfer</Link>
        <Link to = '/closeAccount' style={{marginRight:100}}>Close Account</Link>
        <Link to = '/about' style={{marginRight:100}}>AboutUs</Link>
        </div>
    </>);
}

export default Headder;

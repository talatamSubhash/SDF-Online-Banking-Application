import React from "react";
import { Link } from 'react-router-dom';


const Headder = () => {
    return (<>
        <div>
            <h1 style={{textAlign:"center"}}>SDFC BANK</h1>
            <h3 style={{textAlign:"center"}}>EXTRA ORDINARY SERVICES</h3>
        </div>
        <div style={{backgroundImage:`URL("https://www.cossacklabs.com/case-studies/african-bank/preview_hub90103ed64272ab4cc07310463ff3dff_85916_768x0_resize_q75_box.jpg")`,backgroundSize:"200px",height:"200px",paddingTop:"20px",paddingLeft:"90px"}}>
        <Link to = '/' style={{marginRight:100}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Home</button></Link>
        <Link to = '/newAccount' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>New Account</button></Link>
        <Link to = '/viewBalance' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Balance</button></Link>
        <Link to = '/addBalance' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Deposit</button></Link>
        <Link to = '/withdrawBalance' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Withdraw</button></Link>
        <Link to = '/transferBalance' style={{marginRight:100},color:"white"}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Transfer</button></Link>
        <Link to = '/closeAccount' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Close Account</button></Link>
        <Link to = '/about' style={{marginRight:100,color:"white"}}><button style={{background:"blue",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>AboutUs</button></Link>
        </div>
    </>);
}

export default Headder;

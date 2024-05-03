import axios from "axios";
import { useState, useRef } from "react";
import './AddAccount.css';

const AddAccount = () => {
    const [data, setData] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const addAccount = () => {
        saveData();    
    };

    const saveData = async () => {
    if (
        ref1.current &&
        ref2.current &&
        ref3.current &&
        ref4.current &&
        ref5.current &&
        ref6.current 
    ) {
        const res = await axios.post(`http://localhost:8000/save`, {
            "accountNumber": ref1.current.value,
            "accountName": ref2.current.value,
            "password": ref3.current.value,
            "amount": ref4.current.value,
            "address": ref5.current.value,
            "mobileNumber": ref6.current.value,
        });
        const responseData = res.data;
        setData(responseData);
    } else {
        console.error("One or more refs are null.");
    }
};

return (
    <>
        <div style={{backgroundImage:`URL("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/UD7CEz6/bank-bank-building-branch_vyks9ofi_thumbnail-1080_01.png")`,backgroundSize:"80%",height:"440px"}}>
          <img style={{width:'700px',height:'150px'}}src="https://thumbs.dreamstime.com/b/create-account-web-button-editable-vector-illustration-isolated-white-background-create-account-button-122391697.jpg"/>

            <h1 style={{textAlign:"center" , color:"white",border:"2px solid black" ,background:"black"}}>OPEN ACCOUNT FORM</h1>
            <table style={{marginLeft:200}}>
            <tbody>
                <tr>
                <td style={{color:"white"}}>Account Number : </td>
                <td><input type="text" ref={ref1} /></td>
                </tr>
                <tr>
                <td style={{color:"white"}}>Name : </td>
                <td><input type="text" ref={ref2} /></td>
                </tr>
                <tr>
                <td style={{color:"white"}}>Password : </td>
                <td><input type="password" ref={ref3} /></td>
                </tr>
                <tr>
                <td style={{color:"white"}}>Amount : </td>
                <td><input type="text" ref={ref4} /></td>
                </tr>
                <tr>
                <td style={{color:"white"}}>Address : </td>
                <td><input type="text" ref={ref5} /></td>
                </tr>
                <tr>
                <td style={{color:"white"}}>Mobile Number : </td>
                <td><input type="text" ref={ref6} /></td>
                </tr>
                <br />
                <tr>
                <td><button onClick={addAccount}style={{background:"ForestGreen",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Submit</button></td>
                <td><button type="reset" style={{background:"red",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Clear</button></td>
                </tr>
            </tbody>
            </table>
        </div>
        <p  style={{marginLeft:500}}>{JSON.stringify(data)}</p>
    </>);
};

export default AddAccount;

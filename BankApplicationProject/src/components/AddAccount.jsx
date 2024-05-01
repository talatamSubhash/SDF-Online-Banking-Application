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
        <div>
            <h1 style={{textAlign:"center" , }}>OPEN ACCOUNT FORM</h1>
            <table style={{marginLeft:200}}>
            <tbody>
                <tr>
                <td>Account Number : </td>
                <td><input type="text" ref={ref1} /></td>
                </tr>
                <tr>
                <td>Name : </td>
                <td><input type="text" ref={ref2} /></td>
                </tr>
                <tr>
                <td>Password : </td>
                <td><input type="password" ref={ref3} /></td>
                </tr>
                <tr>
                <td>Amount : </td>
                <td><input type="text" ref={ref4} /></td>
                </tr>
                <tr>
                <td>Address : </td>
                <td><input type="text" ref={ref5} /></td>
                </tr>
                <tr>
                <td>Mobile Number : </td>
                <td><input type="text" ref={ref6} /></td>
                </tr>
                <br />
                <tr>
                <td><button onClick={addAccount}>Submit</button></td>
                <td><button type="reset">Clear</button></td>
                </tr>
            </tbody>
            </table>
        </div>
        <p  style={{marginLeft:500}}>{JSON.stringify(data)}</p>
    </>);
};

export default AddAccount;

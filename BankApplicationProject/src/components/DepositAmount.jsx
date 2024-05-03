import axios from "axios";
import { useState, useRef } from "react";

const DepositAmount = () => {
    const [data, setData] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    
    const depositAmount = async () => {
        await addAmount();    
    };

    const addAmount = async () => {
        const res = await axios.post(`http://localhost:8000/deposit/${ref1.current.value}`, {
            "accountName": ref2.current.value,
            "password": ref3.current.value,
            "amount": ref4.current.value,
        });
        const responseData = res.data; // Assuming response data is in res.data
        setData(responseData);
    };

    return (
        <>
            <div>
                <h1 style={{textAlign:"center" ,color:"black",border:"2px solid black",background:"pink"}}>DEPOSIT FORM</h1>
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
                            <td><button onClick={depositAmount}style={{background:"darkGreen",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Submit</button></td>
                            <td><button type="reset"  style={{background:"darkRed",color:"white",padding:"3px",borderRadius:"10px",fontWeight:"bold",cursor:"pointer"}}>Clear</button></td>
                        </tr>
                    </tbody>
                </table>
                {data&&(
                    <table border={1}>   
                                   <thead>
                    <tr>
                      <th>ACCOUNT NUMBER</th>
                      <th>ACCOUNT NAME</th>
                      <th>PASSWORD</th>
                      <th>AMOUNT</th>
                      <th>ADDRESS</th>
                      <th>MOBILE NUMBER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.accountNumber}</td>
                      <td>{data.accountName}</td>
                      <td>{data.password}</td>
                      <td>{data.amount}</td>
                      <td>{data.address}</td>
                      <td>{data.mobileNumber}</td>

                    </tr>
                  </tbody>
                </table>
                )}
            </div>
            
        </>
    );
};

export default DepositAmount;

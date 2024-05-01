import axios from "axios";
import { useState, useRef } from "react";

const TransferAmount = () => {
    const [data, setData] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const transferAmount = async () => {
        await updateAmount();    
    };

    const updateAmount = async () => {
        const res = await axios.post(`http://localhost:8000/transfer/${ref1.current.value}/${ref4.current.value}/${ref5.current.value}`, {
            "accountName": ref2.current.value,
            "password": ref3.current.value,
           

        });
        const responseData = res.data; // Assuming response data is in res.data
        setData(responseData);
    };

    return (
        <>
            <div>
                <h1 style={{textAlign:'center'}}>TRANSFER FORM</h1>
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
                            <td>Target Account Number : </td>
                            <td><input type="text" ref={ref4} /></td>
                        </tr>
                        <tr>
                            <td>Amount : </td>
                            <td><input type="text" ref={ref5} /></td>
                        </tr>
                        <tr>
                            <td><button onClick={transferAmount}>Submit</button></td>
                            <td><button type="reset">Clear</button></td>
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

export default TransferAmount;

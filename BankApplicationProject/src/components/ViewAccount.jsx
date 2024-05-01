import { useRef,useState } from "react";
import axios from "axios";
const ViewAccount = ()=>{
    const[record,setRecord] = useState([]);
    const[error,setError] = useState(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const getRecord = async ()=>{
        try{
            const res = await axios.get(`http://localhost:8000/get/${ref1.current.value}/${ref2.current.value}/${ref3.current.value}`)
            const {data} = res;
            setRecord(data);
            setError(null);

        }
        catch(error){
            console.error("Error Fetching Record :" ,error);
            setError("error fetching record .please try again");
            setRecord(null);
        }
    };
    const get_data =()=>{
        getRecord();
    }
    return(<>
        <div>
        <h1 style={{textAlign:"center"}}>BALANCE FORM</h1>
        <table style={{marginLeft:150}}> 
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
            <br></br>
            <tr> <button onClick={get_data} style={{textAlign:"center",marginLeft:100}}>Get Bank Details</button></tr>
            </tbody>
            </table>
            {error && <p>{error}</p>}
            {record && (
              <table style={{marginLeft:5}} border={1}>
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
                      <td>{record.accountNumber}</td>
                      <td>{record.accountName}</td>
                      <td>{record.password}</td>
                      <td>{record.amount}</td>
                      <td>{record.address}</td>
                      <td>{record.mobileNumber}</td>

                    </tr>
                  </tbody>
                </table>
              )}
        </div>
        </>)
}
export default ViewAccount;
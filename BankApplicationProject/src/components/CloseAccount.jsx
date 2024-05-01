import { useRef, useState } from "react";
import axios from "axios";

const CloseAccount = () => {
    const [record, setRecord] = useState(null);
    const [error, setError] = useState(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const closeRecord = async () => {
        try {
            const res = await axios.post(`http://localhost:8000/close/${ref1.current.value}`, {
                "accountName": ref2.current.value,
                "password": ref3.current.value,
            });
            const { data } = res;
            setRecord(data);
            setError(null);
        } catch (error) {
            console.error("Error Fetching Record:", error.response.data);
            setError(error.response.data.error); // Display server error message, if available
            setRecord(null);
        }
    };

    const closeAccount = () => {
        closeRecord();
    };

    return (
        <div>
            <h1 style={{textAlign:"center"}}>CLOSE ACCOUNT</h1>
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
                        <td colSpan="2" style={{ textAlign: "center" }}>
                            <button onClick={closeAccount}>Close Account</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {error && <p>{error}</p>}
            {record && (
                <p style={{marginLeft:100}}>
                    Welcome {ref2.current.value}, Your Account Number {ref1.current.value} has been closed.
                </p>
            )}
        </div>
    );
};

export default CloseAccount;

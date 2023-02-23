import axios from "axios";
import { useEffect } from "react";
import { getAccessTokenLocal } from "../../utils/storage";
import "./index.css";

function AddInvoice() {

    useEffect(() => {
        (async function () {
           await axios.post(`http://167.235.158.238:3001/invoices`,{
            Body: {
                // "userId": number,
                // "paid": boolean,
                // "email": string,
                // "to": string,
                // "dueDate": date,
                // "term": number,
                // "createdDate": date,
                // "description": string,
                // "price": number
              },
              Headers: {
                  Authorization: `Bearer ${getAccessTokenLocal}`
              }
          });
    
        })();
      }, []);
    
      function btn(e) {
        e.preventDefault()

      }

  return (
    <div className="AddInvoice">
     <div className="form">
        <h4>Add invoices</h4>
        <div>
           <form action="#">
            <input placeholder="Client's Name"/>
            <input placeholder="Client's Email"/>
            <input type='date' placeholder="Due Date"/>
            <input placeholder="Payment Terms"/>
            <input minLength={3} placeholder="Project Description" required='true'/>
            <input  placeholder="price" type='number'/>

            <button onClick={btn} >btn</button>
           </form>
        </div>
     </div>
    </div>
  );
}
export default AddInvoice;

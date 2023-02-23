import axios from "axios";
import { useEffect, useState } from "react";
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

      const [name , setName] = useState("");

      const  btn = (e) => {
        e.preventDefault();

       console.log(name);
       

      }

  return (
    <div className="AddInvoice">
     <div className="form">
        <h4>Add invoices</h4>
        <div>
           <form action="#" onSubmit={btn}>
            <input placeholder="Client's Name" onChange={(e) => setName()}/>
            {/* <input placeholder="Client's Email"/>
            <input type='date' placeholder="Due Date"/>
            <input placeholder="Payment Terms"/>
            <input minLength={3} placeholder="Project Description" required='true'/>
            <input  placeholder="price" type='number'/> */}

            <button type='submit'>btn</button>
           </form>
        </div>
     </div>
    </div>
  );
}
export default AddInvoice;

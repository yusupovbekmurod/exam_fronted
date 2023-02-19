import { useEffect, useState } from "react";
import { getLanguageFromLocalStorage } from "../store";
import axios from "axios";
import "./style.css";

function ViewInvoice() {
  const id = getLanguageFromLocalStorage("idNumber");

  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `http://167.235.158.238:3001/invoices/${id}`
      );

      setInvoice(response.data);
    })();
  }, []);

  console.log(invoice);

  return (
    <div className="view">
      <div className="goBack">Go back</div>

      <div className="viewrapper">
        <div className="editwrap">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Status</p>
            <span
              style={{
                color: "#E78B21",
                padding: "0 20px 0 20px",
                background: "#FDF8F8",
              }}
            >
              Unpaid
            </span>
          </div>
          <div>
            <button className="editInvoice">Edit</button>
            <button className="deleteVoice">Delete</button>
            <button className="markPaid">Mark as Paid</button>
          </div>
        </div>
        <div className="renderwrap">
          <div className="viewCard">
            <h4>1</h4>
            <p>2</p>
          </div>
          <div
            className="viewCard"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p>Invoice Date</p>
              <h3>05 Feb 2023</h3>
            </div>
            <div>
              <p>Bill To</p>
              <h3>adf</h3>
            </div>
            <div>
              <p>Sent to</p>
              <h3>h.rashad077@gmail.com</h3>
            </div>
          </div>
          <div className="viewCard">
            <p>Payment Due</p>
            <h3>07 Mar 2023</h3>
          </div>
          <div>
            <div className="voiceTable" style={{backgroundColor:'aliceblue', borderRadius: '10px 10px 0 0',  height:100}}>
              <div>
                <p>Item Name</p>
                <h4>asdf</h4>
              </div>
              <div>
                <p>QTY.</p>
                <h4>1</h4>
              </div>
              <div>
                <p>Price</p>
                <h4>💲10.00</h4>
              </div>
              <div>
                <p>Total</p>
                <h4>💲10.00</h4>
              </div>
            </div>
            <div className="voiceTable" style={{color:'#fff',  alignItems:'center',background:'#393B54',borderRadius: '0 0 10px 10px', height:80}}>
              <p>Amount Due</p>
              <h2>💲 10.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;

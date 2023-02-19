import { useEffect, useState } from "react";
import { getLanguageFromLocalStorage } from "../store";
import { useNavigate } from "react-router-dom";
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

  let bg = ()=>{
    return invoice.paid ? 'none' : 'null'
  }

  const navigate = useNavigate()
  return (
    <div className="view">
      <div className="goBack" >
        <p style={{cursor:'pointer'}} onClick={()=>navigate(-2)} >◀ Go back</p>
      </div>

      <div className="viewrapper">
        <div className="editwrap">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Status</p>
            <span>
              {invoice.paid ? (
                <span
                  style={{
                    color: "green",
                    padding: "10px 20px 10px 20px",
                    background: "#F2FCF9",
                  
                  }}
                >
                  <b>Paid</b>
                </span>
              ) : (
                <span
                  style={{
                    color: "#E78B21",
                    padding: "10px 20px 10px 20px",
                    background: "#FDF8F8",
                  }}
                >
                  <b>Unpaid</b>
                </span>
              )}
            </span>
          </div>
          <div>
            <button className="editInvoice">Edit</button>
            <button className="deleteVoice">Delete</button>
            <button  className="markPaid" style={{display:bg()}}>Mark as Paid</button>
          </div>
        </div>
        <div className="renderwrap">
          <div className="viewCard">
            <h4>#{invoice.id}</h4>
            <p className="parag">asfd</p>
          </div>
          <div
            className="viewCard"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p className="parag">Invoice Date</p>
              <h3>{invoice.createdDate}</h3>
            </div>
            <div>
              <p className="parag">Bill To</p>
              <h3>{invoice.to}</h3>
            </div>
            <div>
              <p className="parag">Sent to</p>
              <h3>{invoice.email}</h3>
            </div>
          </div>
          <div className="viewCard">
            <p className="parag">Payment Due</p>
            <h3>{invoice.dueDate}</h3>
          </div>
          <div>
            <div
              className="voiceTable"
              style={{
                backgroundColor: "aliceblue",
                borderRadius: "10px 10px 0 0",
                height: 100,
              }}
            >
              <div>
                <p className="parag">Item Name</p>
                <h4>{invoice.description}</h4>
              </div>
              <div>
                <p className="parag">QTY.</p>
                <h4>{invoice.term}</h4>
              </div>
              <div>
                <p className="parag">Price</p>
                <h4>💲{invoice.price}</h4>
              </div>
              <div>
                <p className="parag">Total</p>
                <h4>💲{invoice.price}</h4>
              </div>
            </div>
            <div
              className="voiceTable"
              style={{
                color: "#fff",
                alignItems: "center",
                background: "#393B54",
                borderRadius: "0 0 10px 10px",
                height: 80,
              }}
            >
              <p className="parag">{invoice.to}</p>
              <h2>💲{invoice.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;

import "./style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { setLanguagetoLocalStorage } from "../store";



function Main() {
  const [invoices, setInvoice] = useState([]);
  const [paid, setPaid] = useState([]);
  const [unpaid, setUnPaid] = useState([]);
  const [filter, setFiltered] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`http://167.235.158.238:3001/invoices`);

      setInvoice(response.data);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `http://167.235.158.238:3001/invoices?paid=true`
      );

      setPaid(response.data);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `http://167.235.158.238:3001/invoices?paid=false`
      );

      setUnPaid(response.data);
    })();
  }, []);

  return (
    <main className="main">
      <container className="main-container">
        <section className="main-container_header">
          <div>
            <h1>Invoices</h1>
            <p>
              There are {filter.length == 0 ? invoices.length : filter.length}{" "}
              total invoices
            </p>
          </div>
          <div className="main-container_header_invoices">
            <form action="#">
              <label for="">Filter by status</label>
              <select
                onChange={function (ev) {
                  ev.preventDefault = null;
                  if (ev.target.value === "All") {
                    setFiltered(invoices);
                  } else if (ev.target.value === "Paid") setFiltered(paid);
                  else if (ev.target.value === "Unpaid") {
                    setFiltered(unpaid);
                  }
                }}
              >
                <option>All</option>
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
            </form>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/AddInvoice"
            >
              <button className="hover">
                <span>
                  <b>+</b>
                </span>
                <b> New Invoice</b>
              </button>
            </NavLink>
          </div>
        </section>
        <section className="main-container_wrap">
          {(filter == "" ? invoices : filter).map((invoice) => {
            return (
              <div key={invoice.id}>
                <card className="main-container_wrap_card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "50%",
                    }}
                  >
                    <h4>#{invoice.id}</h4>
                    <span style={{ color: "grey" }}>{invoice.dueDate}</span>
                    <p style={{ color: "grey" }}>{invoice.to}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "50%",
                    }}
                  >
                    <h4>{invoice.price}💲</h4>
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

                    <NavLink
                      style={{ listStyleType: "none", textDecoration: "none" }}
                      to="/ViewInvoice"
                      onClick={function () {
                        setLanguagetoLocalStorage(invoice.id);
                        console.log(setLanguagetoLocalStorage(invoice.id));
                      }}
                    >
                      ▶
                    </NavLink>
                  </div>
                </card>
              </div>
            );
          })}
        </section>
      </container>
    </main>
  );
}

export default Main;

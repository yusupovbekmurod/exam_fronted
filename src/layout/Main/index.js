import "./style.css";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <container className="container">
        <section className="header">
          <div>
            <h1>Invoices</h1>
            <p>There are 7 total invoices</p>
          </div>
          <div className="invoices">
            <form action="#">
              <label for="">Filter by status</label>
              <select>
                <option> All</option>
                <option> Paid</option>
                <option>Unpaid</option>
              </select>
            </form>
            <button>
              <span>
                <b>+</b>
              </span>
              <b> New Invoice</b>
            </button>
          </div>
        </section>
        <section className="wrap">
          <card className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <h4>card_title</h4>
              <span style={{ color: "grey" }}>date_card</span>
              <p style={{ color: "grey" }}>card_description</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50%",
              }}
            >
              <h4>card_price</h4>
              <span>card_theme</span>

              <NavLink to="/ViewInvoice">
               +
              </NavLink>
            </div>
          </card>

          <card className="card">
            <p>2</p>
          </card>
        </section>
      </container>
    
    </main>
  );
}

export default Main;

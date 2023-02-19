import "./App.css";
import Main from "./layout/Main";
import NotFound from "./layout/NotFound";
import ViewInvoice from "./layout/ViewInvoice";
import AddInvoice from "./layout/AddInvoice";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const oldStyle = {
    background: "#fff",
    color: "#000",
    
    icon:'☀'
  };

  const newStyle = {
    background: "#141625",
    color: "#fff",
    
    icon:'🌜'
  };

  const [style, setStyle] = useState(oldStyle);

  const modeClick = () => {
    setStyle(style === oldStyle ? newStyle  : oldStyle);
  };

  return (
    <div className="App" style={style}>
      <section className="section">
        <img src="#" alt="logo" />
        <div className="mode" onClick={modeClick}>
          <button className="butn">{style.icon}</button>
        </div>
        <div className="userPng">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png"
            alt="akani_rasmi"
          />
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/viewInvoice" element={<ViewInvoice />} />
        <Route path="/addInvoice" element={<AddInvoice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Main from "./layout/Main";
import NotFound from "./layout/NotFound";
import ViewInvoice from "./layout/ViewInvoice";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddInvoice from "./layout/AddInvoice";
import logo from "./images/logo.png"

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);

  const oldStyle = {
    background: "#fff",
    color: "#000",

    label: "#000",

    icon: "🌜",
  };

  const newStyle = {
    background: "#141625",
    color: "#fff",
    label: "#fff",

    icon: "☀",
  };

  const [style, setStyle] = useState(oldStyle);

  const modeClick = () => {
    setStyle(style === oldStyle ? newStyle : oldStyle);
  };

  return (
    <div className="App" style={style}>
      <section className="section">
        <img src={logo} alt="logo" />
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
        <Route path="/viewInvoice" element={<Login/>} />
        <Route path="/login" element={<ViewInvoice/>} />
        <Route path="/addInvoice" element={<AddInvoice/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

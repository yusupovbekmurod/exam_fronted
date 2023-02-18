import './App.css';
import Main from "./layout/Main";
import NotFound from './layout/NotFound';
import ViewInvoice from './layout/ViewInvoice';
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <section className="section">1</section>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/viewInvoice" element={<ViewInvoice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

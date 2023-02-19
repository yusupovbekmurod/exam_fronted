import { useEffect, useState } from "react";
import { getLanguageFromLocalStorage } from "../store";
import "./style.css";

function ViewInvoice() {
  const [lang, setLang] = useState(getLanguageFromLocalStorage());

  useEffect(() => {
    const idNumber = getLanguageFromLocalStorage();
  }, []);

  //   setLanguagetoLocalStorage(e.target.value);
  //   setLang(e.target.value);

  //   <select onChange={handSelect} value={lang}></select>
  // lokal storage ga yozildi dizaynni qilib to'g'irlashing kerak
  return <div className="view"></div>;
}

export default ViewInvoice;

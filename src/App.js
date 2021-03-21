import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className='app'>
      <h1>Translation app</h1>
      <button onClick={() => handleClick("en")}>English</button>
      <button onClick={() => handleClick("ko")}>Korean</button>
      <button onClick={() => handleClick("chi")}>Chinese</button>
      <p>{t("fruit.1")}</p>
      <p>{t("car.2")}</p>
    </div>
  );
}

export default App;

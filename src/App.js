import { React, useState } from "react";
import "./App.css";
import "./styles.css";
import axios from "axios";

function App() {
  const [advices, setAdvices] = useState(
    "Hard work beats talent when talent doesn’t work hard."
  );

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((responce) => {
        const { advice } = responce.data.slip;
        setAdvices(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="backImg">
        <div className="textSection">
          <h2 className="textcenter">{advices}</h2>
          <div className="button">
          <button className="btn-submit" onClick={fetchAdvice}>
          submit
          </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;

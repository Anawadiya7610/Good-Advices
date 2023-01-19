import { React, useState } from "react";
import "./App.css";
import "./styles.css";
import axios from "axios";

function App() {
  const [advices, setAdvices] = useState("Hard work beats talent when talent doesn’t work hard.");

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
        <h1 className="textcenter">{advices}</h1>
        <button className="btn-submit" onClick={fetchAdvice}>submit</button>
      </div>
    </div>
  );
}

export default App;

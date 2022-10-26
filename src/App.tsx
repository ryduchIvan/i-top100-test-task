import { ApiData, Currencies, Rates } from "./type";
import axios from "axios";
import { useState, useEffect } from "react";
import { URL } from "./api";
//Components
import { Header } from "./components/header/Header";
import { CurrencyInput } from "./components/currecnyInput/CurrencyInput";
import { Container } from "react-bootstrap";
import {SwitchButton} from "./components/switchButton/SwitchButton";
//CSS
import "./app.scss";
import { Footer } from "./components/footer/Footer";
//Icons
import Preload from "./assets/img/preload.svg";
function App() {

  const [rates, setRates] = useState<Rates>();
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [currecny1, setCurrecny1] = useState<Currencies>("USD");
  const [currecny2, setCurrecny2] = useState<Currencies>("UAH");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios.get(URL, {
      headers: {
        "apikey": "1pekBQtAgZHhT0us3NnOfJE8YL3ANlbT",
      }
    })
      .then((reponse) => {
        const data: ApiData = reponse.data;
        setRates(data.rates);
        setStatus("received");
      })
  }, []);

  const format = (amount: number) =>{
    return +amount.toFixed(4);
  }
  const handleAmount1 = (amount: number) => {
    setAmount1(amount);
    if (rates) {
      setAmount2(format(amount * rates[currecny2] / rates[currecny1])); 
    }
  }
  const handleAmount2 = (amount: number) => {
    setAmount2(amount);
    if (rates) {
      setAmount1(format(amount * rates[currecny1] / rates[currecny2]))
    }
  }
  const handelCurrency1 = (value: Currencies) => {
    setCurrecny1(value)
    if(rates){
      setAmount2(format(amount1 * rates[currecny2] / rates[value]));
    }
  }
  const handelCurrency2 = (value: Currencies) => {
    setCurrecny2(value);
    if(rates){
      setAmount1(format(amount1 * rates[currecny2] / rates[value]));
    }
  }
  const switchCurrency = () =>{
    handelCurrency1(currecny2);
    handelCurrency2(currecny1);
  }
  return (
    <div className="wrapper">
      <Header USD={rates?.USD} EUR={rates?.EUR} />
      <main className="main">
        <Container fluid="sm">
          <div className="main__fields">
            {
              status === "loading" && <img src={Preload} alt="preload"/>
            }
            {
              status === "received" && <>
                              <h3 className="main__title">
                Конвертер валют
                <img src="https://cdn.privat24.ua/icons/file/ServiceCurrency.svg" alt="" className="main__title-img" />
              </h3>
            <CurrencyInput
              currencies={rates && Object.keys(rates)}
              value={amount1}
              handleAmount={handleAmount1}
              handleCurrency={handelCurrency1}
              defaultCurrency={currecny1}
            />
            <div className="main__switch-line">
              <SwitchButton switchCurrency={switchCurrency}/>
            </div>
            <CurrencyInput
              currencies={rates && Object.keys(rates)}
              value={amount2}
              handleAmount={handleAmount2}
              handleCurrency={handelCurrency2}
              defaultCurrency={currecny2}
            />
              </>
            }
          </div>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

import { ApiData, Currencies, Rates } from "./type";
import axios from "axios";
import { useState, useEffect } from "react";
import { URL } from "./api";
//Components
import { Header } from "./components/header/Header";
import { CurrencyInput } from "./components/currecnyInput/CurrencyInput";
import { Container } from "react-bootstrap";
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.scss";
import { Footer } from "./components/footer/Footer";
function App() {
  const [rates, setRates] = useState<Rates>();
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [currecny1, setCurrecny1] = useState<Currencies>("UAH");
  const [currecny2, setCurrecny2] = useState<Currencies>("UAH");
  useEffect(() => {
    axios.get(URL, {
      headers: {
        "apikey": "Az7wloV5WI1mz3g9kvLj29cdD0rMHnyG",
      }
    })
      .then((reponse) => {
        const data: ApiData = reponse.data;
        setRates(data.rates);
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
      setAmount1(amount * rates[currecny1] / rates[currecny2])
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
  return (
    <div className="wrapper">
      <Header USD={rates?.USD} EUR={rates?.EUR} />
      <main className="main">
        <Container fluid="sm">
          <div className="main__fields">
            <CurrencyInput
              currencies={rates && Object.keys(rates)}
              value={amount1}
              handleAmount={handleAmount1}
              handleCurrency={handelCurrency1}
            />
            <CurrencyInput
              currencies={rates && Object.keys(rates)}
              value={amount2}
              handleAmount={handleAmount2}
              handleCurrency={handelCurrency2}
            />
          </div>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

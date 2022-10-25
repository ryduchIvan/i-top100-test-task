import { ApiData, Rates } from "./type";
import axios from "axios";
import {useState, useEffect} from "react";
import {URL} from "./api";
import {Header} from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.scss";
import { Container } from "react-bootstrap";
function App() {
  const [rates, setRates] = useState<Rates>();

  useEffect(() =>{
    axios.get(URL, {
      headers: {
        "apikey": "b3s9SrfPhfdRIAjLmv07nM00ogpYufET"
      }
    })
    .then((reponse) => {
      const data: ApiData = reponse.data;
      setRates(data.rates);
    })
  }, []);
  return (
    <div className="wrapper">
      <Header USD={rates?.USD} EUR={rates?.EUR}/>
      <main className="main">
        <Container fluid="sm">
          
        </Container>
      </main>
    </div>
  );
}

export default App;

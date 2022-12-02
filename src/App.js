import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NormalizeStyles } from "./shared/NormalizeStyles";

import Home from "./screens/Home";
import {Login} from "./screens/Login";

import Axios from 'axios';
import { configure } from 'axios-hooks';
import { Header } from "./common-components/Header/Header";
import { Footer } from "./common-components/Footer/Footer";


const axios = Axios.create({
	baseURL: `${process.env.REACT_APP_SAUDE_E_PONTO_API_BASE_URL}`,
  });
configure({ axios });

function App() {
  return (
    <>

      <NormalizeStyles />
      <Header />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="*" element={<>No Match</>} />
          </Routes>
        </BrowserRouter>
        <Footer />
        
    </>
  );
}

export default App;

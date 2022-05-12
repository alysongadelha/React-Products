import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

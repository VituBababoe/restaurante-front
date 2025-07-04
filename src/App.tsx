import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./estilos/Home.css";
import "./estilos/DetalhesPratos.css";
import Home from "./componentes/Home";
import DetalhesPrato from "./componentes/DetalhesPratos";
import FormularioCardapio from "./componentes/FormularioCardapio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioCardapio />} /> 
      </Routes>
    </Router>
  );
}

export default App;
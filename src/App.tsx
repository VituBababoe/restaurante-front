import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./estilos/Home.css";
import "./estilos/DetalhesPratos.css";
import Home from "./componentes/Home";
import DetalhesPrato from "./componentes/DetalhesPratos";
import FormularioCardapio from "./componentes/FormularioCardapio";
import FormularioEditar from "./componentes/FormuladoEditar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioCardapio />} /> 
        <Route path="/editar-prato/:id" element={<FormularioEditar />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import './App.css';
import Header from './componentes/Layout/Header';
import Footer from './componentes/Layout/Footer';
import Nav from './componentes/Layout/Nav';
import Aside from './componentes/Layout/Aside';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from './Pages/HomePages';
import ExperienciasPage from './Pages/ExperienciasPage';
import ConsejosPage from './Pages/ConsejosPage';
import SumatePage from './Pages/SumatePage';

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Experiencias" element={<ExperienciasPage/>}/>
      <Route path="/Consejos" element={<ConsejosPage/>}/>
      <Route path="/Sumate" element={<SumatePage/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;

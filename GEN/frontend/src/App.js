import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import PresentacionPage from './pages/PresentacionPage';
import ProductosPage from './pages/ProductosPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" exact element = {<HomePage />} />
        <Route path="/contacto" exact element = {<ContactoPage />} />
        <Route path="/novedades" exact element = {<NovedadesPage />} />
        <Route path="/presentacion" exact element = {<PresentacionPage />} />
        <Route path="/productos" exact element = {<ProductosPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

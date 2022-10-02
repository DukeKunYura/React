import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactsPage from './components/ContactsPage/ContactsPage'
import './css/style.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<MainPage />} />
        <Route path="/catalog.html" element={<CatalogPage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/contacts.html" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

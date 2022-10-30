import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import CatalogPage from './components/Pages/CatalogPage/CatalogPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ContactsPage from './components/Pages/ContactsPage/ContactsPage';
import NotFound from './components/Pages/NotFound/NotFound';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import PushcartPage from './components/Pages/PushcartPage/PushcartPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog.html" element={<CatalogPage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/contacts.html" element={<ContactsPage />} />
        <Route path="/cart.html" element={<PushcartPage />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

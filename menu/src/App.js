import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage'

/**
 * Компонент осуществляет маршрутизацию используя компоненты библиотеки React Router
 */
export default function App() {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
}

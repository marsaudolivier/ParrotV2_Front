import { Routes, Route } from 'react-router-dom';

import VentesPage from '/src/Pages/VentesPage';
import MentionsPage from '../Pages/MentionsPage';
import LoginPage from '/src/Pages/LoginPage';
import AdminPage from '/src/Pages/AdminPage';
import EmployePage from '/src/Pages/EmployePage';
import IndexPage from '/src/Pages/IndexPage';
import CookiePage from '/src/Pages/CookiePage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/ventes" element={<VentesPage />} />
        <Route path="/mentions" element={<MentionsPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employe" element={<EmployePage />} /> 
    </Routes>
       
    );
  };
  
  export default AppRoutes;
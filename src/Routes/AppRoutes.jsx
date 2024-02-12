import { Routes, Route } from 'react-router-dom';

import VentesPage from '../Pages/VentesPage';
import MentionsPage from '../Pages/MentionsPage';
import LoginPage from '../Pages/LoginPage';
import AdminPage from '../Pages/AdminPage';
import EmployePage from '../Pages/EmployePage';
import IndexPage from '../Pages/IndexPage';
import CookiePage from '../Pages/CookiePage'



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
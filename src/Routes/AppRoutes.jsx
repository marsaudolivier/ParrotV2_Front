import { Routes, Route } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage'
import VentesPage from '../Pages/VentesPage';
import MentionsPage from '../Pages/MentionsPage';
import CookiePage from '../Pages/CookiePage';
import LoginPage from '../Pages/LoginPage';
import AdminPage from '../Pages/AdminPage';
import EmployePage from '../Pages/EmployePage';
import IndexPage from '../Pages/IndexPage';

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
        <Route path="*" element={<ErrorPage />} />
    </Routes>
       
    );
  };
  
  export default AppRoutes;
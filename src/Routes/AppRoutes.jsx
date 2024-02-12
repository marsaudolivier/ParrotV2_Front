import { Routes, Route } from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage'
import VentesPage from '../pages/VentesPage';
import MentionsPage from '../pages/MentionsPage';
import CookiePage from '../pages/CookiePage';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import EmployePage from '../pages/EmployePage';
import IndexPage from '../pages/IndexPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Ventes" element={<VentesPage />} />
        <Route path="/Mentions" element={<MentionsPage />} />
        <Route path="/Cookie" element={<CookiePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Employe" element={<EmployePage />} /> 
        <Route path="*" element={<ErrorPage />} />
    </Routes>
       
    );
  };
  
  export default AppRoutes;
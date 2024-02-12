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
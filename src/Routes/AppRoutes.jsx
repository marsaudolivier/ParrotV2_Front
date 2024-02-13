import { Routes, Route } from 'react-router-dom';

import VentesPage from '/src/Pages/VentesPage';
import MentionsPage from '../Pages/MentionsPage';
import LoginPage from '../Pages/LoginPage';
import AdminPage from '../Pages/Admin/AdminPage';
import EmployePage from '../Pages/employe/EmployePage';
import IndexPage from '../Pages/IndexPage';
import CookiePage from '../Pages/CookiePage'
import AdminUserPage from '../Pages/Admin/User/AdminUserPage';
import AdminUserAddPage from '../Pages/Admin/User/AdminUserAddPage';
import AdminUserShowPage from '../Pages/Admin/User/AdminUserShowPage';
import AdminUserShowUpdatePage from '../Pages/Admin/User/AdminUserShowUpdatePage';
import AdminUserDeletePage from '../Pages/Admin/User/AdminUserDeletePage';
import AdminAvisPage from '../Pages/Admin/Avis/AdminAvisPage';
import AdminAvisAddPage from '../Pages/Admin/Avis/AdminAvisAddPage';
import AdminAvisShowPage from '../Pages/Admin/Avis/AdminAvisShowPage';
import AdminAvisShowUpdatePage from '../Pages/Admin/Avis/AdminAvisShowUpdatePage';
import AdminAvisDeletePage from '../Pages/Admin/Avis/AdminAvisDeletePage';
import AdminHorairePage from '../Pages/Admin/Horaire/AdminHorairePage';
import AdminHoraireShowPage from '../Pages/Admin/Horaire/AdminHoraireShowPage';
import AdminHoraireShowUpdatePage from '../Pages/Admin/Horaire/AdminHoraireShowUpdatePage';





const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/ventes" element={<VentesPage />} />
        <Route path="/mentions" element={<MentionsPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Route admin */}
        <Route path="/admin" element={<AdminPage />} ></Route>
        <Route path="/admin/user" element={<AdminUserPage />}/>
        <Route path="/admin/user/add" element={<AdminUserAddPage />} /> 
        <Route path="/admin/user/show" element={<AdminUserShowPage />} /> 
        <Route path="/admin/user/show/:id" element={<AdminUserShowUpdatePage />} />
        <Route path="/admin/user/delete/:id" element={<AdminUserDeletePage />} />

        <Route path="/admin/avis" element={<AdminAvisPage />} />
        <Route path="/admin/avis/add" element={<AdminAvisAddPage />} />
        <Route path="/admin/avis/show" element={<AdminAvisShowPage />} />
        <Route path="/admin/avis/show/:id" element={<AdminAvisShowUpdatePage />} />
        <Route path="/admin/avis/delete/:id" element={<AdminAvisDeletePage />} />

        <Route path="/admin/horaires" element={<AdminHorairePage />} />
        <Route path="/admin/horaires/show" element={<AdminHoraireShowPage />} /> 
        <Route path="/admin/horaires/show/:id" element={<AdminHoraireShowUpdatePage />} />


        <Route path="/employe" element={<EmployePage />} /> 
    </Routes>
       
    );
  };
  
  export default AppRoutes;
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

import AdminServicesPage from '../Pages/Admin/Services/AdminServicesPage';
import AdminServicesShowPage from '../Pages/Admin/Services/AdminServicesShowPage';
import AdminServicesAddPage from '../Pages/Admin/Services/AdminServicesAddPage';
import AdminServicesDeletePage from '../Pages/Admin/Services/AdminServicesDeletePage';
import AdminServicesShowUpdatePage from '../Pages/Admin/Services/AdminServicesShowUpdatePage';

import AdminContactPage from '../Pages/Admin/Contact/AdminContactPage';
import AdminContactShowPage from '../Pages/Admin/Contact/AdminContactShowPage';
import AdminContactDeletePage from '../Pages/Admin/Contact/AdminContactDeletePage';

import AdminCarsPage from '../Pages/Admin/Cars/AdminCarsPage';
import AdminCarsShowPage from '../Pages/Admin/Cars/AdminCarsShowPage';
import AdminCarsDeletePage from '../Pages/Admin/Cars/AdminCarsDeletePage';
import AdminCarsAddPage from '../Pages/Admin/Cars/AdminCarsAddPage';






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

        <Route path="/admin/services" element={<AdminServicesPage />} />
        <Route path="/admin/services/show" element={<AdminServicesShowPage />} />
        <Route path="/admin/services/add" element={<AdminServicesAddPage />} />
        <Route path="/admin/services/delete/:id" element={<AdminServicesDeletePage />} />
        <Route path="/admin/services/show/:id" element={<AdminServicesShowUpdatePage />} />

        <Route path="/admin/contact" element={<AdminContactPage />} />
        <Route path="/admin/contact/show" element={<AdminContactShowPage />} />
        <Route path="/admin/contact/delete/:id" element={<AdminContactDeletePage />} />

        <Route path="/admin/cars" element={<AdminCarsPage />} />
        <Route path="/admin/cars/show" element={<AdminCarsShowPage />} />
        <Route path="/admin/cars/delete/:id" element={<AdminCarsDeletePage />} />
        <Route path="/admin/cars/add" element={<AdminCarsAddPage />} />

        <Route path="/employe" element={<EmployePage />} /> 



        

    </Routes>
       
    );
  };
  
  export default AppRoutes;
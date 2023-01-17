import React from 'react'
import {Routes, Route} from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import Home from '../pages/Home';
import UserDashboard from '../pages/UserDashboard';
import UserLogin from '../pages/UserLogin';
import UserRegistration from '../pages/UserRegistration';

const AllRoutes = () => {
  return (
    <div><Routes><Route path='/' element={<Home/>}/>
    <Route path='/admin-login' element={<AdminLogin/>}/>
     <Route path='/user-login' element={<UserLogin/>}/> 
     <Route path='/user-signup' element={<UserRegistration/>}/> 
     <Route path='/admin-dashboard' element={<AdminDashboard/>}/> 
     <Route path='/user-dashboard' element={<UserDashboard/>}/> 
    </Routes>
      </div>
  )
}

export default AllRoutes
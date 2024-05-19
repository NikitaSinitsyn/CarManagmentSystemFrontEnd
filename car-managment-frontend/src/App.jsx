import React from 'react';
import './App.css';
import Vignette from './Components/Vignette';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateVignetteComponent from './Components/CreateVignetteComponent';
import { Home } from './Components/Home';
import UpdateVigetteComponent from './Components/UpdateVigetteComponent';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CaskoComponent from './Components/CaskoComponent';
import CreateCaskoComponent from './Components/CreateCaskoComponent';
import UpdateCaskoComponent from './Components/UpdateCaskoComponent';
import CreateCivilComponent from './Components/CreateCivilComponent';
import UpdateCivilComponent from './Components/UpdateCivilComponent';
import CivilComponent from './Components/CivilComponent';
import TechnicalInspectationComponent from './Components/TechnicalInspectationComponent';
import CreateTechnicalInspectationComponent from './Components/CreateTechnicalInspectationComponent';
import UpdateTechnicalInspectationComponent from './Components/UpdateTechnicalInspectationComponent';
import RepairComponent from './Components/RepairComponent';
import CreateRepairComponent from './Components/CreateRepairComponent';
import UpdateRepairComponent from './Components/UpdateRepairComponent';
import TireComponent from './Components/TireComponent';
import CreateTireComponent from './Components/CreateTireComponent';
import UpdateTireComponent from './Components/UpdateTireComponent';
import EmployeeComponent from './Components/EmployeeComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import CarComponent from './Components/CarComponent';
import CreateCarComponent from './Components/CreateCarComponent';
import UpdateCarComponent from './Components/UpdateCarComponent';
import ViewCarComponent from './Components/ViewCarComponent';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/vignettes' element={<Vignette />} />
        <Route path='/add-vignette' element={<CreateVignetteComponent />} />
        <Route path='/update-vignette/:id' element={<UpdateVigetteComponent />} />
        <Route path='/caskos' element={<CaskoComponent />} />
        <Route path='/add-casko' element={<CreateCaskoComponent />} />
        <Route path='/update-casko/:id' element={<UpdateCaskoComponent />} />
        <Route path='/civils' element={<CivilComponent />} />
        <Route path='/add-civil' element={<CreateCivilComponent />} />
        <Route path='/update-civil/:id' element={<UpdateCivilComponent />} />
        <Route path='/technicals' element={<TechnicalInspectationComponent />} />
        <Route path='/add-technical' element={<CreateTechnicalInspectationComponent />} />
        <Route path='/update-technical/:id' element={<UpdateTechnicalInspectationComponent />} />
        <Route path='/repairs' element={<RepairComponent />} />
        <Route path='/add-repair' element={<CreateRepairComponent />} />
        <Route path='/update-repair/:id' element={<UpdateRepairComponent />} />
        <Route path='/tires' element={<TireComponent />} />
        <Route path='/add-tire' element={<CreateTireComponent />} />
        <Route path='/update-tire/:id' element={<UpdateTireComponent />} />
        <Route path='/employees' element={<EmployeeComponent />} />
        <Route path='/add-employee' element={<CreateEmployeeComponent />} />
        <Route path='/update-employee/:id' element={<UpdateEmployeeComponent />} />
        <Route path='/cars' element={<CarComponent />} />
        <Route path='/add-car' element={<CreateCarComponent />} />
        <Route path='/update-car/:id' element={<UpdateCarComponent />} />
        <Route path='/view-car/:id' element={<ViewCarComponent />} />


      </Routes>
      <ToastContainer />

    </Router>
  );
}

export default App;
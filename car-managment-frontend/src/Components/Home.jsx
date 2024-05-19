import React from 'react';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';

function Home() {
  return (


    <>
      
      <style>{`
        html, body {
          background-color: #161718; 
          
        }
       
      `}</style>
      <div style={{ position: 'relative', marginTop: '50px', textAlign: 'center' }}>
        <img src="images/bg.png" alt="Car Management" style={{  width: '70%', height: '400px', display: 'block', margin: '0 auto' }} />
        <h1 style={{ color: 'white', position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Welcome To Car Management System</h1>
      </div>

      <div className="container" style={{ marginTop: '50px', position: 'relative' }}>
        <div className="row">
          <div className="col-md-3 mb-4 position-relative">
            <a href="/employees" className="text-center d-block position-relative">
              <img src="images/employee.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Employees</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <a href="/cars" className="text-center d-block position-relative">
              <img src="images/cars.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Cars</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <a href="/tires" className="text-center d-block position-relative">
              <img src="images/tires.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Tires</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <a href="/repairs" className="text-center d-block position-relative">
              <img src="images/repair.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Repairs</h2>
            </a>
          </div>
        </div>
        <div className="row">
          {/* Вторая строка с еще 4 элементами */}
          <div className="col-md-3 mb-4 position-relative">
            <a href="/technicals" className="text-center d-block position-relative">
              <img src="images/technical.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Technical Inspections</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <a href="/caskos" className="text-center d-block position-relative">
              <img src="images/casko.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Caskos</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <a href="/civils" className="text-center d-block position-relative">
              <img src="images/civil.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Civil Insurances</h2>
            </a>
          </div>
          <div className="col-md-3 mb-4 position-relative">
            <Link to="/vignettes" className="text-center d-block position-relative">
              <img src="images/vignette.png" alt="Image #" style={{ width: '100%', height: '250px' }} />
              <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: '1' }}>Vignettes</h2>
            </Link>
          </div>
          
        </div>
        
      </div>

      <FooterComponent />

    </>





  );
}

export { Home };
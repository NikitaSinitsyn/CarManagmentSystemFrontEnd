import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCarById } from '../services/CarService';

function ViewCarComponent() {
  const [carData, setCarData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCarById(id)
      .then(res => {
        setCarData(res.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  const cancel = () => {
    navigate('/cars');
  };

  return (

    <div style={{ backgroundColor: '#292B2C', color: 'white', padding: '20px' }}>

      <div>
        <button className='btn btn-danger' onClick={cancel} style={{ position: 'absolute', right: '20px', top: '80px', fontSize: '20px' }}>Cancel</button>
        <h1 className='text-center' style={{ marginTop: '50px', color: '#00D8FF' }}>View Car Details</h1>

      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
            <div className='card-body'>
              <div className='row'>
                <h3 style={{ marginBottom: '20px' }}>Car: </h3>
                <div className='col-md-4'>
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>Number:</strong> {carData.number}</p>
                  <p><strong>Brand:</strong> {carData.brand}</p>
                  <p><strong>SAP number:</strong> {carData.sap}</p>
                  <p><strong>Inventory Number:</strong> {carData.inventoryNumber}</p>
                  <p><strong>Amount:</strong> {carData.amount}</p>
                </div>
                <div className='col-md-4'>
                  <p><strong>Car Status:</strong> {carData.carStatus}</p>
                  <p><strong>EnvironmentalCategory:</strong> {carData.environmentalCategory}</p>
                  <p><strong>Chassi:</strong> {carData.chassi}</p>
                  <p><strong>Mileage:</strong> {carData.mileage}</p>
                  <p><strong>City:</strong> {carData.city}</p>
                  <p><strong>kW:</strong> {carData.kW}</p>
                </div>
                <div className='col-md-4'>
                  <p><strong>Activation Date:</strong> {carData.activationDate}</p>
                  <p><strong>End Date:</strong> {carData.endDate}</p>
                  <p><strong>Car Used From Date:</strong> {carData.carUsedFromDate}</p>
                  <p><strong>Car Used To Date:</strong> {carData.carUsedToDate}</p>
                  <p><strong>Sales Value:</strong> {carData.salesValue}</p>
                  <p><strong>Selling Price:</strong> {carData.sellingPrice}</p>
                  <p><strong>Employee ID:</strong> {carData.employee ? carData.employee.id : ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          {/* Employee */}
          {carData.employeeDTO && (
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <div className='row'>
                  <h3 style={{ marginBottom: '20px' }}>Employee: </h3>
                  <div className='col-md-4'>
                    <p><strong>Employee Id:</strong> {carData.employeeDTO.id}</p>
                    <p><strong>Employee Name:</strong> {carData.employeeDTO.name}</p>
                    <p><strong>Employee Code:</strong> {carData.employeeDTO.code}</p>
                    <p><strong>Cost Centet:</strong> {carData.employeeDTO.costCenter}</p>

                  </div>

                  <div className='col-md-4'>
                    <p><strong>CC Name:</strong> {carData.employeeDTO.ccname}</p>
                    <p><strong>Position:</strong> {carData.employeeDTO.position}</p>
                    <p><strong>License Number:</strong> {carData.employeeDTO.licenseNumber}</p>
                    <p><strong>License Expiration:</strong> {carData.employeeDTO.licenseExpirationDate}</p>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        {carData.caskoDTO && (
          <div className='col-md-6'>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <div className='row'>
                  <h3 style={{ marginBottom: '20px' }}>CASKO: </h3>
                  <div className='col-md-4'>
                    <p><strong>CASKO Id:</strong> {carData.caskoDTO.id}</p>
                    <p><strong>Price:</strong> {carData.caskoDTO.price}</p>

                  </div>

                  <div className='col-md-4'>
                    <p><strong>Purchase Date:</strong> {carData.caskoDTO.purchaseDate}</p>
                    <p><strong>Expiration Date:</strong> {carData.caskoDTO.expirationDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {carData.civilInsuranceDTO && (
          <div className='col-md-6'>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <div className='row'>
                  <h3 style={{ marginBottom: '20px' }}>Civil Insurance: </h3>
                  <div className='col-md-4'>
                    <p><strong>Civil Insurance Id:</strong> {carData.civilInsuranceDTO.id}</p>
                    <p><strong>Price:</strong> {carData.civilInsuranceDTO.price}</p>

                  </div>

                  <div className='col-md-4'>
                    <p><strong>Purchase Date:</strong> {carData.civilInsuranceDTO.purchaseDate}</p>
                    <p><strong>Expiration Date:</strong> {carData.civilInsuranceDTO.expirationDate}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      <div className='row'>
        {carData.technicalInspectionDTO && (
          <div className='col-md-6'>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <div className='row'>
                  <h3 style={{ marginBottom: '20px' }}>Technical Inspection: </h3>
                  <div className='col-md-4'>
                    <p><strong>Technical Inspection Id:</strong> {carData.technicalInspectionDTO.id}</p>
                    <p><strong>Price:</strong> {carData.technicalInspectionDTO.price}</p>

                  </div>

                  <div className='col-md-4'>
                    <p><strong>Date Passed:</strong> {carData.technicalInspectionDTO.datePassed}</p>
                    <p><strong>Next Inspection:</strong> {carData.technicalInspectionDTO.dateNextInspection}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {carData.vignetteDTO && (
          <div className='col-md-6'>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <div className='row'>
                  <h3 style={{ marginBottom: '20px' }}>Vignette: </h3>
                  <div className='col-md-4'>
                    <p><strong>Vignette Id:</strong> {carData.vignetteDTO.id}</p>
                    <p><strong>Price:</strong> {carData.vignetteDTO.price}</p>

                  </div>

                  <div className='col-md-4'>
                    <p><strong>Purchase Date:</strong> {carData.vignetteDTO.purchaseDate}</p>
                    <p><strong>Expiration Date:</strong> {carData.vignetteDTO.expirationDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <h2 className='text-center' style={{ marginTop: '50px', fontWeight: 'bold', color: '#00D8FF' }}>Repairs:</h2>
      <div className='row'>
        {carData.repairDTOList && carData.repairDTOList.map(repair => (
          <div className='col-md-6' key={repair.id}>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <h3 style={{ marginBottom: '20px' }}>Repair: </h3>
                <p><strong>ID:</strong> {repair.id}</p>
                <p><strong>Price:</strong> {repair.price}</p>
                <p><strong>Description:</strong> {repair.description}</p>

              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className='text-center' style={{ marginTop: '50px', fontWeight: 'bold', color: '#00D8FF' }}>Summer Tires: </h2>
      <h3>Number Of Summer Tires: {carData.numberOfSummerTires}</h3>
      {/* summerTireDTOList */}
      <div className='row'>
        {carData.summerTireDTOList && carData.summerTireDTOList.map(tire => (
          <div className='col-md-6' key={tire.id}>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <h3 style={{ marginBottom: '20px' }}>Summer Tire: </h3>
                <div className='row'>
                  <div className='col-md-4'>
                    <p><strong>ID:</strong> {tire.id}</p>
                    <p><strong>Purchase Date:</strong> {tire.purchaseDate}</p>
                    <p><strong>Price:</strong> {tire.price}</p>
                    <p><strong>Supplier:</strong> {tire.supplier}</p>
                  </div>
                  <div className='col-md-4'>
                    <p><strong>Season:</strong> {tire.season}</p>
                    <p><strong>Storage Location:</strong> {tire.storageLocation}</p>
                    <p><strong>Size:</strong> {tire.size}</p>
                    <p><strong>Change Date:</strong> {tire.changeDate}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className='text-center' style={{ marginTop: '50px', fontWeight: 'bold', color: '#00D8FF' }}>Winter Tires: </h2>
      <h3>Number Of Summer Tires: {carData.numberOfWinterTires}</h3>
      {/* winterTireDTOList */}
      <div className='row'>
        {carData.winterTireDTOList && carData.winterTireDTOList.map(tire => (
          <div className='col-md-6' key={tire.id}>
            <div className='card' style={{ marginTop: '20px', backgroundColor: '#F0EFEF', fontSize: '20px' }}>
              <div className='card-body'>
                <h3 style={{ marginBottom: '20px' }}>Winter Tire: </h3>
                <div className='row'>
                  <div className='col-md-4'>
                    <p><strong>ID:</strong> {tire.id}</p>
                    <p><strong>Purchase Date:</strong> {tire.purchaseDate}</p>
                    <p><strong>Price:</strong> {tire.price}</p>
                    <p><strong>Supplier:</strong> {tire.supplier}</p>
                  </div>
                  <div className='col-md-4'>
                    <p><strong>Season:</strong> {tire.season}</p>
                    <p><strong>Storage Location:</strong> {tire.storageLocation}</p>
                    <p><strong>Size:</strong> {tire.size}</p>
                    <p><strong>Change Date:</strong> {tire.changeDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ViewCarComponent;
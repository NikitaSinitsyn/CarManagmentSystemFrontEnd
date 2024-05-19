import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTire } from '../services/TireService';

const successToastOptions = {
  position: "top-center",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: "bounce",
};

const errorToastOptions = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: "bounce",
};
function CreateTireComponent() {
  const [purchaseDate, setPurchaseDate] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');
  const [season, setSeason] = useState('');
  const [size, setSize] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [changeDate, setChangeDate] = useState('');
  const [carNumber, setCarNumber] = useState('');

  const navigate = useNavigate();

  const saveTire = async (event) => {
    event.preventDefault();
    try {
      let tire = { purchaseDate, price, supplier, season, size, storageLocation, changeDate, carNumber };
      console.log('tire => ' + JSON.stringify(tire));

      await addTire(tire);
      toast.success('Tire added successfully!', successToastOptions);
      setTimeout(() => {
        navigate('/tires');
      }, 500); // Время в миллисекундах

    } catch (error) {
      console.error('Error adding Tire: ', error);
      if (error.response) {
        toast.error(error.response.data.message);
    } else if (error.request) {
        toast.error('Network error. Please try again.' , errorToastOptions);
    } else {
        toast.error('An unexpected error occurred.' , errorToastOptions);
    }
    }
  };

  const cancel = () => {
    navigate('/tires');
  };
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
      <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
        <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Add Tire</h3>
        <div className='card p-4 border rounded'>
          <form>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Purchase date:</label>
              <input
                placeholder='yyyy-mm-dd'
                name='purchaseDate'
                className='form-control'
                value={purchaseDate}
                onChange={(event) => setPurchaseDate(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Price:</label>
              <input
                placeholder='Price'
                name='price'
                className='form-control'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Supplier:</label>
              <input
                placeholder='Supplier'
                name='supplier'
                className='form-control'
                value={supplier}
                onChange={(event) => setSupplier(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Season:</label>
              <div className="select-arrow">
                <select
                  name='season'
                  className='form-control'
                  value={season}
                  onChange={(event) => setSeason(event.target.value)}
                  style={{ fontSize: '20px' }}
                >
                  <option value=''>Select season ▼</option>
                  <option value='SUMMER'>Summer</option>
                  <option value='WINTER'>Winter</option>
                </select>
                
              </div>
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Size:</label>
              <input
                placeholder='Size'
                name='size'
                className='form-control'
                value={size}
                onChange={(event) => setSize(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Storage Location:</label>
              <input
                placeholder='Storage Location'
                name='storageLocation'
                className='form-control'
                value={storageLocation}
                onChange={(event) => setStorageLocation(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Change Date:</label>
              <input
                placeholder='yyyy-mm-dd'
                name='changeDate'
                className='form-control'
                value={changeDate}
                onChange={(event) => setChangeDate(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <div className='form-group'>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Car number:</label>
              <input
                placeholder='Car number'
                name='carNumber'
                className='form-control'
                value={carNumber}
                onChange={(event) => setCarNumber(event.target.value)}
                style={{ fontSize: '20px' }}
              />
            </div>
            <button className='btn btn-success' onClick={saveTire} style={{ fontSize: '20px', marginTop: '10px' }}> Add </button>
            <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CreateTireComponent
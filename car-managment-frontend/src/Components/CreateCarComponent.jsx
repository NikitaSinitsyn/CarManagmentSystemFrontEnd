import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCar } from '../services/CarService';

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

function CreateCarComponent() {
    const [number, setNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [sap, setSAPNumber] = useState('');
    const [inventoryNumber, setInventoryNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [carStatus, setCarStatus] = useState('');
    const [kW, setKW] = useState('');
    const [environmentalCategory, setEnvironmentalCategory] = useState('');
    const [chassi, setChassi] = useState('');
    const [mileage, setMileage] = useState('');
    const [city, setCity] = useState('');
    const [activationDate, setActivationDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [carUsedFromDate, setCarUsedFromDate] = useState('');
    const [carUsedToDate, setCarUsedToDate] = useState('');
    const [salesValue, setSalesValue] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');

    const navigate = useNavigate();

    const saveCar = async (event) => {
        event.preventDefault();
        try {
            let car = { number, brand, sap, inventoryNumber, amount, carStatus, kW, environmentalCategory, chassi, mileage, city, activationDate, endDate, carUsedFromDate, carUsedToDate, salesValue, sellingPrice };
            console.log('car => ' + JSON.stringify(car));

            await addCar(car);
            toast.success('Car added successfully!', successToastOptions);
            setTimeout(() => {
                navigate('/cars');
            }, 500); // Время в миллисекундах

        } catch (error) {
            console.error('Error adding Car: ', error);
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('Network error. Please try again.' , errorToastOptions);
            } else {
                toast.error('An unexpected error occurred.', errorToastOptions);
            }
            console.error('Error adding Car: ', error);
        }
    };

    const cancel = () => {
        navigate('/cars');
    };
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
            <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
                <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Add Car</h3>
                <div className='card p-4 border rounded'>
                    <form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Number:</label>
                                    <input
                                        placeholder='Number'
                                        name='number'
                                        className='form-control'
                                        value={number}
                                        onChange={(event) => setNumber(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Brand:</label>
                                    <input
                                        placeholder='Brand'
                                        name='brand'
                                        className='form-control'
                                        value={brand}
                                        onChange={(event) => setBrand(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> SAP Number:</label>
                                    <input
                                        placeholder='SAP Number'
                                        name='sap'
                                        className='form-control'
                                        value={sap}
                                        onChange={(event) => setSAPNumber(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Inventory Number:</label>
                                    <input
                                        placeholder='Inventory Number'
                                        name='inventoryNumber'
                                        className='form-control'
                                        value={inventoryNumber}
                                        onChange={(event) => setInventoryNumber(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Amount:</label>
                                    <input
                                        placeholder='Amount'
                                        name='amount'
                                        className='form-control'
                                        value={amount}
                                        onChange={(event) => setAmount(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Car Status:</label>
                                    <div className="select-arrow">
                                        <select
                                            name='carStatus'
                                            className='form-control'
                                            value={carStatus}
                                            onChange={(event) => setCarStatus(event.target.value)}
                                            style={{ fontSize: '20px' }}
                                        >
                                            <option value=''>Select season ▼</option>
                                            <option value='IN_USE'>IN USE</option>
                                            <option value='SOLD'>SOLD</option>
                                            <option value='STOLEN'>STOLEN</option>
                                            <option value='FOR_SALE'>FOR SALE</option>
                                            <option value='NOT_APPLICABLE'>NOT APPLICABLE</option>
                                        </select>

                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> kW:</label>
                                    <input
                                        placeholder='kW'
                                        name='kW'
                                        className='form-control'
                                        value={kW}
                                        onChange={(event) => setKW(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Environmental Category:</label>
                                    <input
                                        placeholder='Environmental Category'
                                        name='environmentalCategory'
                                        className='form-control'
                                        value={environmentalCategory}
                                        onChange={(event) => setEnvironmentalCategory(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Chassi:</label>
                                    <input
                                        placeholder='Chassi'
                                        name='chassi'
                                        className='form-control'
                                        value={chassi}
                                        onChange={(event) => setChassi(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Mileage:</label>
                                    <input
                                        placeholder='Mileage'
                                        name='mileage'
                                        className='form-control'
                                        value={mileage}
                                        onChange={(event) => setMileage(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> City:</label>
                                    <input
                                        placeholder='City'
                                        name='city'
                                        className='form-control'
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Activation Date:</label>
                                    <input
                                        placeholder='yyyy-mm-dd'
                                        name='activationDate'
                                        className='form-control'
                                        value={activationDate}
                                        onChange={(event) => setActivationDate(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> End Date:</label>
                                    <input
                                        placeholder='yyyy-mm-dd'
                                        name='endDate'
                                        className='form-control'
                                        value={endDate}
                                        onChange={(event) => setEndDate(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Car Used From Date:</label>
                                    <input
                                        placeholder='yyyy-mm-dd'
                                        name='carUsedFromDate'
                                        className='form-control'
                                        value={carUsedFromDate}
                                        onChange={(event) => setCarUsedFromDate(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Car Used To Date:</label>
                                    <input
                                        placeholder='At present'
                                        name='carUsedToDate'
                                        className='form-control'
                                        value={carUsedToDate}
                                        onChange={(event) => setCarUsedToDate(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Sales Value:</label>
                                    <input
                                        placeholder='Sales Value'
                                        name='salesValue'
                                        className='form-control'
                                        value={salesValue}
                                        onChange={(event) => setSalesValue(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Selling Price:</label>
                                    <input
                                        placeholder='Selling Price'
                                        name='sellingPrice'
                                        className='form-control'
                                        value={sellingPrice}
                                        onChange={(event) => setSellingPrice(event.target.value)}
                                        style={{ fontSize: '20px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Repeat the same structure for the remaining fields */}
                        <button className='btn btn-success' onClick={saveCar} style={{ fontSize: '20px', marginTop: '10px' }}> Add </button>
                        <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default CreateCarComponent
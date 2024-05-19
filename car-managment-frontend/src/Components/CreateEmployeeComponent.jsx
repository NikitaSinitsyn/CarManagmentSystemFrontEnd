import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEmployee } from '../services/EmployeeService';

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

function CreateEmployeeComponent() {

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [costCenter, setCostCenter] = useState('');
    const [ccname, setCCName] = useState('');
    const [position, setPosition] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseExpirationDate, setLicenseExpirationDate] = useState('');
    const [carNumbers, setCarNumbers] = useState([]);

    const navigate = useNavigate();

    const saveEmployee = async (event) => {
        event.preventDefault();
        try {
            let employee = { name, code, costCenter, ccname, position, licenseNumber, licenseExpirationDate, carNumbers };
            console.log('employee => ' + JSON.stringify(employee));

            await addEmployee(employee);
            toast.success('Employee Insurance added successfully!', successToastOptions);
            setTimeout(() => {
                navigate('/employees');
            }, 500); // Время в миллисекундах

        } catch (error) {
            console.error('Error adding Employee Insurance: ', error);
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
        navigate('/employees');
    };
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
            <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
                <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Add Employee</h3>
                <div className='card p-4 border rounded'>
                    <form>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Name:</label>
                            <input
                                placeholder='name'
                                name='name'
                                className='form-control'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Code:</label>
                            <input
                                placeholder='code'
                                name='code'
                                className='form-control'
                                value={code}
                                onChange={(event) => setCode(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Cost Center:</label>
                            <input
                                placeholder='cost Center'
                                name='costCenter'
                                className='form-control'
                                value={costCenter}
                                onChange={(event) => setCostCenter(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> CC Name:</label>
                            <input
                                placeholder='CC Name'
                                name='ccname'
                                className='form-control'
                                value={ccname}
                                onChange={(event) => setCCName(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Position:</label>
                            <input
                                placeholder='position'
                                name='position'
                                className='form-control'
                                value={position}
                                onChange={(event) => setPosition(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> License Number:</label>
                            <input
                                placeholder='license Number'
                                name='licenseNumber'
                                className='form-control'
                                value={licenseNumber}
                                onChange={(event) => setLicenseNumber(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> License Expiration Date:</label>
                            <input
                                placeholder='yyyy-mm-dd'
                                name='licenseExpirationDate'
                                className='form-control'
                                value={licenseExpirationDate}
                                onChange={(event) => setLicenseExpirationDate(event.target.value)}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Car numbers:</label>
                            <textarea
                                placeholder='Car numbers (separated by commas)'
                                name='carNumbers'
                                className='form-control'
                                value={carNumbers}
                                onChange={(event) => setCarNumbers(event.target.value.split(/[,\s]+/))}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee} style={{ fontSize: '20px', marginTop: '10px' }}> Add </button>
                        <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateEmployeeComponent
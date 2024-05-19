import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEmployeeById, updateEmployee } from '../services/EmployeeService';

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

function UpdateEmployeeComponent() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [costCenter, setCostCenter] = useState('');
    const [ccname, setCCName] = useState('');
    const [position, setPosition] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseExpirationDate, setLicenseExpirationDate] = useState('');
    const [carNumbers, setCarNumbers] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getEmployeeById(id)
            .then(res => {
                const employee = res.data;
                setName(employee.name);
                setCode(employee.code);
                setCostCenter(employee.costCenter);
                setCCName(employee.ccname);
                setPosition(employee.position);
                setLicenseNumber(employee.licenseNumber);
                setLicenseExpirationDate(employee.licenseExpirationDate);
                setCarNumbers(employee.carNumbers);
            })
            .catch(error => console.error(error));
    }, [id]);

    const editEmployee = async (e) => {
        e.preventDefault();
        try {
            const employee = { name, code, costCenter, ccname, position, licenseNumber, licenseExpirationDate, carNumbers };
            await updateEmployee(employee, id);
            toast.success('Employee Insurance updated successfully!', successToastOptions);
            setTimeout(() => {
                navigate('/employees');
            }, 500); // Время в миллисекундах
        } catch (error) {
            console.error('Error updating Employee Insurance: ', error);
            toast.error('Failed to update Employee Insurance', errorToastOptions);
        }
    };

    const cancel = () => {
        navigate('/employees');
    };
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
            <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
                <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Update Employee</h3>
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
                                value={carNumbers.join(', ')}
                                onChange={(event) => setCarNumbers(event.target.value.split(',').map(carNumber => carNumber.trim()))}
                                style={{ fontSize: '20px' }}
                            />
                        </div>
                        <button className='btn btn-success' onClick={editEmployee} style={{ fontSize: '20px', marginTop: '10px' }}>Update</button>
                        <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UpdateEmployeeComponent
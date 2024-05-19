import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addRepair } from '../services/RepairService';

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

function CreateRepairComponent() {

    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const [carNumber, setCarNumber] = useState('');

    const navigate = useNavigate();

    const saveRepair = async (event) => {
        event.preventDefault();
        try {
            let repair = { price, description, carNumber };
            console.log('repair => ' + JSON.stringify(repair));

            await addRepair(repair);
            toast.success('Repair added successfully!', successToastOptions);
            setTimeout(() => {
                navigate('/repairs');
            }, 500); // Время в миллисекундах

        } catch (error) {
            console.error('Error adding repair: ', error);
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
        navigate('/repairs');
    };
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
            <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
                <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Add repair</h3>
                <div className='card p-4 border rounded'>
                    <form>


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
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Description:</label>
                            <textarea
                                placeholder='Description'
                                name='description'
                                className='form-control'
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                style={{ fontSize: '20px', minHeight: '200px' }}
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
                        <button className='btn btn-success' onClick={saveRepair} style={{ fontSize: '20px', marginTop: '10px' }}> Add </button>
                        <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateRepairComponent
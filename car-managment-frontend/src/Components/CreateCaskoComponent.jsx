import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCasko } from '../services/CaskoService';


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

function CreateCaskoComponent() {

    const [purchaseDate, setPurchaseDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [price, setPrice] = useState('');
    const [carNumber, setCarNumber] = useState('');

    const navigate = useNavigate();

    const saveCasko = async (event) => {
        event.preventDefault();
        try {
            let casko = { purchaseDate, expirationDate, price, carNumber };
            console.log('casko => ' + JSON.stringify(casko));

            await addCasko(casko);
            toast.success('CASKO added successfully!', successToastOptions);
            setTimeout(() => {
                navigate('/caskos');
            }, 500); // Время в миллисекундах

        } catch (error) {
            console.error('Error adding CASKO: ', error);
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('Network error. Please try again.');
            } else {
                toast.error('An unexpected error occurred.');
            }
        }
    };

    const cancel = () => {
        navigate('/caskos');
    };
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh', backgroundColor: '#161718' }}>
            <div className='col-md-6' style={{ maxWidth: '600px', width: '100%', border: '2px solid #CCC', borderRadius: '10px', padding: '20px' }}>
                <h3 className='text-center' style={{ fontSize: '32px', marginBottom: '20px', color: '#00D8FF' }}>Add CASKO</h3>
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
                            <label style={{ fontSize: '20px', fontWeight: 'bold' }}> Expiration Date:</label>
                            <input
                                placeholder='yyyy-mm-dd'
                                name='expirationDate'
                                className='form-control'
                                value={expirationDate}
                                onChange={(event) => setExpirationDate(event.target.value)}
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
                        <button className='btn btn-success' onClick={saveCasko} style={{ fontSize: '20px', marginTop: '10px' }}> Add </button>
                        <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px', fontSize: '20px', marginTop: '10px' }}>Cancel</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateCaskoComponent
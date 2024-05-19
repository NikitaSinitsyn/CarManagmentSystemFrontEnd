import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { deleteCar, listCars } from '../services/CarService';

export default function CarComponent() {
    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();


    const addCar = () => {
        navigate('/add-car');
    };

    const editCar = (id) => {
        navigate(`/update-car/${id}`);
    }

    const viewCar = (id) => {
        navigate(`/view-car/${id}`)
    }

    const removeCar = (id) => {
        deleteCar(id)
            .then(res => {
                // Фильтруем массив виньеток, оставляя только те, у которых ID не равен удаляемому ID
                const updatedCars = cars.filter(car => car.id !== id);
                // Обновляем состояние
                setCars(updatedCars);
            })
            .catch(error => console.error(error));
    }


    useEffect(() => {
        listCars()
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };

    const handleSortBy = (sortByField) => {
        let sortedData = [...cars];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'brand') {
            sortedData.sort((a, b) => {
                if (a.brand < b.brand) return -1;
                if (a.brand > b.brand) return 1;
                return 0;
            });
        } else if (sortByField === 'city') {
            sortedData.sort((a, b) => {
                if (a.city < b.city) return -1;
                if (a.city > b.city) return 1;
                return 0;
            });
        }
        setCars(sortedData);
        setSortByMenuVisible(false);
    };
  return (
    <>

    <style>{`
html, body {
  background-color: #161718; 
}
.sort-container {
  position: relative;

}

.sort-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border: 1px solid black;
  padding: 5px;
  display: ${sortByMenuVisible ? 'block' : 'none'};
}

`}</style>
    <div style={{ position: 'relative', marginTop: '40px', textAlign: 'center' }}>
        <img src="images/cars.png" alt="Car" style={{ width: '40%', height: '400px', display: 'block', margin: '0 auto' }} />
        <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Cars</h1>
    </div>


    <div className="container sort-container" style={{ marginTop: '50px' , width: '100%', maxWidth: 2048}}>
        <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of Cars</h2>
        <div className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'} `}>
            <ul>
                <li onClick={() => handleSortBy('id')}>Id</li>
                <li onClick={() => handleSortBy('brand')}>Brand</li>
                <li onClick={() => handleSortBy('city')}>City</li>
            </ul>
        </div>
        <button className="sort-button"style={{marginRight: '50px'}} onClick={toggleSortByMenu}>Sort by</button>
        <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addCar}>Add Car</button>
        {cars.length === 0 && <div>Loading...</div>}
        <table className='table table-striped table-bordered ' style={{ background: 'white', width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Number</th>
                    <th>Brand</th>
                    <th>SAP Number</th>
                    <th>Inventory Number</th>
                    <th>Amount</th>
                    <th>Car Status</th>
                    <th>kW</th>
                    <th>Environmental Category</th>
                    <th>Chassi</th>
                    <th>Mileage</th>
                    <th>City</th>
                    <th>Activation Date</th>
                    <th>End Date</th>
                    <th>Car Used From Date</th>
                    <th>Car Used To Date;</th>
                    <th>Sales Value</th>
                    <th>Selling Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cars.length === 0 ? (
                    <tr>
                        <td colSpan="7">Loading...</td>
                    </tr>
                ) : (
                    cars.map(({ id, number, brand, sap, inventoryNumber, amount, carStatus, kW, environmentalCategory, chassi, mileage, city, activationDate, endDate, carUsedFromDate, carUsedToDate, salesValue, sellingPrice }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{number}</td>
                            <td>{brand}</td>
                            <td>{sap}</td>
                            <td>{inventoryNumber}</td>
                            <td>{amount}</td>
                            <td>{carStatus}</td>
                            <td>{kW}</td>
                            <td>{environmentalCategory}</td>
                            <td>{chassi}</td>
                            <td>{mileage}</td>
                            <td>{city}</td>
                            <td>{activationDate}</td>
                            <td>{endDate}</td>
                            <td>{carUsedFromDate}</td>
                            <td>{carUsedToDate}</td>
                            <td>{salesValue}</td>
                            <td>{sellingPrice}</td>
                            
                            <td>
                                <button onClick={() => editCar(id)} className='btn btn-success'>Update</button>
                                <button style={{ marginLeft: "10px" }} onClick={() => removeCar(id)} className='btn btn-danger'>Delete</button>
                                <button style={{ marginLeft: "10px", marginTop: "10px" } } onClick={() => viewCar(id)} className='btn btn-primary'>View</button>

                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
        <ToastContainer />

    </div>


</>
  )
}

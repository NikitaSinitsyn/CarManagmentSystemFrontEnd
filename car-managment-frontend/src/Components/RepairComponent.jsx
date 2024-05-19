import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { deleteRepair, listRepairs } from '../services/RepairService';

export default function RepairComponent() {
    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [repairs, setRepairs] = useState([]);
    const navigate = useNavigate();


    const addRepair = () => {
        navigate('/add-repair');
    };

    const editRepair = (id) => {
        navigate(`/update-repair/${id}`);
    }

    const removeRepair = (id) => {
        deleteRepair(id)
            .then(res => {
                // Фильтруем массив виньеток, оставляя только те, у которых ID не равен удаляемому ID
                const updatedRepairs = repairs.filter(repair => repair.id !== id);
                // Обновляем состояние
                setRepairs(updatedRepairs);
            })
            .catch(error => console.error(error));
    }



    useEffect(() => {
        listRepairs()
            .then((response) => {
                setRepairs(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };

    const handleSortBy = (sortByField) => {
        let sortedData = [...repairs];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'carNumber') {
            sortedData.sort((a, b) => {
                const carNumberA = a.car?.number || '';
                const carNumberB = b.car?.number || '';
                return carNumberA.localeCompare(carNumberB);
            });
        }
        // Обновляем состояние с отсортированными данными
        setRepairs(sortedData);
        // Закрываем меню сортировки
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
            <div style={{ position: 'relative', marginTop: '50px', textAlign: 'center' }}>
                <img src="images/repair.png" alt="Repair" style={{ width: '50%', height: '400px', display: 'block', margin: '0 auto' }} />
                <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Repair</h1>
            </div>


            <div className="container sort-container" style={{ marginTop: '50px' }}>
                <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of Repairs</h2>
                <div className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li onClick={() => handleSortBy('id')}>Id</li>
                        <li onClick={() => handleSortBy('carNumber')}>Car Number</li>
                    </ul>
                </div>
                <button className="sort-button" onClick={toggleSortByMenu}>Sort by</button>
                <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addRepair}>Add Repair</button>
                {repairs.length === 0 && <div>Loading...</div>}
                <table className='table table-striped table-bordered ' style={{ background: 'white' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Car number</th>
                            <th>Employee name</th>
                            <th>CC name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repairs.length === 0 ? (
                            <tr>
                                <td colSpan="7">Loading...</td>
                            </tr>
                        ) : (
                            repairs.map((repair) => (
                                <tr key={repair.id}>
                                    <td>{repair.id}</td>
                                    <td>{repair.price}</td>
                                    <td>{repair.description}</td>
                                    <td>{repair.carNumber}</td>
                                    <td>{repair.name}</td>
                                    <td>{repair.position}</td>
                                    <td>
                                        <button onClick={() => editRepair(repair.id)} className='btn btn-success'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => removeRepair(repair.id)} className='btn btn-danger'>Delete</button>
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

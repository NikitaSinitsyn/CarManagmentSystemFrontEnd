import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteTire, listTires } from '../services/TireService'

function TireComponent() {
    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [tires, setTires] = useState([]);
    const navigate = useNavigate();


    const addTire = () => {
        navigate('/add-tire');
    };

    const editTire = (id) => {
        navigate(`/update-tire/${id}`);
    }

    const removeTire = (id) => {
        deleteTire(id)
            .then(res => {
                // Фильтруем массив виньеток, оставляя только те, у которых ID не равен удаляемому ID
                const updatedTires = tires.filter(tire => tire.id !== id);
                // Обновляем состояние
                setTires(updatedTires);
            })
            .catch(error => console.error(error));
    }



    useEffect(() => {
        listTires()
            .then((response) => {
                setTires(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };
    const handleSortBy = (sortByField) => {
        let sortedData = [...tires];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'changeDate') {
            sortedData.sort((a, b) => new Date(a.changeDate) - new Date(b.changeDate));
        } else if (sortByField === 'carNumber') {
            sortedData.sort((a, b) => a.car?.number.localeCompare(b.car?.number));
        } else if (sortByField === 'season') {
            sortedData.sort((a, b) => a.season.localeCompare(b.season));
        }
        setTires(sortedData);
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
                <img src="images/tires.png" alt="Tire" style={{ width: '50%', height: '400px', display: 'block', margin: '0 auto' }} />
                <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Tires</h1>
            </div>

            <div className="container sort-container" style={{ marginTop: '50px' }}>
                <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of Tires</h2>
                <div  className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li onClick={() => handleSortBy('id')}>Id</li>
                        <li onClick={() => handleSortBy('changeDate')}>Change Date</li>
                        <li onClick={() => handleSortBy('carNumber')}>Car Number</li>
                        <li onClick={() => handleSortBy('season')}>Season</li>
                    </ul>
                </div>
                <button className="sort-button" onClick={toggleSortByMenu}>Sort by</button>
                <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addTire}>Add Tire</button>
                {tires.length === 0 && <div>Loading...</div>}
                <table className='table table-striped table-bordered ' style={{ background: 'white' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Purchase Date</th>
                            <th>Price</th>
                            <th>Supplier</th>
                            <th>Season</th>
                            <th>Size</th>
                            <th>Storage Location</th>
                            <th>Change Date</th>
                            <th>Car number</th>
                            <th>Employee name</th>
                            <th>CC name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tires.length === 0 ? (
                            <tr>
                                <td colSpan="7">Loading...</td>
                            </tr>
                        ) : (
                            tires.map((tire) => (
                                <tr key={tire.id}>
                                    <td>{tire.id}</td>
                                    <td>{tire.purchaseDate}</td>
                                    <td>{tire.price}</td>
                                    <td>{tire.supplier}</td>
                                    <td>{tire.season}</td>
                                    <td>{tire.size}</td>
                                    <td>{tire.storageLocation}</td>
                                    <td>{tire.changeDate}</td>
                                    <td>{tire.carNumber}</td>
                                    <td>{tire.name}</td>
                                    <td>{tire.position}</td>
                                    <td>
                                        <button onClick={() => editTire(tire.id)} className='btn btn-success'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => removeTire(tire.id)} className='btn btn-danger'>Delete</button>

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

export default TireComponent
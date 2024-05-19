import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { deleteCasko, listCaskos } from '../services/CaskoService';

export default function CaskoComponent() {

    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [caskos, setCaskos] = useState([]);
    const navigate = useNavigate();


    const addCasko = () => {
        navigate('/add-casko');
    };

    const editCasko = (id) => {
        navigate(`/update-casko/${id}`);
    }

    const removeCasko = (id) => {
        deleteCasko(id)
            .then(res => {
                // Фильтруем массив виньеток, оставляя только те, у которых ID не равен удаляемому ID
                const updatedCaskos = caskos.filter(casko => casko.id !== id);
                // Обновляем состояние
                setCaskos(updatedCaskos);
            })
            .catch(error => console.error(error));
    }



    useEffect(() => {
        listCaskos()
            .then((response) => {
                setCaskos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };

    const handleSortBy = (sortByField) => {
        let sortedData = [...caskos];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'expirationDate') {
            sortedData.sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
        }
        // Обновляем состояние с отсортированными данными
        setCaskos(sortedData);
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
                <img src="images/casko.png" alt="CASKO" style={{ width: '50%', height: '400px', display: 'block', margin: '0 auto' }} />
                <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>CASKO</h1>
            </div>


            <div className="container sort-container" style={{ marginTop: '50px' }}>
                <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of CASKO</h2>
                <div className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li onClick={() => handleSortBy('id')}>Id</li>
                        <li onClick={() => handleSortBy('expirationDate')}>Expiration Date</li>
                    </ul>
                </div>
                <button className="sort-button" onClick={toggleSortByMenu}>Sort by</button>
                <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addCasko}>Add CASKO</button>
                {caskos.length === 0 && <div>Loading...</div>}
                <table className='table table-striped table-bordered ' style={{ background: 'white' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Purchase Date</th>
                            <th>Expiration Date</th>
                            <th>Price</th>
                            <th>Car number</th>
                            <th>Employee name</th>
                            <th>CC name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {caskos.length === 0 ? (
                            <tr>
                                <td colSpan="7">Loading...</td>
                            </tr>
                        ) : (
                            caskos.map((casko) => (
                                <tr key={casko.id}>
                                    <td>{casko.id}</td>
                                    <td>{casko.purchaseDate}</td>
                                    <td>{casko.expirationDate}</td>
                                    <td>{casko.price}</td>
                                    <td>{casko.carNumber}</td>
                                    <td>{casko.name}</td>
                                    <td>{casko.position}</td>
                                    <td>
                                        <button onClick={() => editCasko(casko.id)} className='btn btn-success'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => removeCasko(casko.id)} className='btn btn-danger'>Delete</button>
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

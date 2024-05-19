import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { deleteTechnical, listTechnicals } from '../services/TechnicalService';


export default function TechnicalInspectationComponent() {
    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [technicals, setTechnicals] = useState([]);
    const navigate = useNavigate();


    const addTechnical = () => {
        navigate('/add-technical');
    };

    const editTechnical = (id) => {
        navigate(`/update-technical/${id}`);
    }

    const removeTechnical = (id) => {
        deleteTechnical(id)
            .then(res => {
                // Фильтруем массив виньеток, оставляя только те, у которых ID не равен удаляемому ID
                const updatedTechnicals = technicals.filter(technical => technical.id !== id);
                // Обновляем состояние
                setTechnicals(updatedTechnicals);
            })
            .catch(error => console.error(error));
    }



    useEffect(() => {
        listTechnicals()
            .then((response) => {
                setTechnicals(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };

    const handleSortBy = (sortByField) => {
        let sortedData = [...technicals];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'NextInspectionDate') {
            sortedData.sort((a, b) => new Date(a.dateNextInspection) - new Date(b.dateNextInspection));
        }
        // Обновляем состояние с отсортированными данными
        setTechnicals(sortedData);
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
                <img src="images/technical.png" alt="Technical Inspectation" style={{ width: '50%', height: '400px', display: 'block', margin: '0 auto' }} />
                <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Technical Inspection</h1>
            </div>


            <div className="container sort-container" style={{ marginTop: '50px' }}>
                <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of Technical Inspections</h2>
                <div  className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li onClick={() => handleSortBy('id')}>Id</li>
                        <li onClick={() => handleSortBy('NextInspectionDate')}>Next Inspection Date</li>
                    </ul>
                </div>
                <button className="sort-button" onClick={toggleSortByMenu}>Sort by</button>
                <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addTechnical}>Add Technical Inspection</button>
                {technicals.length === 0 && <div>Loading...</div>}
                <table className='table table-striped table-bordered ' style={{ background: 'white' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date Passed</th>
                            <th>Next Inspection Date</th>
                            <th>Price</th>
                            <th>Car number</th>
                            <th>Employee name</th>
                            <th>CC name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technicals.length === 0 ? (
                            <tr>
                                <td colSpan="7">Loading...</td>
                            </tr>
                        ) : (
                            technicals.map((technical) => (
                                <tr key={technical.id}>
                                    <td>{technical.id}</td>
                                    <td>{technical.datePassed}</td>
                                    <td>{technical.dateNextInspection}</td>
                                    <td>{technical.price}</td>
                                    <td>{technical.carNumber}</td>
                                    <td>{technical.name}</td>
                                    <td>{technical.position}</td>
                                    <td>
                                        <button onClick={() => editTechnical(technical.id)} className='btn btn-success'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => removeTechnical(technical.id)} className='btn btn-danger'>Delete</button>
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

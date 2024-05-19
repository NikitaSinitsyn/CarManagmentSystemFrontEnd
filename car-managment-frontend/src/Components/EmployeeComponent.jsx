import React, { useState, useEffect } from 'react';
import '../Css/Component.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, listEmployee } from '../services/EmployeeService'

function EmployeeComponent() {
    const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();


    const addEmployee = () => {
        navigate('/add-employee');
    };

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }

    const removeEmployee = (id) => {
        deleteEmployee(id)
            .then(res => {
                const updatedEmployees = employees.filter(employe => employe.id !== id);
                // Обновляем состояние
                setEmployees(updatedEmployees);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        listEmployee()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const toggleSortByMenu = () => {
        setSortByMenuVisible(!sortByMenuVisible);
    };
    const handleSortBy = (sortByField) => {
        let sortedData = [...employees];
        if (sortByField === 'id') {
            sortedData.sort((a, b) => a.id - b.id);
        } else if (sortByField === 'CCName') {
            sortedData.sort((a, b) => a.CCName.localeCompare(b.CCName));
        } else if (sortByField === 'position') {
            sortedData.sort((a, b) => a.position.localeCompare(b.position));
        } else if (sortByField === 'licenseExpirationDate') {
            sortedData.sort((a, b) => new Date(a.licenseExpirationDate) - new Date(b.licenseExpirationDate));
        }
        setEmployees(sortedData);
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
                <img src="images/employee.png" alt="Employee" style={{ width: '30%', height: '400px', display: 'block', margin: '0 auto' }} />
                <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px' }}>Employees</h1>
            </div>

            <div className="container sort-container" style={{ marginTop: '50px', maxWidth: 1500 }}>
                <h2 style={{ color: '#00D8FF', textAlign: 'center' }}>List of Employees</h2>
                <div className={`sort-menu ${sortByMenuVisible ? 'visible' : 'hidden'}`}>
                    <ul>
                        <li onClick={() => handleSortBy('id')}>Id</li>
                        <li onClick={() => handleSortBy('CCName')}>CC Name</li>
                        <li onClick={() => handleSortBy('position')}>Position</li>
                        <li onClick={() => handleSortBy('licenseExpirationDate')}>License Expiration Date</li>
                    </ul>
                </div>
                <button className="sort-button" onClick={toggleSortByMenu}>Sort by</button>
                <button className='btn btn-primary' style={{ backgroundColor: '#00D8FF', color: 'black', marginBottom: '10px' }} onClick={addEmployee}>Add Employee</button>
                {employees.length === 0 && <div>Loading...</div>}
                <table className='table table-striped table-bordered ' style={{ background: 'white' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Cost Center</th>
                            <th>CC Name</th>
                            <th>Position</th>
                            <th>License Number</th>
                            <th>License Expiration Date</th>
                            <th>Car Number</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan="11">Loading...</td>
                            </tr>
                        ) : (
                            employees.map((employee) => (

                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.code}</td>
                                    <td>{employee.costCenter}</td>
                                    <td>{employee.ccname}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.licenseNumber}</td>
                                    <td>{employee.licenseExpirationDate}</td>
                                    <td>{employee.carNumbers.map((carNumber, index) => (<div key={index}>{carNumber}</div>))}</td>
                                    <td>{employee.brands.map((brand, index) => (<div key={index}>{brand}</div>))}</td>
                                    <td>
                                        <button onClick={() => editEmployee(employee.id)} className='btn btn-success'>Update</button>
                                        <button style={{ marginLeft: "5px" }} onClick={() => removeEmployee(employee.id)} className='btn btn-danger'>Delete</button>
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

export default EmployeeComponent
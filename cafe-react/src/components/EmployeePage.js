import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../assets/css/CafePage.css'
import { fetchEmployees, deleteEmployee } from '../redux/actions';


const EmployeePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const employees = useSelector((state) => state.cafeStore.employees);
    const cafes = useSelector((state) => state.cafeStore.cafe);

    const columnDefs = [
        { headerName: 'Employee Id', field: 'employee_id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Email Address', field: 'email_address' },
        { headerName: 'Phone Number', field: 'phone_number' },
        { headerName: 'Days worked in the cafe', field: 'days_worked' },
        { 
          headerName: 'Cafe Name', 
          field: 'cafe_id',
          valueGetter: (params) =>{
            const cafeId = params.data.cafe_id;
            const cafe = cafes.find((cafe) => cafe.id === cafeId);
            return cafe ? cafe.name : '';
          }
        },
        {
            headerName: 'Actions',
            cellRendererFramework: (params) => (
            <div>
                <button onClick={() => handleEdit(params.data)}>Edit</button>
                <button onClick={() => handleDelete(params.data)}>Delete</button>
            </div>
            ),
        },
    ];

    useEffect(() => {
      // Fetch employees when the page loads
      dispatch(fetchEmployees());
    }, [dispatch, location]);

    // Mock data for the cafes
    const rowData = [...employees];

    // Event handler for the Edit button
    const handleEdit = (rowData) => {
      navigate(`/editemployee/${rowData.employee_id}`, { state:{employee: rowData, action: 'edit' }});
    };

    const handleAddNewEmployee = (data) => {
      navigate(`/addemployee`, { state:{employee: null, action: 'add' }});
    }

    // Event handler for the Delete button
    const handleDelete = (rowData) => {
      dispatch(deleteEmployee(rowData.employee_id))
      .then(() => {
        dispatch(fetchEmployees());
      })
      .catch((error) => {
        console.log('Error on DELETE Employees', error);
      });
    };

    return (
      <div>
        <div className="filter-add-container">
          <div
            className="cafe-filter-input"
          />
          <button onClick={handleAddNewEmployee}>Add New Employee</button>
        </div>
        <div className="ag-theme-alpine" style={{ height: '500px', width: '100%'}}>
          <AgGridReact columnDefs={columnDefs} rowData={rowData} />
        </div>
      </div>
    )    
}

export default EmployeePage;
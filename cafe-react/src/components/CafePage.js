import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../assets/css/CafePage.css'
import { fetchCafes, deleteCafe } from '../redux/actions';

const CafePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cafes = useSelector((state) => state.cafeStore.cafe);
  const [locationFilter, setLocationFilter] = useState('');


  // Define the column definitions for the ag-Grid table
  const columnDefs = [
    { headerName: 'Logo', field: 'logo' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Employees', field: 'employees' },
    { headerName: 'Location', field: 'location' },
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
    // Fetch cafes when the page loads
    console.log("fetching/refetching data")
    dispatch(fetchCafes());
  }, [dispatch, location]);

  // Mock data for the cafes
  const rowData = [...cafes];

  // Event handler for the Edit button
  const handleEdit = (rowData) => {
    navigate(`/editcafe/${rowData.id}`, { state:{cafe: rowData, action: 'edit' }});
  };

  const handleAddCafe = (data) => {
    navigate(`/addcafe`, { state:{cafe: null, action: 'add' }});
  }

  // Event handler for the Delete button
  const handleDelete = (rowData) => {
    dispatch(deleteCafe(rowData.id))
    .then(() => {
      // After successful deletion, refetch the cafes
      dispatch(fetchCafes());
    })
    .catch((error) => {
      console.log('Error on DELETE Cafe', error);
    });
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
    dispatch(fetchCafes(event.target.value));
  };
  

  return (
    <div>
      <div className="filter-add-container">
        <input
          className="cafe-filter-input"
          type="text"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          placeholder="Filter by location"
        />
        <button onClick={handleAddCafe}>Add Cafe</button>
      </div>
      <div className="ag-theme-alpine" style={{ height: '500px', width: '100%'}}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default CafePage;

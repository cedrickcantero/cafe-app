import axios from 'axios';

// Action types
export const FETCH_CAFES_SUCCESS = 'FETCH_CAFES_SUCCESS';
export const ADD_CAFE_SUCCESS = 'ADD_CAFE_SUCCESS';
export const UPDATE_CAFE_SUCCESS = 'UPDATE_CAFE_SUCCESS';
export const DELETE_CAFE_SUCCESS = 'DELETE_CAFE_SUCCESS';

export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';

export const FETCH_EMPLOYEES_CAFE_SUCCESS = 'FETCH_EMPLOYEES_CAFE_SUCCESS';
export const ADD_EMPLOYEE_TO_CAFE_SUCCESS = 'ADD_EMPLOYEE_TO_CAFE_SUCCESS';
export const REMOVE_EMPLOYEE_FROM_CAFE_SUCCESS = 'REMOVE_EMPLOYEE_FROM_CAFE_SUCCESS';

// Action creators for cafes
export const fetchCafesSuccess = (cafes) => ({
  type: FETCH_CAFES_SUCCESS,
  payload: cafes,
});

export const addCafeSuccess = (cafe) => ({
  type: ADD_CAFE_SUCCESS,
  payload: cafe,
});

export const updateCafeSuccess = (cafe) => ({
  type: UPDATE_CAFE_SUCCESS,
  payload: cafe,
});

export const deleteCafeSuccess = (cafeId) => ({
  type: DELETE_CAFE_SUCCESS,
  payload: cafeId,
});

// Action creators for employees
export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const addEmployeeSuccess = (employee) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const updateEmployeeSuccess = (employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const deleteEmployeeSuccess = (employeeId) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: employeeId,
});

// Action creators for employee-cafe relationships
export const fetchEmployeesCafeSuccess = (employeesCafe) => ({
  type: FETCH_EMPLOYEES_CAFE_SUCCESS,
  payload: employeesCafe,
});

export const addEmployeeToCafeSuccess = (employeeId) => ({
  type: ADD_EMPLOYEE_TO_CAFE_SUCCESS,
  payload: employeeId,
});

export const removeEmployeeFromCafeSuccess = (employeeId) => ({
  type: REMOVE_EMPLOYEE_FROM_CAFE_SUCCESS,
  payload: employeeId,
});

// Thunk action creator for fetching cafes
export const fetchCafes = (location) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3002/cafes/cafes/${location ? `?location=${location}` : ''}`);
      dispatch(fetchCafesSuccess(response.data));
    } catch (error) {
      console.log('Error on GET Cafe', error)
    }
  };
};

// Thunk action creator for adding a cafe
export const addCafe = (cafeData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3002/cafes/cafe', cafeData);
      dispatch(addCafeSuccess(response.data));
    } catch (error) {
      console.log('Error on POST Cafe', error)
    }
  };
}


// Thunk action creator for editing a cafe
export const editCafe = (cafeData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3002/cafes/cafe/${cafeData.id}`, cafeData);
      dispatch(updateCafeSuccess(response.data));
    } catch (error) {
      console.log('Error on PUT Cafe', error)
    }
  };
}

// Thunk action creator for deleting a cafe
export const deleteCafe = (cafeDataId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3002/employees/employee/cafe/${cafeDataId}`);
      const response = await axios.delete(`http://localhost:3002/cafes/cafe/${cafeDataId}`);
      dispatch(deleteCafeSuccess(response.data));
    } catch (error) {
      console.log('Error on DELETE Cafe', error)
    }
  };
}

// Thunk action creator for fetching employees
export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3002/employees/employees`);
      dispatch(fetchEmployeesSuccess(response.data));
    } catch (error) {
      console.log('Error on Fetch Cafe', error)
    }
  };
};

// Thunk action creator for adding an employee
export const addEmployee = (employee) => {
  console.log("employee Data", employee)
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3002/employees/employee', employee);
      dispatch(addEmployeeSuccess(response.data));
    } catch (error) {
      console.log('Error on POST Employee', error)
    }
  };
}

// Thunk action creator for editing a an employee
export const editEmployee = (employeeData) => {
  console.log("employeeData", employeeData)
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3002/employees/employee/${employeeData.id}`, employeeData);
      dispatch(updateEmployeeSuccess(response.data));
    } catch (error) {
      console.log('Error on PUT Employee', error)
    }
  };
}

// Thunk action creator for deleting an employee
export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3002/employees/employee/${employeeId}`);
      dispatch(deleteEmployeeSuccess(response.data));
    } catch (error) {
      console.log('Error on DELETE Employee', error)
    }
  };
}

// Thunk action creator for fetching employees
export const fetchEmployeesCafe = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3002/employeesCafe/employeesCafes`);
      dispatch(fetchEmployeesCafeSuccess(response.data));
    } catch (error) {
      console.log('Error on Fetch Cafe', error)
    }
  };
};

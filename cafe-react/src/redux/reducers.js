import {
    FETCH_CAFES_SUCCESS,
    ADD_CAFE_SUCCESS,
    UPDATE_CAFE_SUCCESS,
    DELETE_CAFE_SUCCESS,
    FETCH_EMPLOYEES_SUCCESS,
    ADD_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_TO_CAFE_SUCCESS,
    REMOVE_EMPLOYEE_FROM_CAFE_SUCCESS,
    FETCH_EMPLOYEES_CAFE_SUCCESS,
  } from './actions';
  
  // Initial state for cafes
  const initialCafesState = [];
  
  // Initial state for employees
  const initialEmployeesState = [];
  
  // Initial state for employee-cafe relationships
  const initialEmployeeCafeState = [];
  
  // Reducer for cafes
  export const cafeReducer = (state = initialCafesState, action) => {
    switch (action.type) {
      case FETCH_CAFES_SUCCESS:
        return action.payload;
      case ADD_CAFE_SUCCESS:
        return [...state, action.payload];
      case UPDATE_CAFE_SUCCESS:
        return state.map((cafe) =>
          cafe.id === action.payload.id ? action.payload : cafe
        );
      case DELETE_CAFE_SUCCESS:
        return state.filter((cafe) => cafe.id !== action.payload);
      default:
        return state;
    }
  };
  
  // Reducer for employees
  export const employeeReducer = (state = initialEmployeesState, action) => {
    switch (action.type) {
      case FETCH_EMPLOYEES_SUCCESS:
        return action.payload;
      case ADD_EMPLOYEE_SUCCESS:
        return [...state, action.payload];
      case UPDATE_EMPLOYEE_SUCCESS:
        return state.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        );
      case DELETE_EMPLOYEE_SUCCESS:
        return state.filter((employee) => employee.id !== action.payload);
      default:
        return state;
    }
  };
  
  // Reducer for employee-cafe relationships
  export const employeeCafeReducer = (
    state = initialEmployeeCafeState,
    action
  ) => {
    switch (action.type) {
      case FETCH_EMPLOYEES_CAFE_SUCCESS:
        return action.payload;
      case ADD_EMPLOYEE_TO_CAFE_SUCCESS:
        return [...state, action.payload];
      case REMOVE_EMPLOYEE_FROM_CAFE_SUCCESS:
        return state.filter((employeeCafe) => employeeCafe.id !== action.payload);
      default:
        return state;
    }
  };
  
  
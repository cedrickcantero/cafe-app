import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchCafes, fetchEmployees, fetchEmployeesCafe } from './redux/actions';
import store from './redux/store';
import RouterComponent from './RouterComponent';
import Layout from './components/common/Layout';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state);


  useEffect(() => {
      dispatch(fetchCafes())
      dispatch(fetchEmployees())
      dispatch(fetchEmployeesCafe())
      console.log("initial state", initialState)
  }, []);
  
  return (
    <Provider store={store}>
      <Layout>
        <RouterComponent />
      </Layout>
    </Provider>
  );
}

export default App;

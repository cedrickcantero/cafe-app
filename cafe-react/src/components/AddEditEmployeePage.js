import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { editEmployee, addEmployee } from '../redux/actions';
import _ from 'lodash';
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

const AddEditEmployeePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { employeeId } = useParams();
  const getActionState = location?.state?.action;
  const getRowDataState = location?.state?.employee;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [cafe, setCafe] = useState('');
  const [actionType, setActionType] = useState('');


  const cafes = useSelector((state) => state.cafeStore.cafe);
  const employees = useSelector((state) => state.cafeStore.employees);



  useEffect(() => {
    // Fetch the existing employee data if editing
    console.log("getRowDataState", getRowDataState);
    if (getRowDataState) {
      setName(getRowDataState.name);
      setEmail(getRowDataState.email_address);
      setPhone(getRowDataState.phone_number);
      setGender(getRowDataState.gender);
      setCafe(getRowDataState.cafe_id);
      setActionType('edit');
    } else {
      setActionType('add');
    }
  }, [getRowDataState]);

  const handleSubmit = (event) => {
    const largestObject = _.maxBy(employees, (employee) => parseInt(employee.employee_id.slice(2))) || 0;
    let largestId = parseInt(largestObject?.employee_id?.slice(2));

    const employeeData = {
        name:name,
        email_address:email,
        phone_number:phone,
        gender,
        cafe_id:cafe
    }

    event.preventDefault();
    // Perform form validation and submit the employee data
    if (actionType === 'edit') {
        // dispatch(editEmployee(employeeData));
        employeeData.id = getRowDataState.employee_id;
        dispatch(editEmployee(employeeData))
        .then(() => {
          navigate('/employees');
        })
        .catch((error) => {
          console.log('Error on PUT employee', error);
        });
    } else if (actionType === 'add') {
        employeeData.id = (`UI${largestId+1}`).toString();
        dispatch(addEmployee(employeeData))
        .then(() => {
          navigate('/employees');
        })
        .catch((error) => {
          console.log('Error on POST employee', error);
        });
    }
  };

  const handleCancel = () => {
    navigate('/employees');
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    // Check if the phone number starts with 8 or 9
    if (value === '' || /^[89]/.test(value)) {
        setPhone(value);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textField}
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={6}
        maxLength={10}
      />
      <TextField
        className={classes.textField}
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        className={classes.textField}
        label="Phone Number"
        value={phone}
        onChange={handlePhoneChange}
        required
        inputProps={{ maxLength: 8 }}
      />
      <FormControl component="fieldset" className={classes.textField}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />
        </RadioGroup>
      </FormControl>
      <FormControl className={classes.textField}>
        <Select
          value={cafe}
          onChange={(e) => setCafe(e.target.value)}
          displayEmpty
        >
            {cafes.map((cafe) => (
                <MenuItem key={cafe.id} value={cafe.id}>
                {cafe.name}
                </MenuItem>
            ))}
        </Select>
      </FormControl>
      <div className={classes.buttonGroup}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button variant="contained" color="default" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddEditEmployeePage;
 
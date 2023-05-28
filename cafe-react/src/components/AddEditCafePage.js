import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { editCafe, addCafe } from '../redux/actions';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const AddEditCafePage = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getActionState = location?.state?.action;
    const getRowDataState = location?.state?.cafe;
    const cafes = useSelector((state) => state.cafeStore.cafe);
    const largestObject = _.maxBy(cafes, (cafe) => parseInt(cafe.id.slice(2))) || 0;
    let largestId = parseInt(largestObject?.id?.slice(2));

    const classes = useStyles();
    //   const history = useHistory();
    const { cafeId } = useParams(); // If editing an existing cafe, retrieve the cafeId from the URL params

    const [cafe, setCafe] = useState({
        name: '',
        description: '',
        logo: null,
        location: '',
    });

    const [actionType, setActionType] = useState('')

    useEffect(() => {
        // Fetch the existing cafe data if editing
        if (getRowDataState) {
            setCafe(getRowDataState);
        }

        if (getActionState == 'edit') {
            setActionType('edit');
        }else if(getActionState == 'add'){
            setActionType('add');
        }


    }, [getRowDataState, getActionState]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCafe((prevCafe) => ({
        ...prevCafe,
        [name]: value,
        }));
    };

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        setCafe((prevCafe) => ({
        ...prevCafe,
        logo: file,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(actionType === 'add'){
            cafe.id = (`Cl${largestId+1}`).toString();
            dispatch(addCafe(cafe));
            navigate('/cafes');
        }else if(actionType === 'edit'){
            dispatch(editCafe(cafe));
            navigate('/cafes');
        }
    };

    const handleCancel = () => {
        navigate('/cafes');
    };

  return (
    <div className={classes.root}>
      <h1>{getActionState == 'edit' ? 'Edit Cafe' : 'Add Cafe'}</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Name"
          name="name"
          value={cafe.name}
          onChange={handleChange}
          required
          minLength={6}
          maxLength={10}
        />
        <TextField
          className={classes.input}
          label="Description"
          name="description"
          value={cafe.description}
          onChange={handleChange}
          multiline
          minRows={4}
          inputProps={{ maxLength: 256 }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className={classes.input}
        />
        <TextField
          className={classes.input}
          label="Location"
          name="location"
          value={cafe.location}
          onChange={handleChange}
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditCafePage;

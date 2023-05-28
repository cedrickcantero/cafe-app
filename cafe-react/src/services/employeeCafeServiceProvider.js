import axios from "axios";


export const getEmployeesCafe = async () => {
    return await axios.get(`http://localhost:3002/employeesCafe/employeesCafes`).then(response => {
        console.log("response from getEmployeesCafe",response);
        return response.data
    }).catch(err => {
      return {error: err}
    })
}
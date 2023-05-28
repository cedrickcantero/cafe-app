import axios from "axios";


export const getEmployees = async () => {
    return await axios.get(`http://localhost:3002/employees/employees`).then(response => {
        return response.data
    }).catch(err => {
      return {error: err}
    })
}
import axios from "axios";


export const getCafes = async () => {
    return await axios.get(`http://localhost:3002/cafes/cafes`).then(response => {
        return response.data
    }).catch(err => {
      return {error: err}
    })
}
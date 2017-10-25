import axios from 'axios'

const baseURL = `http://localhost:3000/api/v1/`

// function getToken () {
//   axios.post(baseURL + 'login', {
//     username: 'admin',
//     password: 'demo'
//   })
//     .then(response => {
//       return response
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
// }

export const HTTP = axios.create({
  baseURL: baseURL
})

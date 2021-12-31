import axios from 'axios'

class PhonesService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/phones",
      withCredentials: true
    })
  }


  getAllPhones = (page) => this.app.get(`/${page}`)

  getOne = (id) => this.app.get(`/details/${id}`)

  create = (data) => this.app.post('/', data)

  edit = (data) => this.app.put('/', data)

  delete = (id) => this.app.delete(`/${id}`)

}

export default PhonesService
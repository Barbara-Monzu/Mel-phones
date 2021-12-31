import axios from 'axios'

class ReviewService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/reviews',
      withCredentials: true
    })
  }
  
 get = (id) => this.app.get(`/${id}`)
 create = (id, data) => this.app.post(`/${id}`, data)
 
}

export default ReviewService
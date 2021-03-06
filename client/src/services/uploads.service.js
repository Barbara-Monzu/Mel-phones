import axios from 'axios'

class UploadService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/uploads`
    })
  }

  uploadImage = (imageData) => this.app.post("/image", imageData)
}

export default UploadService
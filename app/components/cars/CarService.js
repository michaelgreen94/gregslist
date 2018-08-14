import Car from '../../models/Car.js'

let cars = []

//creates a new HTTP request object
const carsApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars/',
  //only wait 3 second for response
  timeout: 3000
})

export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        let cars = res.data.data.map(rC => {
          return new Car(rC)
        })
        //callback function to draw cars
        draw(cars)
      })
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    }
    )
    carsApi.post('', newCar)
      .then(res => {
        this.getCars(draw)
      })

  }

  deleteCar(id, draw) {
    carsApi.delete(id)
  }

  bid(id, update, draw) {
    carsApi.put(id, update)
  }
}
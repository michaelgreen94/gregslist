import Car from '../../models/Car.js'

let cars = []

//creates a new HTTP request object
const carsApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars',
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

  // addCar(formData) {
  //   let newCar = new Car(
  //     formData.make.value,
  //     formData.model.value,
  //     formData.year.value,
  //     formData.price.value,
  //     formData.color.value,
  //     formData.imgUrl.value
  //   )
  //   cars.push(newCar)
  //   console.log(cars)

  // }
}
import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {
  let template = ''
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <img src="${car.imgUrl}" alt="somethingelse" class="mh">
        <p>Make: ${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
        <p>${car.year}</p>
        <p>${car.description}</p>
    </div>
    `
  }

  document.getElementById('cars').innerHTML = template

}

export default class CarController {

  constructor() {
    carService.getCars(drawCars)
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    carService.addCar(formData, drawCars)
    formData.reset()
  }

}
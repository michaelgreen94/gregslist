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
        <p>$${car.price}</p>
        <button onclick="app.controllers.carController.bid('${car._id}', ${car.price})">BID</button>
        <p>${car.year}</p>
        <p>${car.description}</p>
        <button onclick="app.controllers.carController.deleteCar('${car._id}')">DELETE</buttong>
    </div>`
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

  deleteCar(id) {
    carService.deleteCar(id, drawCars)
  }

  bid(id, price) {
    price++
    let update = {
      price: price
    }
    carService.bid(id, update, drawCars)
  }

}
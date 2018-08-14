import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {
  let template = ''
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="width: 18rem;" class="card mx-2 my-2">
    <img src="${car.imgUrl}" alt="somethingelse" class="card-img-top img-fit">
      <div class="card-body">
        <p class="card-text display-block text-truncate"><strong>Description:</strong> ${car.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Make:</strong> ${car.make}</li>
        <li class="list-group-item"><strong>Model:</strong> ${car.model}</li>
        <li class="list-group-item"><strong>Price: $</strong> ${car.price}</li>
        <li class="list-group-item"><strong>Year:</strong> ${car.year}</li>
      </ul>
      <div class="card-body">
      <button class="btn btn-success" onclick="app.controllers.carController.bid('${car._id}', ${car.price})">BID</button>
      <button class="btn btn-outline-danger" onclick="app.controllers.carController.deleteCar('${car._id}')">DELETE</buttong>
      </div>
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
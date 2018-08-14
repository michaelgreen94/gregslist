import CarController from "./app/components/cars/CarController.js";

export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController()
    }
  }
}

//@ts-ignore
window.app = new App()
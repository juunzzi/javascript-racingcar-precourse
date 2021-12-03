import {
  DOM,
  FORWARD_NUMBER_SIGN,
  MINUS_SIGN,
  PLAIN_STRING,
} from "./utils/constants.js";
import {
  isEveryStringLessOrEqualsFive,
  getRandomNumber,
} from "./utils/utils.js";
class Car {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.countTemplate = PLAIN_STRING;
    this.count = 0;
  }
}
class CarGameUtil {
  static makeCars(namesArray) {
    if (CarGameUtil.isValidate(namesArray)) {
      return namesArray.map((name, index) => new Car(name, index));
    }
    throw new Error("자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.");
  }
  static isValidate(namesArray) {
    return isEveryStringLessOrEqualsFive(namesArray);
  }
}

class CarGame {
  constructor() {
    this.cars;

    this.initDOM();
    this.initHandler();

    this.formCars.addEventListener("submit", this.onFormCarsSubmit);
  }
  initDOM() {
    this.app = document.querySelector(DOM.APP);

    this.formCars = document.querySelector(DOM.FORM_CARS_ID);
    this.formCount = document.querySelector(DOM.FORM_COUNT_ID);

    this.result = document.createElement("div");
    this.result.setAttribute("id", "result");
    this.app.appendChild(this.result);
  }
  initHandler() {
    this.onFormCarsSubmit = (e) => {
      e.preventDefault();

      const [{ value: carsString }] = e.target;

      try {
        this.cars = CarGameUtil.makeCars(carsString.split(","));
      } catch (e) {
        this.cars = null;
        alert(e);
      }
      return;
    };
  }
}
new CarGame();

import { menuList } from "./utils/menuList.js";

class CalcPrice {
  #inputMenu = [];
  #beforePrice = 0;
  #weekdayPrice = 0;
  #weekendPrice = 0;

  constructor(inputMenuList) {
    this.#inputMenu = inputMenuList;
  }

  getBeforePrice() {
    this.#beforePrice = this.#inputMenu.reduce((total, menu) => {
      const menuItem = menuList.find((item) => item.name === menu.name);
      return menuItem ? total + menuItem.price * menu.quantity : total;
    }, 0);
    return this.#beforePrice;
  }

  getWeekdayDiscount() {
    this.#weekdayPrice = this.#inputMenu.reduce((total, menu) => {
      const item = menuList.find(
        (i) => i.name === menu.name && i.menu == "dessert"
      );
      return item ? total + 2023 * menu.quantity : total;
    }, 0);
    return this.#weekdayPrice;
  }

  getWeekendDiscount() {
    this.#weekendPrice = this.#inputMenu.reduce((total, menu) => {
      const item = menuList.find(
        (i) => i.name === menu.name && i.menu == "main"
      );
      return item ? total + 2023 * menu.quantity : total;
    }, 0);
    return this.#weekendPrice;
  }
}

export default CalcPrice;

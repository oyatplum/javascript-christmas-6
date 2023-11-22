import { Console } from "@woowacourse/mission-utils";

class CalcPrice {
  #menuList = [
    { name: "양송이수프", price: 6000, menu: "appetizer" },
    { name: "타파스", price: 5500, menu: "appetizer" },
    { name: "시저샐러드", price: 8000, menu: "appetizer" },
    { name: "티본스테이크", price: 55000, menu: "main" },
    { name: "바비큐립", price: 54000, menu: "main" },
    { name: "해산물파스타", price: 35000, menu: "main" },
    { name: "크리스마스파스타", price: 25000, menu: "main" },
    { name: "초코케이크", price: 15000, menu: "dessert" },
    { name: "아이스크림", price: 5000, menu: "dessert" },
    { name: "제로콜라", price: 3000, menu: "beverage" },
    { name: "레드와인", price: 60000, menu: "beverage" },
    { name: "샴페인", price: 25000, menu: "beverage" },
  ];
  #inputMenu = [];
  #beforePrice = 0;

  constructor(inputMenuList) {
    this.#inputMenu = inputMenuList;
  }

  getBeforePrice() {
    this.#beforePrice = this.#inputMenu.reduce((total, menu) => {
      const menuItem = this.#menuList.find((item) => item.name === menu.name);
      return menuItem ? total + menuItem.price * menu.quantity : total;
    }, 0);
    return this.#beforePrice;
    //Console.print(this.#beforePrice);
  }
}

export default CalcPrice;

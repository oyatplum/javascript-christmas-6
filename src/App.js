import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import CalcPrice from "./CalcPrice.js";
import Event from "./Event.js";
import { InputValidator } from "./utils/InputValidator.js";

const menuList = [
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

class App {
  #inputDate = 0;
  #inputMenuList = [];

  async run() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    await this.getDate();
  }

  async getDate() {
    const input = await InputView.readDate();

    try {
      if (!InputValidator.validDate(input)) {
        throw new Error(
          "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."
        );
      }
      this.#inputDate = input;
      this.getMenu();
    } catch (error) {
      Console.print(error.message);
      await this.getDate();
    }
  }
  async getMenu() {
    const input = await InputView.readMenu();

    try {
      const menu = input.split(",");

      menu.forEach((item) => {
        const [name, quantity] = item.split("-");
        this.#inputMenuList.push({ name, quantity });
      });

      if (!InputValidator.validMenu(menuList, this.#inputMenuList)) {
        throw new Error(
          "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
        );
      }

      this.start();
    } catch (error) {
      Console.print(error.message);
      this.#inputMenuList = [];
      await this.getMenu();
    }
  }

  async start() {
    Console.print(
      `12월 ${this.#inputDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
    //
    Console.print("");
    OutputView.printMenu(this.#inputMenuList);
    //
    const price = new CalcPrice(menuList, this.#inputMenuList);
    const beforePrice = price.getBeforePrice();
    Console.print("");
    OutputView.printBeforeDiscount(beforePrice); // 총 주문 금액 10,000원부터 이벤트 적용
    //
    Console.print("");
    const isGift = Event.giftEvent(beforePrice);
    OutputView.printGiftMenu(isGift);
    //
    Console.print("");
    const christmas = Event.christmasEvent(this.#inputDate);
    const weekday = Event.weekdayEvent(
      this.#inputDate,
      this.#inputMenuList,
      menuList
    );
    const weekend = Event.weekendEvent(
      this.#inputDate,
      this.#inputMenuList,
      menuList
    );
    const special = Event.specialEvent(this.#inputDate);
    OutputView.printEvents(christmas, weekday, weekend, special, isGift);
    //
    Console.print("");
    const totalDiscounted = christmas + weekday + weekend + special + isGift;
    OutputView.printDiscount(totalDiscounted);
    //
    const afterPrice = beforePrice - totalDiscounted + isGift;
    Console.print("");
    OutputView.printAfterDiscount(afterPrice);
    //
    Console.print("");
    OutputView.printEventBadge(totalDiscounted);
  }
}

export default App;

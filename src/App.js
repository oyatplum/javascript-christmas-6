import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import CalcPrice from "./CalcPrice.js";
import Event from "./Event.js";
import { InputValidator } from "./utils/InputValidator.js";

class App {
  #inputDate = 0;
  #inputMenuList = [];
  #christmas = 0;
  #weekday = 0;
  #weekend = 0;
  #special = 0;

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

      if (!InputValidator.validMenu(this.#inputMenuList)) {
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
    const price = new CalcPrice(this.#inputMenuList);
    const beforePrice = price.getBeforePrice();
    Console.print("");
    OutputView.printBeforeDiscount(beforePrice);
    //
    Console.print("");
    const isGift = Event.giftEvent(beforePrice);
    OutputView.printGiftMenu(isGift);
    //
    Console.print("");

    if (InputValidator.validPrice(this.#inputMenuList)) {
      this.#christmas = Event.christmasEvent(this.#inputDate);
      this.#weekday = Event.weekdayEvent(this.#inputDate, this.#inputMenuList);
      this.#weekend = Event.weekendEvent(this.#inputDate, this.#inputMenuList);
      this.#special = Event.specialEvent(this.#inputDate);
    }

    OutputView.printEvents(
      this.#christmas,
      this.#weekday,
      this.#weekend,
      this.#special,
      isGift
    );
    //
    Console.print("");
    const totalDiscounted =
      this.#christmas + this.#weekday + this.#weekend + this.#special + isGift;
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

import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import CalcPrice from "./CalcPrice.js";
import Event from "./Event.js";

const inputMenuList = [];

class App {
  async run() {
    this.getInput();
  }

  async getInput() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    const inputDate = await InputView.readDate();
    //Console.print(date);
    const inputMenu = await InputView.readMenu();
    const menu = inputMenu.split(",");
    menu.forEach((item) => {
      //me.push(item.split("-"));
      const [name, quantity] = item.split("-");
      inputMenuList.push({ name, quantity });
    });
    //Console.print(menu);
    //Console.print(inputMenuList);
    Console.print(
      `12월 ${inputDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
    Console.print("");
    OutputView.printMenu(inputMenuList);
    //
    const price = new CalcPrice(inputMenuList);
    const beforePrice = price.getBeforePrice();
    Console.print("");
    OutputView.printBeforeDiscount(beforePrice);
    //
    Console.print("");
    const isGift = Event.giftEvent(beforePrice);
    OutputView.printGiftMenu(isGift);
    //
    Console.print("");
    const christmas = Event.christmasEvent(inputDate);
    const weekday = Event.weekdayEvent(inputDate, inputMenuList);
    const weekend = Event.weekendEvent(inputDate, inputMenuList);
    const special = Event.specialEvent(inputDate);

    OutputView.printEvents(christmas, weekday, weekend, special, isGift);
    //
    Console.print("");
    const totalDiscounted = christmas + weekday + weekend + special + isGift;
    OutputView.printDiscount(totalDiscounted);
    //Console.print(totalDiscounted);
    const afterPrice = beforePrice - totalDiscounted + 25000;
    Console.print("");
    OutputView.printAfterDiscount(afterPrice);
    //
    Console.print("");
    OutputView.printEventBadge(totalDiscounted);
  }
}

export default App;

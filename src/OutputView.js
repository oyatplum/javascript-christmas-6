import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(menu) {
    Console.print("<주문 메뉴>");
    //Console.print(menu);
    menu.forEach((item) => {
      Console.print(item.name + " " + item.quantity + "개");
    });
  },
};

export default OutputView;

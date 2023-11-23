import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(menu) {
    Console.print("<주문 메뉴>");
    //Console.print(menu);
    menu.forEach((item) => {
      Console.print(item.name + " " + item.quantity + "개");
    });
  },
  printGiftMenu(isGift) {
    Console.print("<증정 메뉴>");
    if (isGift) {
      Console.print("샴페인 1개");
    } else {
      Console.print("없음");
    }
  },
  printEvents(christmas, weekday, weekend, special, isGift) {
    Console.print("<혜택 내역>");
    if (christmas) {
      Console.print(
        "크리스마스 디데이 할인: -" + christmas.toLocaleString() + "원"
      );
    }
    if (weekday) {
      Console.print("평일 할인: -" + weekday.toLocaleString() + "원");
    }
    if (weekend) {
      Console.print("주말 할인: -" + weekend.toLocaleString() + "원");
    }
    if (special) {
      Console.print("특별 할인: -1,000원");
    }
    if (isGift) {
      Console.print("증정 이벤트: -25,000원");
    }
  },
};

export default OutputView;

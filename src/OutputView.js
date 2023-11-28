import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(menu) {
    Console.print("<주문 메뉴>");
    menu.forEach((item) => {
      Console.print(item.name + " " + item.quantity + "개");
    });
  },
  printBeforeDiscount(beforePrice) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(beforePrice.toLocaleString() + "원");
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
      Console.print("특별 할인: -" + special.toLocaleString() + "원");
    }
    if (isGift) {
      Console.print("증정 이벤트: -" + isGift.toLocaleString() + "원");
    }
    if (!christmas && !weekday && !weekend && !special && !isGift) {
      Console.print("없음");
    }
  },
  printDiscount(totalDiscounted) {
    Console.print("<총혜택 금액>");
    if (totalDiscounted) {
      Console.print("-" + totalDiscounted.toLocaleString() + "원");
    } else {
      Console.print("0원");
    }
  },
  printAfterDiscount(afterPrice) {
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(afterPrice.toLocaleString() + "원");
  },
  printEventBadge(totalDiscounted) {
    Console.print("<12월 이벤트 배지>");
    if (5000 <= totalDiscounted && totalDiscounted < 10000) {
      Console.print("별");
    } else if (10000 <= totalDiscounted && totalDiscounted < 20000) {
      Console.print("트리");
    } else if (totalDiscounted >= 20000) {
      Console.print("산타");
    } else {
      Console.print("없음");
    }
  },
};

export default OutputView;

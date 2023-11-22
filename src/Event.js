import { Console } from "@woowacourse/mission-utils";

const Event = {
  giftEvent(beforePrice) {
    Console.print("<증정 메뉴>");
    if (beforePrice >= 120000) {
      Console.print("샴페인 1개");
    } else {
      Console.print("없음");
    }
  },
};

export default Event;

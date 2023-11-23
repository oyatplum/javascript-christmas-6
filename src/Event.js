import { Console } from "@woowacourse/mission-utils";
import CalcPrice from "./CalcPrice.js";

const Event = {
  giftEvent(beforePrice) {
    if (beforePrice >= 120000) {
      return true;
    }
    return false;
  },
  christmasEvent(inputDate) {
    if (1 <= inputDate && inputDate <= 25) {
      const discountPrice = 1000 + (inputDate - 1) * 100;
      return discountPrice;
    }
  },
  weekdayEvent(inputDate, inputMenuList) {
    if (
      (3 <= inputDate && inputDate <= 7) ||
      (10 <= inputDate && inputDate <= 14) ||
      (17 <= inputDate && inputDate <= 21) ||
      (24 <= inputDate && inputDate <= 28) ||
      inputDate == 31
    ) {
      const price = new CalcPrice(inputMenuList);
      const discountPrice = price.getWeekdayDiscount();
      return discountPrice;
    }
  },

  weekendEvent(inputDate, inputMenuList) {
    const weekendDiscountDates = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (weekendDiscountDates.includes(Number(inputDate))) {
      const price = new CalcPrice(inputMenuList);

      return price.getWeekendDiscount();
    }
  },
  //   isSpecialDiscountDay(inputDate) {
  //     const specialDiscountDates = [3, 10, 17, 24, 25, 31];
  //     return specialDiscountDates.includes(inputDate);
  //   },
  specialEvent(inputDate) {
    const specialDiscountDates = [3, 10, 17, 24, 25, 31];
    if (specialDiscountDates.includes(Number(inputDate))) {
      return true;
    }

    return false;
  },
};

export default Event;

import CalcPrice from "./CalcPrice.js";

const Event = {
  giftEvent(beforePrice) {
    if (beforePrice >= 120000) {
      return 25000;
    }
    return 0;
  },
  christmasEvent(inputDate) {
    if (1 <= inputDate && inputDate <= 25) {
      const discountPrice = 1000 + (inputDate - 1) * 100;
      return discountPrice;
    }
    return 0;
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
      return price.getWeekdayDiscount();
    }
    return 0;
  },

  weekendEvent(inputDate, inputMenuList) {
    const weekendDiscountDates = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (weekendDiscountDates.includes(Number(inputDate))) {
      const price = new CalcPrice(inputMenuList);
      return price.getWeekendDiscount();
    }
    return 0;
  },
  specialEvent(inputDate) {
    const specialDiscountDates = [3, 10, 17, 24, 25, 31];
    if (specialDiscountDates.includes(Number(inputDate))) {
      return 1000;
    }
    return 0;
  },
};

export default Event;

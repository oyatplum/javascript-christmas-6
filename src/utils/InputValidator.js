import { menuList } from "./menuList.js";
import { Console } from "@woowacourse/mission-utils";
export const InputValidator = {
  validDate(date) {
    if (!date) return false;
    if (isNaN(date)) return false;
    if (date < 1 || 31 < date) return false;
    return true;
  },

  validMenu(inputMenuList) {
    Console.print(inputMenuList);
    if (inputMenuList.some((item) => item.name === "")) return false;

    const menus = inputMenuList.every((menu) => {
      //메뉴판에 없는 경우
      return menuList.some((item) => item.name === menu.name);
    });
    if (!menus) return false;

    const menuNum = inputMenuList.every((menu) => {
      //메뉴 개수 1이상의 숫자
      return menu.quantity < 1 ? false : true;
    });
    if (!menuNum) return false;

    const names = inputMenuList.map((menu) => menu.name); // 중복 메뉴 있을 경우
    const uniqueNames = new Set(names);
    if (names.length !== uniqueNames.size) return false;

    const totalQuantity = inputMenuList.reduce((total, menu) => {
      //메뉴 최대 20개
      return total + Number(menu.quantity);
    }, 0);
    if (totalQuantity > 20) return false;

    const allBeverage = inputMenuList.every((menu) => {
      //음료만 주문시
      const beverage = menuList.find((item) => item.name === menu.name);
      return beverage.menu === "beverage" ? true : false;
    });
    if (allBeverage) return false;

    return true;
  },
  validPrice(inputMenuList) {
    const totalPrice = inputMenuList.reduce((total, menu) => {
      const menus = menuList.find((item) => item.name === menu.name);

      return total + Number(menus.price);
    }, 0);
    if (totalPrice < 10000) return false;

    return true;
  },
};

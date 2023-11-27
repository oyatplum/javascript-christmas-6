import { InputValidator } from "../src/utils/InputValidator";

describe("InputValidator Date Test", () => {
  test("날짜 입력하지 않은 경우", () => {
    const input = "";
    expect(InputValidator.validDate(input)).toBe(false);
  });
  test("날짜가 숫자가 아닌 경우", () => {
    const input = "날짜일까요?";
    expect(InputValidator.validDate(input)).toBe(false);
  });
  test("날짜 범위를 벗어난 경우", () => {
    const input = "33";
    expect(InputValidator.validDate(input)).toBe(false);
  });
});

describe("InputValidator Menu Test", () => {
  test("메뉴 입력하지 않은 경우", () => {
    const input = [{ name: "", quantity: "" }];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
  test("메뉴판에 없는 경우", () => {
    const input = [{ name: "무엇일까요", quantity: "1" }];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
  test("메뉴가 0개인 경우", () => {
    const input = [{ name: "타파스", quantity: "0" }];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
  test("메뉴가 중복되는 경우", () => {
    const input = [
      { name: "타파스", quantity: "1" },
      { name: "타파스", quantity: "2" },
    ];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
  test("메뉴가 20개 넘는 경우", () => {
    const input = [{ name: "타파스", quantity: "25" }];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
  test("메뉴가 모두 음료인 경우", () => {
    const input = [
      { name: "제로콜라", quantity: "1" },
      { name: "레드와인", quantity: "1" },
    ];
    expect(InputValidator.validMenu(input)).toBe(false);
  });
});

describe("InputValidator Price Test", () => {
  test("총 주문 금액이 10,000원 넘지 않는 경우", () => {
    const input = [
      { name: "제로콜라", quantity: "1" },
      { name: "아이스크림", quantity: "1" },
    ];
    expect(InputValidator.validPrice(input)).toBe(false);
  });
});

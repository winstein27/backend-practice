import { add } from "./string-calculator";

describe("add", () => {
  it("returns 0 from an empty string", () => {
    const sum = add("");
    expect(sum).toBe(0);
  });

  it("returns 1 from '1'", () => {
    const sum = add("1");
    expect(sum).toBe(1);
  });

  it("returns 3 from '1, 2'", () => {
    const sum = add("1, 2");
    expect(sum).toBe(3);
  });

  it("returns 20 from '10, 10", () => {
    const sum = add("10, 10");
    expect(sum).toBe(20);
  });

  it("returns 6 from '1, 2, 3", () => {
    const sum = add("1, 2, 3");
    expect(sum).toBe(6);
  });

  it("returns 55 from '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'", () => {
    const sum = add("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    expect(sum).toBe(55);
  });

  it("returns 6 from '1\n2,3'", () => {
    const sum = add("1\n2,3");
    expect(sum).toBe(6);
  });

  it("returns 6 from '//;\n1; 2; 3'", () => {
    const sum = add("//;\n1; 2; 3");
    expect(sum).toBe(6);
  });

  it("throws error when there is a negative number", () => {
    expect(() => add("1, -2")).toThrow("negatives not allowed: -2");
  });

  it("throws erros when there are negative numbers and show the negatives", () => {
    expect(() => add("1, -2, -3, 4, -5")).toThrow(
      "negatives not allowed: -2, -3, -5",
    );
  });

  it("must ignore numbers greater than 1000", () => {
    const sum = add("1, 2, 1000, 1001");
    expect(sum).toBe(1003);
  });
});

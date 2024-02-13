import formatTitle from "./formatTitle";

describe("formatTitle", () => {
  test("it should return an object with two properties", () => {
    const result = formatTitle("Hello World");
    expect(result).toHaveProperty("firstRow");
    expect(result).toHaveProperty("secondRow");
  });

  test("it should correctly split the title into two rows", () => {
    const result = formatTitle("Hello World");
    expect(result.firstRow).toBe("Hello World");
    expect(result.secondRow).toBeUndefined();
  });

  test("it should handle multi-word titles", () => {
    const result = formatTitle("The Quick Brown Fox");
    expect(result.firstRow).toBe("The Quick");
    expect(result.secondRow).toBe("Brown");
  });

  test("it should handle titles with more than three words", () => {
    const result = formatTitle("This Is A Long Title");
    expect(result.firstRow).toBe("This Is");
    expect(result.secondRow).toBe("A");
  });

  test("it should handle titles with fewer than three words", () => {
    const result = formatTitle("Short Title");
    expect(result.firstRow).toBe("Short Title");
    expect(result.secondRow).toBeUndefined();
  });
});

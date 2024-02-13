import formatCityName from "./formatCityName";

describe("formatCityName", () => {
  it("should return formatted city name with spaces replaced by dashes and lowercased", () => {
    const cityName = "New York";
    const formattedName = formatCityName(cityName);
    expect(formattedName).toBe("new-york");
  });

  it("should return formatted city name with accents removed", () => {
    const cityName = "São Paulo";
    const formattedName = formatCityName(cityName);
    expect(formattedName).toBe("sao-paulo");
  });

  it("should return formatted city name with special characters removed", () => {
    const cityName = "Los Ángeles";
    const formattedName = formatCityName(cityName);
    expect(formattedName).toBe("los-angeles");
  });

  it("should return same city name if it contains no spaces, accents, or special characters", () => {
    const cityName = "Berlin";
    const formattedName = formatCityName(cityName);
    expect(formattedName).toBe("berlin");
  });
});

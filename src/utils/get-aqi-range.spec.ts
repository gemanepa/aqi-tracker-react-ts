import getAqiRange from "./get-aqi-range";
import translations from "@/assets/i18n/en.json";

describe("getAqiRange", () => {
  it("should return correct AirQualityRangeInfo for given index within range", () => {
    const testData = [
      {
        index: 25,
        expected: {
          status: translations.body.airRanges["0-50"].status,
          description: translations.body.airRanges["0-50"].description,
          color: "green",
        },
      },
      {
        index: 75,
        expected: {
          status: translations.body.airRanges["51-100"].status,
          description: translations.body.airRanges["51-100"].description,
          color: "#D2B55B",
        },
      },
      {
        index: 125,
        expected: {
          status: translations.body.airRanges["101-150"].status,
          description: translations.body.airRanges["101-150"].description,
          color: "orange",
        },
      },
      {
        index: 175,
        expected: {
          status: translations.body.airRanges["151-200"].status,
          description: translations.body.airRanges["151-200"].description,
          color: "red",
        },
      },
      {
        index: 225,
        expected: {
          status: translations.body.airRanges["201-300"].status,
          description: translations.body.airRanges["201-300"].description,
          color: "darkred",
        },
      },
      {
        index: 350,
        expected: {
          status: translations.body.airRanges["301-500"].status,
          description: translations.body.airRanges["301-500"].description,
          color: "purple",
        },
      },
    ];

    testData.forEach(({ index, expected }) => {
      expect(getAqiRange(index)).toEqual(expected);
    });
  });

  it("should return correct AirQualityRangeInfo for invalid index", () => {
    const invalidIndex = -10; // Choose an index that doesn't fall into any range
    const expected = {
      status: translations.body.airRanges.invalid.status,
      description: translations.body.airRanges.invalid.description,
      color: "lightgray",
    };

    expect(getAqiRange(invalidIndex)).toEqual(expected);
  });
});

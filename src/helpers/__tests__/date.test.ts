import { formatDate } from "../date";

describe("date helpers", () => {
  it("should return formatted date when given date string with time component", () => {
    const dateString = "2022-01-31T12:34:56";
    const expected = "31-1-2022";
    const result = formatDate(dateString);
    expect(result).toEqual(expected);
  });

  it("should return formatted date string when given an invalid date string", () => {
    const dateString = "invalid-date-string";
    const expected = "NaN-NaN-NaN";
    const result = formatDate(dateString);
    expect(result).toEqual(expected);
  });
});

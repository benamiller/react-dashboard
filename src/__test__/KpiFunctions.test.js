import { test, expect } from "@jest/globals";
import { ConversionRate, getYtdValue } from "../utils/functions/KpiFunctions";
import { formatMoneyValue } from "../utils/functions/formattingFunctions";

test("Conversion Rate will calculate correctly", () => {
  let interactions = 1000;
  let conversion = 200;

  let Rate = ConversionRate(interactions, conversion);

  expect(Rate).toEqual("20%");
});

test("Year to Date value is Returned Correctly", async () => {
  // ARRANGE
  let salesData = [
    {
      time: "apr",
      ly: 5000,
      ytd: 3000,
    },
    {
      time: "may",
      ly: 4520,
      ytd: 5000,
    },
    {
      time: "may",
      ly: 4520,
      ytd: 5000,
    },
  ];

  // ACT
  let totalValue = getYtdValue(salesData);

  // ASSERT
  expect(totalValue).toEqual(13000);
});

test("US money value is formatted correctly", async () => {
  // ARRANGE
  let money = 12345;
  let moreMoney = 12345434;

  expect(formatMoneyValue(money, "us")).toEqual("$12,345");
  expect(formatMoneyValue(moreMoney, "us")).toEqual("$12,345,434");
});

test("no currency country specified formatted is formatted as US", async () => {
  // ARRANGE
  let money = 12345;
  let moreMoney = 12345434;

  expect(formatMoneyValue(money)).toEqual("$12,345");
  expect(formatMoneyValue(moreMoney)).toEqual("$12,345,434");
});

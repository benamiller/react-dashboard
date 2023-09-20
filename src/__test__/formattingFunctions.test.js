import { test, expect } from "@jest/globals";
import {
  formatMoneyValue,
  formatPercentage,
  formatPhoneNumber,
} from "../utils/functions/formattingFunctions";

test("Formats a money value with proper comma placement for US currency", async function () {
  let hundred = 358;
  let thousands = 1200;
  let hundredThousands = 123456;
  let millions = 1234567;

  expect(formatMoneyValue(thousands)).toEqual("$1,200");
  expect(formatMoneyValue(hundred)).toEqual("$358");
  expect(formatMoneyValue(hundredThousands)).toEqual("$123,456");
  expect(formatMoneyValue(millions)).toEqual("$1,234,567");
});

test("Formats number with percentage symbol", async function () {
  let percentNumber = 85;

  expect(formatPercentage(percentNumber)).toBe("85%");
});

test("Formats a us phone number with dashes", async function () {
  let sevenDigit = 1234567;
  let tenDigit = 1234567890;

  expect(formatPhoneNumber(sevenDigit)).toEqual("123-4567");
  expect(formatPhoneNumber(tenDigit)).toEqual("123-456-7890");
});

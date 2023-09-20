/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import KpiBlock from "../components/base/KpiBlock";

test("displays positive colour of the value to the user when greater than the target value", async () => {
  render(
    <KpiBlock
      svgComponent={null}
      title="conversion"
      time="today"
      value="19%"
      targetValue={4}
    />
  );

  let displayedValue = await screen.getByText("19%");

  expect(displayedValue.className).toContain("text-blue-900");
});

test("displays negative colour of the value to the user when less than the target value", async () => {
  render(
    <KpiBlock
      svgComponent={null}
      title="conversion"
      time="today"
      value="19%"
      targetValue={20}
    />
  );

  let displayedValue = await screen.getByText("19%");

  expect(displayedValue.className).toContain("text-fuchsia-800");
});

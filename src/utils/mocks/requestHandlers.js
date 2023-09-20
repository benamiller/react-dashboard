import { rest } from "msw";
import { dailyKpiMockData, employeesMock } from "./dataset";

export const handlers = [
  // START OF HOME PAGE MOCK API CALLS
  rest.get(`https://dashboard.mthree.academy/daily/kpis`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dailyKpiMockData));
  }),

  rest.get(
    `https://dashboard.mthree.academy/daily/employees`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(employeesMock));
    }
  ),
  // END OF HOME PAGE MOCK API CALLS

  //START OF REVIEWS MOCK API CALLS

  // END OF REVIEWS MOCK API CALLS

  //START OF SALES PAGE MOCK API CALLS

  //END OF SALES PAGE MOCK API CALLS
];

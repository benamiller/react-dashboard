import { useEffect, useState } from 'react';
import AreaGraph from '../base/AreaGraph';
import PieGraph from '../base/PieGraph';
import Table from '../base/Table';
import DropDown from '../base/DropDown';
import { formatPercentage } from '../../utils/functions/formattingFunctions';

function Reviews() {
  const [category, setCategory] = useState("CSAT");
  const [demoCategory, setDemoCategory] = useState("Gender");
  const [reviews, setReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({
    totals: {
      csat: 0,
      nps: 0,
    },
    demographics: {
      gender: [],
      age: [],
    },
    csat: [{ time: "", ly: 0, ytd: 0 }],
    nps: [{ time: "", ly: 0, ytd: 0 }],
  });

  useEffect(() => {
    fetchData("stats", setReviewStats);
    fetchData("all", setReviews);
  }, []);

  async function fetchData(urlPath, setFunc) {
    try {
      let response = await fetch(`https://dashboard.mthree.academy/reviews/${urlPath}`);
      let resData = await response.json();
      setFunc(resData);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="grid pl-14 grid-cols-2 grid-rows-2 h-screen gap-8 w-4/5 m-auto mt-4 mb-8">
      <AreaGraph
        data={category === "CSAT" ? reviewStats.csat : reviewStats.nps}
        totalValue={
          category === "CSAT"
            ? formatPercentage(reviewStats.totals.csat)
            : formatPercentage(reviewStats.totals.nps)
        }
        label={category === "CSAT" ? "Customer Satisfaction Score" : "Net Promoter Score"}
        categoryToggle={
          <DropDown
            list={["CSAT", "NPS"]}
            parentStateSelect={category}
            setParentStateSelect={setCategory}
          />
        }
        columnsSpan="col-span-1"
      />

      <PieGraph
        data={
          demoCategory === "Gender"
            ? reviewStats.demographics.gender
            : reviewStats.demographics.age
        }
        colors={
          demoCategory === "Gender"
            ? ["#86198F", "#02155E", "#D1D5DB"]
            : ["#86198F", "#02155E", "#D1D5DB", "#743BA0", "#468FCB", "#4B5563"]
        }
        label="Demographics"
        categoryToggle={
          <DropDown
            list={["Gender", "Age"]}
            parentStateSelect={demoCategory}
            setParentStateSelect={setDemoCategory}
          />
        }
        columnsSpan="col-span-1"
      />

      <Table
        tableHeaders={[
          "Name",
          "Email",
          "Date",
          "Overall Satisfaction",
          "Promoter Score",
          "Was Helped",
          "Comments",
        ]}
        tableData={reviews}
        gridLayout="col-span-2 place-self-center"
      />
    </main>
  );
}

export default Reviews;

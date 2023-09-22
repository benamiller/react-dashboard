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

  return ();
}

export default Reviews;

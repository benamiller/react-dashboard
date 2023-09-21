import { useEffect, useState } from "react";
import KpiBlock from "../base/KpiBlock";
import KpiGrid from "../base/KpiGrid";
import AreaGraph from "../base/AreaGraph";
import Table from "../base/Table";
import {
  ConversionRate,
  getYtdValue,
} from "../../utils/functions/KpiFunctions";
import { formatMoneyValue } from "../../utils/functions/formattingFunctions";
import {
  CheckCircleIcon,
  ShoppingBagIcon,
  GiftIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";

function Home() {
  const [dailyKpis, setDailyKpis] = useState({
    sales: "0",
    transations: "0",
    units: "0",
    traffic: [],
  });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData("/kpis", setDailyKpis);
    fetchData("/employees", setEmployees);
  }, []);

  async function fetchData(urlPath, setFunc) {
    try {
      let response = await fetch(`https://dashboard.mthree.academy/daily/${urlPath}`);
      let resData = await response.json();
      setFunc(resData);
    catch (e) {
      console.error(e);
    }
  };

  return ();
}

export default Home;

import { useState, useEffect } from "react";
import KpiGrid from "../base/KpiGrid";
import KpiBlock from "../base/KpiBlock";
import AreaGraph from "../base/AreaGraph";
import BarGraph from "../base/BarGraph";
import DropDown from "../base/DropDown";
import {
  getYtdValue,
  ConversionRate,
  getYearAds,
  getYearUpt,
} from "../../utils/functions/KpiFunctions";
import {
  formatLargeNumbers,
  formatMoneyValue,
} from "../../utils/functions/formattingFunctions";
import {
  CheckCircleIcon,
  ShoppingBagIcon,
  GiftIcon,
} from "@heroicons/react/solid";
import PeopleSvg from "../../assets/PeopleSvg";

function Sales() {
  const [category, setCategory] = useState("ADS");
  const [salesTotals, setSalesTotals] = useState({
    ytdTotals: {
      traffic: 0,
      transactions: 0,
      units: 0,
    },
    sales: [],
    ads: [],
    upt: [],
  });

  useEffect(() => {
    fetchData("sales", setSalesTotals);
  }, []);

  async function fetchData(urlPath, setFunc) {
    try {
      let response = await fetch(
        `https://dashboard.mthree.academy/year/${urlPath}`
      );
      let resData = await response.json();
      setFunc(resData);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="grid pl-14 grid-cols-2 grid-rows-2 h-screen gap-8 w-4/5 m-auto mt-4 mb-8">
      <AreaGraph
        data={salesTotals.sales}
        totalValue={formatMoneyValue(getYtdValue(salesTotals.sales))}
        label="Sales YTD"
        columnsSpan="col-span-2"
      />

      <KpiGrid>
        <KpiBlock
          svgComponent={<CheckCircleIcon className="h-6 w-6" />}
          title="conversion"
          time="today"
          value={ConversionRate(
            salesTotals.ytdTotals.traffic,
            salesTotals.ytdTotals.transactions
          )}
          targetValue={20}
        />
        <KpiBlock
          svgComponent={<PeopleSvg className="w-6 h-6" />}
          title="traffic"
          time="YTD"
          value={formatLargeNumbers(salesTotals.ytdTotals.traffic)}
          targetValue={20000}
        />
        <KpiBlock
          svgComponent={<ShoppingBagIcon className="w-6 h-6" />}
          title="transactions"
          time="YTD"
          value={formatLargeNumbers(salesTotals.ytdTotals.transactions)}
          targetValue={5000}
        />
        <KpiBlock
          svgComponent={<GiftIcon className="w-6 h-6" />}
          title="units"
          time="YTD"
          value={formatLargeNumbers(salesTotals.ytdTotals.units)}
          targetValue={10000}
        />
      </KpiGrid>

      <BarGraph
        data={category === "ADS" ? salesTotals.ads : salesTotals.upt}
        totalValue={
          category === "ADS"
            ? formatMoneyValue(
                getYearAds(
                  getYtdValue(salesTotals.sales),
                  salesTotals.ytdTotals.transactions
                )
              )
            : getYearUpt(
                salesTotals.ytdTotals.units,
                salesTotals.ytdTotals.transactions
              )
        }
        label={
          category === "ADS" ? "Average Dollar Sale" : "Units Per Transaction"
        }
        categoryToggle={
          <DropDown
            list={["ADS", "UPT"]}
            parentStateSelect={category}
            setParentStateSelect={setCategory}
          />
        }
        columnsSpan="col-span-1"
      />
    </main>
  );
}

export default Sales;

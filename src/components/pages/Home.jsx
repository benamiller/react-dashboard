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
      let response = await fetch(
        `https://dashboard.mthree.academy/daily/${urlPath}`
      );
      let resData = await response.json();
      setFunc(resData);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="grid pl-14 grid-cols-2 gap-8 w-4/5 m-auto mt-4 mb-8">
      <KpiGrid>
        <KpiBlock
          svgComponent={<CheckCircleIcon className="h-6 w-6" />}
          title="conversion"
          time="today"
          value={ConversionRate(
            getYtdValue(dailyKpis.traffic),
            dailyKpis.transactions
          )}
          targetValue={20}
        />
        <KpiBlock
          svgComponent={<CurrencyDollarIcon className="h-6 w-6" />}
          title="sales"
          time="today"
          value={formatMoneyValue(dailyKpis.sales)}
          targetValue={5300}
        />
        <KpiBlock
          svgComponent={<ShoppingBagIcon className="h-6 w-6" />}
          title="transactions"
          time="today"
          value={dailyKpis.transactions}
          targetValue={104}
        />
        <KpiBlock
          svgComponent={<GiftIcon className="h-6 w-6" />}
          title="units"
          time="today"
          value={dailyKpis.units}
          targetValue={84}
        />
      </KpiGrid>

      <AreaGraph
        data={dailyKpis.traffic}
        totalValue={getYtdValue(dailyKpis.traffic)}
        label="traffic"
        categoryToggle={null}
        columnsSpan="col-span-1"
      />

      <Table
        tableHeaders={[
          "Name",
          "Email",
          "Employee Number",
          "Role",
          "Phone Number",
          "Zone",
        ]}
        tableData={employees}
        gridLayout="col-span-2 place-self-center"
        dropDownOptions={["Leader", "Cashier", "Stock", "Greeter", "Middle"]}
        dropDownState={null}
        setDropDownState={null}
      />
    </main>
  );
}

export default Home;

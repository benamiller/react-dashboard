import { useState, useEffect } from 'react';
import KpiGrid from '../base/KpiGrid';
import KpiBlock from '../base/KpiBlock';
import AreaGraph from '../base/AreaGraph';
import BarGraph from '../base/BarGraph';
import DropDown from '../base/DropDown';
import {
  formatLargeNumbers,
  formatMoneyValue,
} from '../../utils/functions/formattingFunctions';
import {
  CheckCircleIcon,
  ShoppingBagIcon,
  GiftIcon,
} from '@heroicons/react/solid';
import peopleSvg from '../../assets/PeopleSvg';

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

  return ();
};

export default Sales;

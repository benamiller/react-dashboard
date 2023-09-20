export function ConversionRate(interaction, conversion) {
  return `${Math.round((conversion / interaction) * 100)}%`;
}

export function getYtdValue(data) {
  var totalValue = 0;
  console.log(data);
  if (data.length != 0 || data != 0 || data != null) {
    data.forEach((element) => {
      totalValue = totalValue + element.ytd;
    });
  }

  return totalValue;
}

export function getYearAds(netSales, netTransactions) {
  return Math.round(netSales / netTransactions);
}

export function getYearUpt(netUnitsSold, netTransactions) {
  return Math.round(100 * (netUnitsSold / netTransactions)) / 100;
}

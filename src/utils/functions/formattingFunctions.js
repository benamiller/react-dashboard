export function formatPhoneNumber(phoneNumber) {
  if (phoneNumber == null) {
    return;
  }

  var cleanedString = phoneNumber.toString().replace(/[^A-Za-z0-9]+/g, "");

  if (cleanedString.length <= 3) {
    return cleanedString;
  } else if (cleanedString.length <= 7) {
    return `${cleanedString.slice(0, 3)}-${cleanedString.slice(3)}`;
  } else {
    return `${cleanedString.slice(0, 3)}-${cleanedString.slice(
      3,
      6
    )}-${cleanedString.slice(6, 10)}`;
  }
}

export function formatMoneyValue(total, currency) {
  if (currency == null || currency == "us") {
    let totalWithCommas = total
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${totalWithCommas}`;
  }
}

export function formatPercentage(total) {
  return `${total}%`;
}

export function formatLargeNumbers(number) {
  let numberWithCommas = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberWithCommas;
}

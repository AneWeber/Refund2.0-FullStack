export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  })

  return currency.format(value).replace("€", "")
}
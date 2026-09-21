type Currency = "NPR" | "USD";
type PaymentMethod = "esewa" | "khalti" | "cash";
type OrderStatus = "pending" | "preparing" | "delivered" | "cancelled";

function formatAmount(amount: number, currency: Currency): string {
  if(currency === "NPR") {
    return `Rs ${amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }
  return amount.toFixed(2)
}

console.log(formatAmount(1499.5, "NPR"));

console.log(formatAmount(14.5, "USD"));

// formatAmount(14.5, "EUR");

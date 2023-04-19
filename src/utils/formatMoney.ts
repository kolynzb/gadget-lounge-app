/**
 * Formats a number representing money to a string with commas for thousands separator.
 * @param money - The number representing money without commas.
 * @returns A string with commas for thousands separator.
 * @example
 * ```
 * const moneyValue = 4000000;
 * const formattedMoney = formatMoney(moneyValue);
 * console.log(formattedMoney); // Output: "4,000,000"
 * ```
 */
function formatMoney(money: number): string | number {
  if (!money) return money;
  // Convert the number to a string and reverse it
  const reversedString = money.toString().split('').reverse().join('');

  // Insert commas every 3 characters
  const formattedString = reversedString.replace(/(\d{3})(?!$)/g, '$1,');

  // Reverse the string back and return
  return formattedString.split('').reverse().join('');
}

export default formatMoney;

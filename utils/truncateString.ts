/**
 * Shorten Number of characters in a string
 * @param  {[number]} string [String To be shortened/truncated]
 * @param  {[boolean]} n [Number of charators]
 * @return {[number]}      [Returns a Truncated String]
 */
const truncateString = (string: string, n: number) => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
};

export default truncateString;

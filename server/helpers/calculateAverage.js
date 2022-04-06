// Mitch wrote this to help with reviews logic
module.exports = (ratings) => {
  let average = 0;
  let total = 0;
  let weightedTotal = 0;
  for (let key in ratings) {
    let starCount = parseInt(key);
    let count = parseInt(ratings[key]);
    total += count;
    weightedTotal += count * starCount;
  }
  average = Math.round((weightedTotal / total) * 10) / 10;
  return {total, average};
}
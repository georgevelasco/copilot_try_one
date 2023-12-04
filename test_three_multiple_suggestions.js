//Click control + enter to see other suggestions

function CacluateDaysBetweenDates(begin, end) {
  var beginDate = new Date(begin);
  var endDate = new Date(end);
  return Math.round((endDate - beginDate) / (1000 * 60 * 60 * 24));
}
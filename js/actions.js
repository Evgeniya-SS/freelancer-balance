const comparator = (a, b) => (a.month > b.month) ? 1 : ((b.month > a.month) ? -1 : 0);

renderData (
  'row',
  'totals',
  'minIncome',
  'maxIncome',
  'minExpense',
  'maxExpense',
  account.sort(comparator),
  months,
);
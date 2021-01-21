export type PoolSummary = {
  pledge: number,
  ticker: string,
  fee: number,
  rank: number,
  fixed: number,
}
const summaryUrl = (id: string) => `https://js.adapools.org/pools/${id}/summary.json`
export const getPoolData = (id: string) =>
  fetch(summaryUrl(id))
    .then(r => r.json())
    .then(({ data: {pledge, db_ticker, tax_ratio, rank, tax_fix}  }) =>
      ({pledge, ticker: db_ticker, fee: tax_ratio, rank, fixed: tax_fix}))

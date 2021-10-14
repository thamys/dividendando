// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import transactions from '../../mock/transactions'

export default function getTransactions(
  req: NextApiRequest,
  res: NextApiResponse
) {

  res.status(200).json(JSON.stringify(transactions))
}

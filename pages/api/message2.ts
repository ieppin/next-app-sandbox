import type { NextApiRequest, NextApiResponse } from 'next'

export type Message2Res = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message2Res>
) {
  res.status(200).json({ message: 'Message from API 2' })
}
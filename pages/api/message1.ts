import type { NextApiRequest, NextApiResponse } from 'next'

export type Message1Res = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message1Res>
) {
  res.status(200).json({ message: 'Message from API 1' })
}
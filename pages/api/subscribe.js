import { subscribeUser } from '../../utils/mailchimp'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      const response = await subscribeUser(email)
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ error: 'Unable to subscribe user' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

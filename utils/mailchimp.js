const mailchimp = require('@mailchimp/mailchimp_marketing')

const apiKey = process.env.MAILCHIMP_API_KEY
const listId = process.env.MAILCHIMP_LIST_ID
const serverPrefix = 21

mailchimp.setConfig({
  apiKey: apiKey,
  server: `us${serverPrefix}`, // Adjust the server prefix based on your API key
})

export const subscribeUser = async (email) => {
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    })

    return response
  } catch (error) {
    console.error('Mailchimp subscription error:', error)
    throw error
  }
}

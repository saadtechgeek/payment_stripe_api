// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')('sk_test_51Hw43jD4nu4HBHFElZZlL4KQ2FmKstncpopkcyUX7TqcXJo79VjkPma3ELAtCe2F70jVQf9u1ZWidwKOpC8AIke400bljIAxpj');

exports.handler = async (event, context) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

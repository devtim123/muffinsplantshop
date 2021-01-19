/**
 * @docs https://docs.mollie.com/reference/v2/payments-api/create-payment
 */
const { createMollieClient } = require("@mollie/api-client")

const mollieClient = createMollieClient({
  apiKey: "test_Ruc8KEWFTt4984raVWw7gcyys9g2cE",
})

const createPayment = async () => {
  try {
    const payment = await mollieClient.payments.create({
      amount: {
        currency: "EUR",
        value: "10.00", // You must send the correct number of decimals, thus we enforce the use of strings
      },
      description: "My first payment",
      redirectUrl: "https://webshop.example.org/order/12345/",
      webhookUrl: "https://webshop.example.org/payments/webhook/",
      metadata: {
        order_id: "12345",
      },
    })
    console.log(payment)
    console.log(payment.getPaymentUrl())
    return payment;
  } catch (error) {
    console.warn(error)
  }
}

exports.handler = async function (event) {
  const { items, shipping, state } = JSON.parse(event.body)

  const paymentIntent = await createPayment()

  return {
    statusCode: 200,
    body: JSON.stringify(paymentIntent),
  }
}

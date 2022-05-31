/* eslint-disable no-undef */
// with thanks https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js
const process = require("process");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const db = require("../../../firebase/admin").dbAdmin;

const handler = async function (event) {
  const body = JSON.parse(event.body);
  const docRef = db.collection("cleaners").doc(body.cleanerId);
  const docData = await docRef.get();
  const { name, image, email } = docData.data();

  console.log(body);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["ES"],
    },
    success_url: `${process.env.URL}/checkout/success`,
    cancel_url: `${process.env.URL}/checkout/cancel`,
    customer_email: body.customerEmail,
    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: body.price,
          product_data: {
            name,
            images: [image],
          },
        },
        quantity: body.hours,
      },
    ],
    metadata: {
      cleanerId: body.cleanerId,
      customerId: body.customerId,
      cleanerEmail: email,
      customerEmail: body.customerEmail,
      startDate: body.startDate,
      endDate: body.startDate + body.hours * 3600000,
      total: body.price * body.hours,
      hours: body.hours,
    },
  });
  // We are using the metadata to track which items were purchased.
  // We can access this meatadata in our webhook handler to then handle
  // the fulfillment process.
  // In a real application you would track this in an order object in your database.

  return {
    statusCode: 200,

    body: JSON.stringify({
      sessionId: session.id,
      sessionUrl: session.url,
      name,
    }),
  };
};

module.exports = { handler };

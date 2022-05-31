/* eslint-disable no-undef */
const process = require("process");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const firebase = require("firebase-admin");
const db = require("../../../firebase/admin").dbAdmin;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;

      const {
        customerId,
        cleanerId,
        startDate,
        endDate,
        total,
        cleanerEmail,
        hours,
      } = eventObject.metadata;

      const cleanerRef = db.collection("cleaners").doc(cleanerId);
      const cleanerData = await cleanerRef.get(cleanerId);

      const startDateObject = new Date(parseInt(startDate, 10));
      const formattedStartDate = new Intl.DateTimeFormat("es").format(
        startDateObject
      );

      await db
        .collection("works")
        .doc(eventObject.id)
        .set({
          customerId,
          cleanerId,
          startDate: firebase.firestore.Timestamp.fromMillis(startDate),
          endDate: firebase.firestore.Timestamp.fromMillis(endDate),
          checkoutDate: firebase.firestore.Timestamp.fromDate(new Date()),
          address: eventObject.shipping.address,
          total,
        });
      const customerMsg = {
        to: eventObject.customer_email,
        from: process.env.EMAIL_FROM,
        subject: "Servicio contratado en Clean2Home",
        text: `¡Enhorabuena ${
          eventObject.customer_details.name
        }!\n Gracias por contratar un servicio en Clean2Home, has contratado a ${
          cleanerData.data().name
        } el dia ${formattedStartDate} \n
        Un saludo, el equipo de Clean2Home`,
      };
      const cleanerMsg = {
        to: cleanerEmail,
        from: process.env.EMAIL_FROM,
        subject: "¡Enhorabuena! Han contratado tus servicios en Clean2Home",
        text: `Hola ${cleanerData.data().name}. \n ${
          eventObject.customer_details.name
        } ha contratado tus servicios el día ${formattedStartDate} durante ${hours} horas. El precio total del servicio es de ${(
          total / 100
        ).toFixed(2)}€ \n
         Un saludo, el equipo de Clean2Home`,
      };
      await sgMail.send(customerMsg);
      await sgMail.send(cleanerMsg);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};

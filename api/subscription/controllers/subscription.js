'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const stripe  = require('stripe')(strapi.config.get('server.stripe'));


module.exports = {
  create: async (ctx) => {
    const customer = ctx.state.user.stripeCustomerId
    const { paymentMethodId, priceId: price }  = ctx.request.body

    console.log('subscription create', {customer, paymentMethodId, price})

    try {
      await stripe.paymentMethods.attach(paymentMethodId, { customer })
    } catch (error) {
      return error
    }

    await stripe.customers.update(
      customer,
      {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      }
    )


    const subscription = await stripe.subscriptions.create({
      customer,
      items: [{ price }],
      expand: ['latest_invoice.payment_intent'],
    });

    console.log(subscription)

    return ctx.send(subscription)
  },
}

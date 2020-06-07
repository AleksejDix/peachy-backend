'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe  = require('stripe')(strapi.config.get('server.stripe'));

module.exports = {
  create: async(ctx) => {
    try {
      const {email: receipt_email, amount} = ctx.request.body

      const response = await stripe.paymentIntents.create({
        amount,
        currency: 'chf',
        payment_method_types: ['card'],
        receipt_email,
      });
      return response
    } catch (error) {
      return error
    }
  }
};

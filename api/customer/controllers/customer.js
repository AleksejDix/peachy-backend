'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe  = require('stripe')(strapi.config.get('server.stripe'));

module.exports = {
  create: async(ctx) => {
    try {
      const { email, name, id, stripeCustomerId } = ctx.state.user

      if (stripeCustomerId) return ctx.created(id)

      const stripeRepsonse = await stripe.customers.create({ email, name });
      const response = await strapi.services.customer.update(
        {id},
        {stripeCustomerId: stripeRepsonse.id}
      )

      return ctx.created(id)
    } catch (error) {
      return error
    }
  }
};

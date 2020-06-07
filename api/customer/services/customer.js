'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async update(params, data) {
    try {
      const entry = await strapi.plugins[
        'users-permissions'
      ].services.user.edit(params, data)
      return entry
    } catch (error) {
      return error
    }
  },
}

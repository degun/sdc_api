'use strict';

/**
 * Table.js controller
 *
 * @description: A set of functions called "actions" for managing `Table`.
 */

module.exports = {

  /**
   * Retrieve table records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.table.search(ctx.query);
    } else {
      return strapi.services.table.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a table record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.table.fetch(ctx.params);
  },

  /**
   * Count table records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.table.count(ctx.query);
  },

  /**
   * Create a/an table record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.table.add(ctx.request.body);
  },

  /**
   * Update a/an table record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.table.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an table record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.table.remove(ctx.params);
  }
};

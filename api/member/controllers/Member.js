'use strict';

/**
 * Member.js controller
 *
 * @description: A set of functions called "actions" for managing `Member`.
 */

module.exports = {

  /**
   * Retrieve member records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.member.search(ctx.query);
    } else {
      return strapi.services.member.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a member record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.member.fetch(ctx.params);
  },

  /**
   * Count member records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.member.count(ctx.query);
  },

  /**
   * Create a/an member record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.member.add(ctx.request.body);
  },

  /**
   * Update a/an member record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.member.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an member record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.member.remove(ctx.params);
  }
};

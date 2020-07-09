'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.stories.search(ctx.query);
    } else {
      entities = await strapi.services.stories.find(ctx.query);
    }

    return entities.map(entity => {
      const stories = sanitizeEntity(entity, {
        model: strapi.models.stories,
      });
      if (stories.id) {
        delete stories.id;
      }
      if (stories.category && stories.category.id) {
        delete stories.category.id;
      }
      if (stories.category && stories.category.created_at) {
        delete stories.category.created_at;
      }
      if (stories.category && stories.category.story) {
        delete stories.category.story;
      }
      if (stories.category && stories.category.updated_at) {
        delete stories.category.updated_at;
      }
      if (stories.user && stories.user.id) {
        delete stories.user.id;
      }
      if (stories.user && stories.user.provider) {
        delete stories.user.provider;
      }
      if (stories.user && stories.user.confirmed) {
        delete stories.user.confirmed;
      }
      if (stories.user && stories.user.blocked) {
        delete stories.user.blocked;
      }
      if (stories.user && stories.user.role) {
        delete stories.user.role;
      }
      if (stories.user && stories.user.created_at) {
        delete stories.user.created_at;
      }
      if (stories.user && stories.user.updated_at) {
        delete stories.user.updated_at;
      }
      if (stories.cover && stories.cover.id) {
        delete stories.cover.id;
      }
      if (stories.cover && stories.cover.created_at) {
        delete stories.cover.created_at;
      }
      if (stories.cover && stories.cover.updated_at) {
        delete stories.cover.updated_at;
      }
      if (stories.cover && stories.cover.provider) {
        delete stories.cover.provider;
      }
      return stories;
    });
  },
};

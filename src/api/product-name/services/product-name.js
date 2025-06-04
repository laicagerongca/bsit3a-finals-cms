'use strict';

/**
 * product-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-name.product-name');

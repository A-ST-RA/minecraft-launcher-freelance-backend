'use strict';

/**
 * launcher-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::launcher-information.launcher-information');

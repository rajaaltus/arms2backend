"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.programme.create(data, { files });
    } else {
      entity = await strapi.services.programme.create(ctx.request.body);
    }
    // console.log(ctx.request.body);
    // await strapi.plugins["email"].services.email.send({
    //   to: "rajaaltus@gmail.com",
    //   from: "info@virginiaexim.com",
    //   replyTo: "info@virginiaexim.com",
    //   subject: "You have created new Record",
    //   text: "You have created a new Record in Activities/Programmes! Activity Name: " + ctx.request.body.name,
    // });
    // ctx.send("Email Sent!");
    return sanitizeEntity(entity, { model: strapi.models.programme });
  },
};

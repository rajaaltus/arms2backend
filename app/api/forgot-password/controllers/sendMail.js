const { default: createStrapi } = require("strapi");

module.exports = {
  index: async (ctx) => {
    if (ctx.request.body.email === "") {
      return ctx.send("Email id required!");
    }
    await strapi.plugins["email"].services.email.send({
      to: ctx.request.body.email,
      from: "info@virginiaexim.com",
      replyTo: "info@virginiaexim.com",
      subject: "ARMS - forgot password Service",
      text: "You have requested to send back your forgot password!",
    });
    ctx.send("Password sent!");
  },
};

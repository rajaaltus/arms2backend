module.exports = {
  index: async (ctx) => {
    await strapi.plugins["email"].services.email.send({
      to: "rajaaltus@gmail.com",
      from: "info@virginiaexim.com",
      replyTo: "info@virginiaexim.com",
      subject: "You have created new Record",
      text: "You have created a new Record in Activities/Programmes!",
    });
    ctx.send("Email Sent!");
  },
};

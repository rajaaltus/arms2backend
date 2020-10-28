module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "publicn@nimhans.ac.in",
      defaultReplyTo: "publicn@nimhans.ac.in",
    },
  },
});

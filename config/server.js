module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://092fc490ab51.ngrok.io",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d4990afb1882a4903cefaacb35dd18f4"),
    },
  },
});

export default {
  providers: [
    {
      domain: process.env.VITE_KINDE_DOMAIN,
      applicationID: process.env.VITE_KINDE_CLIENT_ID,
    },
  ],
};

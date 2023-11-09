export default {
  providers: [
    {
      domain: import.meta.env.VITE_KINDE_DOMAIN,
      applicationID: import.meta.env.VITE_KINDE_CLIENT_ID,
    },
  ],
};

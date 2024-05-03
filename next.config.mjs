import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  extendDefaultRuntimeCaching: true,
  dest: "public/pwa/dest",
  customWorkerSrc: "public/pwa/",
  customWorkerDest: "public/pwa/dest", // defaults to `dest`
  customWorkerPrefix: "",
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  // workboxOptions: {
  //   disableDevLogs: true,
  // },
});

export default withPWA({
  // Your Next.js config
});


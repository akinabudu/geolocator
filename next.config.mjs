import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  disable:false,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: false,
  swcMinify: true,
  extendDefaultRuntimeCaching: true,
  dest: "public",
  customWorkerSrc: "src/worker",
  // customWorkerDest: "public/", // defaults to `dest`
  // customWorkerPrefix: "",
  // fallbacks: {
  //   //image: "/static/images/fallback.png",
    //  document: "/", // if you want to fallback to a custom page rather than /_offline
  //   // font: '/static/font/fallback.woff2',
  //   // audio: ...,
  //   // video: ...,
  // },
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA({
  // Your Next.js config
});


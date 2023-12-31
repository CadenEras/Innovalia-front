/**@format*/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://1625e527a40d415c88cbe4d4bf358c3b@o1107556.ingest.sentry.io/6255058",

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,

	// ...

	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
});

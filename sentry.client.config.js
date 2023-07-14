/**@format*/

import * as Sentry from "@sentry/nextjs";
import * as Tracings from "@sentry/browser";

Sentry.init({
	dsn: "https://3b0bf07bd962456aba05708834576bd8@o1107556.ingest.sentry.io/4505529712050176",
	integrations: [
		//new Sentry.BrowserTracing(),
		new Tracings.Replay(),
		new Tracings.BrowserTracing()
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
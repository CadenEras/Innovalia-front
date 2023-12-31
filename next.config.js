/**@format*/
/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
	//reactStrictMode: false
	// Optional build-time configuration options
	sentry: {
		// See the sections below for information on the following options:
		hideSourceMaps: true,
		//transpileClientSDK: true,
		tunnelRoute: "/monitoring-tunnel",
	},
};

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, configFile, stripPrefix, urlPrefix, include, ignore

	org: "melissa-gries",
	project: "caden-san",

	// An auth token is required for uploading source maps.
	// You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
	// The token must have `project:releases` and `org:read` scopes for uploading source maps
	authToken: process.env.SENTRY_AUTH_TOKEN,

	silent: true, // Suppresses all logs

	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// If you're using a next.config.mjs file:
// export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// Karma configuration
// Generated on Mon Apr 08 2019 15:05:19 GMT+0300 (Eastern European Summer Time)

let oneTestName = process.env.NODE_TEST;
let custom_files = [];
if (oneTestName !== undefined) {
	custom_files = [
		{ pattern: "src/**/*.+(js|ts)" },
	] ;
} else {
	custom_files = [
		{ pattern: "src/**/*.+(js|ts)" },
		{ pattern: "test/**/*.ts" }
	] ;
}


module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ["jasmine", "karma-typescript", "fixture"],//karma-typescrip

		client: {
			jasmine: {
				random: false
			},
			args: [process.env.NODE_GEN],
		},

		// list of files / patterns to load in the browser
		files: custom_files,


		// list of files / patterns to exclude
		exclude: [
			"examples/**/*.*"
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"src/**/*.+(js|ts)": ["karma-typescript"],
			"test/**/*.ts": ["karma-typescript"]
		},

		karmaTypescriptConfig: {
			compilerOptions: {
				allowJs: true,
				allowSyntheticDefaultImports: true, 
			},
			exclude: ["examples/"]
		},



		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ["progress", "dots", "karma-typescript"], //'progress', , ["dots", "karma-typescript"],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		// browsers: ["Chrome"],
		browsers: ["chrome_without_security"],

		customLaunchers: {
			// needed for the WellDataAccessor checking (skips CORS policy check)
			// NOTE: works only under AWS
			chrome_without_security: {
				base: "Chrome",
				flags: ["--disable-web-security"],
				displayName: "Chrome w/o security"
			}
		},


		captureTimeout: 60000,
		browserDisconnectTimeout : 10000,
		browserDisconnectTolerance : 1,
		browserNoActivityTimeout : 60000,//by default 10000


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		//concurrency: Infinity
	})
};

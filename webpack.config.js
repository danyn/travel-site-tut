const path = require("path")

module.exports = {
	entry: "./app/assets/scripts/app.js" ,
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, 'app/dist/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['/Users/dan/Projects/Tutorials/Workflow/travel-site-tut/node_modules/babel-preset-env']
					}
				}
			}
		]
	}
}


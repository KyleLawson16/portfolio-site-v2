const path = require('path')

module.exports = {
	entry: {
		build: './src/pages/index.js',
		'build/projects/lou': './src/pages/indexLou.js',
		'build/projects/melillo': './src/pages/indexMelillo.js',
		'build/projects/shelfie': './src/pages/indexShelfie.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]/main.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}

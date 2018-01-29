			
var path = require("path");
module.exports = {
	entry: './script.js',
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'transpile.js'
	},
	devServer:{
		inline: true,
		port: 3000 
	},
	module: {
		loaders: [

         { test: /\.js$/,
         	loader: 'babel-loader', 
         	exclude: /node_modules/,
         	query: {
         		presets: ['es2015', 'react']
         	}

         },
         // { test: /\.css$/, loader: "style-loader!css-loader" }

         {
  test: /\.css$/,
  loader: 'style-loader'
}, {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
}

		]
	}
}
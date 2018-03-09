

var path = require('path');


module.exports ={
	entry:path.resolve(__dirname, "app") + "/assets/scripts/app.js",
	output:{
		path:path.resolve(__dirname, 'app') +"/temp/scripts",
		filename:"bundle.js"
	},


    module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            }
          ]
    }
	 
}





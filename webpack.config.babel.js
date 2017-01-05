export default {
  entry: {
    main: './dev/main.js',
  },
  output: {
    filename: '[name].js',
    path: './public/',
  },
  module: {
	resolve: {
	  root: [
		'./dev',
	  ],
	},
    devtool: 'inline-source-map',
    loaders: [{
      test: /\.js$/,
      include: [
        './dev',
        './test',
      ],
      loader: 'babel',
    }],
  },
};

module.exports = {
  env: {
    graphqlEndpoint: `${process.env.BASE_URL}/api/graphql`,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => config,
};

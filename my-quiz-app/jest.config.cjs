module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transpile JavaScript and JSX files with Babel
  },
  transformIgnorePatterns: ['/node_modules/'],
};

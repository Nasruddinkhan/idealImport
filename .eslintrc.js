module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // Specify ECMAScript version
    sourceType: 'module', // Set the source type to 'module' (for ECMAScript modules)
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    requireConfigFile: false,
    project: './tsconfig.json', // Specify the path to your TypeScript project config file (if using TypeScript)
  },
};

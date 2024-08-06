module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-class-properties',
      { loose: true }, // Ensure 'loose' is consistent with other plugins
    ],
    [
      '@babel/plugin-transform-private-methods',
      { loose: true }, // Ensure 'loose' is consistent with other plugins
    ],
    [
      '@babel/plugin-transform-private-property-in-object',
      { loose: true }, // Ensure 'loose' is consistent with other plugins
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': 'src/screens',
          '@icons': 'src/assets/icons',
          "@constants": 'src/constants',
          "@tabsnavigators": 'src/tabsnavigators',
        },
      },
    ],
  ],
};

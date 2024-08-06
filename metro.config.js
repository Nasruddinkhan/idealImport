const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Include extensions that you are using
    sourceExts: [...defaultConfig.resolver.sourceExts, 'ts', 'tsx', 'js', 'tsx', 'svg'],

    assetExts: [...defaultConfig.resolver.assetExts, 'svg', 'png', 'jpg', 'jpeg', 'gif', 'webp'],
    // Define module aliases
    alias: {
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@icons':path.resolve(__dirname, 'src/assets/icons'),
      "@constants":path.resolve(__dirname, 'src/constants/icons'),
      "@tabsnavigators":path.resolve(__dirname, 'src/tabsnavigators')
    },
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(defaultConfig, config);

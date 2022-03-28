const fs = require('fs');
const path = require('path');

const aliases = {
  '@hippy/vue-native-components': '@hippy/vue-web-components',
};
// If hippy-vue-web-components was built exist then make a alias to @hippy/react
// Remove the section if you don't use it
const hippyVuePath = path.resolve(__dirname, '../../packages/hippy-vue-web-components');
if (fs.existsSync(path.resolve(hippyVuePath, 'dist/index.js'))) {
  console.warn(`* Using the @hippy/vue-native-components in ${hippyVuePath}`);
  aliases['@hippy/vue-native-components'] = hippyVuePath;
} else {
  console.warn('* Using the @hippy/vue-native-components defined in package.json');
}

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: aliases,
    },
  },
};

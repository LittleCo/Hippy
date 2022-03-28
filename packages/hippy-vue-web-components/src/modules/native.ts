import { Native, MeasurePosition } from '../../types/native';
import { cookie } from '../modules/cookie';
import { clipboard } from '../modules/clipboard';
import { dimensions } from '../modules/dimensions';
import { canUseDOM } from '../utils/execution-environment';
import { unsupportedWarn } from '../utils';
import { UIManager } from './ui-manager';

const pixelRatio = canUseDOM ? window.devicePixelRatio : 1;

interface NativePlugin {
  // eslint-disable-next-line no-unused-vars
  install: (Vue: { Native: Native }) => void;
};

const Native : NativePlugin = {
  install(Vue) {
    Vue.Native = { // TODO: 读取 package.json
      version: '2.2.1',
      Cookie: cookie,
      Clipboard: clipboard,
      isIPhoneX: false,
      screenIsVertical: false,
      Platform: 'web',
      Device: 'iPhone',
      OSVersion: null,
      APILevel: null,
      Dimensions: dimensions,
      PixelRatio: pixelRatio,
      OnePixel: pixelRatio,
      on: () => {
        unsupportedWarn('Native.on');
      },
      off: () => {
        unsupportedWarn('Native.off');
      },
      emit: () => {
        unsupportedWarn('Native emit');
      },
      callUIFunction: () => {
        unsupportedWarn('Native.callUIFunction');
      },
      measureInWindow: () => {
        const initPositon: MeasurePosition = {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
        };
        unsupportedWarn('Native.measureInWindow');
        return Promise.resolve(initPositon);
      },
      callNative: () => {
        unsupportedWarn('Native.callNative');
      },
      callNativeWithPromise: () => {
        unsupportedWarn('Native.callNativeWithPromise');
        return Promise.resolve();
      },
      callNativeWithCallbackId: () => {
        unsupportedWarn('Native.callNativeWithCallbackId');
      },
      UIManagerModule: UIManager,
    };
  },
};

export { Native };

import { Dimensions } from '../../types/native';
import { canUseDOM } from '../utils/execution-environment';

const globalThis = canUseDOM ? window : { innerHeight: 0, innerWidth: 0, screen: { height: 0, width: 0 } };

const dimensions: Dimensions = {
  window: {
    height: globalThis.innerHeight,
    width: globalThis.innerWidth,
    scale: 1,
    fontScale: 1,
    statusBarHeight: 0,
    navigatorBarHeight: 0,
  },
  screen: {
    height: globalThis.innerHeight,
    width: globalThis.innerWidth,
    scale: 1,
    fontScale: 1,
    statusBarHeight: 0,
    navigatorBarHeight: 0,
  },
};

export { dimensions };

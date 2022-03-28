import { UIManagerModule } from '../../types/native';
import { unsupportedWarn } from '../utils';

unsupportedWarn('UIManagerModule');

const emptyFunction = () => null;

const UIManager: UIManagerModule = {
  createNode: emptyFunction,
  updateNode: emptyFunction,
  deleteNode: emptyFunction,
  flushBatch: emptyFunction,
  setNodeTree: emptyFunction,
  setNodeId: emptyFunction,
  getNodeById: emptyFunction,
  getNodeIdByRef: emptyFunction,
  callUIFunction: emptyFunction,
  measureInWindow: emptyFunction,
  startBatch: emptyFunction,
  endBatch: emptyFunction,
  sendRenderError: emptyFunction,
};

export { UIManager };

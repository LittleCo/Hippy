import { Cookie } from '../../types/native';
import { canUseDOM } from '../utils/execution-environment';

const cookie: Cookie = {
  getAll() {
    if (canUseDOM && document.cookie) {
      return Promise.resolve(document.cookie);
    }
    return Promise.resolve('');
  },
  set(url: string, keyValue: string, expireDate?: Date) {
    const cookieList = keyValue.split(';');
    cookieList.forEach((cookie) => {
      let expireStr = '';
      if (typeof expireDate === 'string') {
        expireStr = expireDate;
      }
      if (expireDate instanceof Date) {
        expireStr = expireDate.toUTCString();
      }
      if (canUseDOM && document.cookie) {
        document.cookie = `${cookie}; expires=${expireStr};domain=${url}`;
      }
    });
  },
};
export { cookie };

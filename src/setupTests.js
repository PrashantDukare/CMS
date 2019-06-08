import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });
// Mock sessionStorage
(function () {

  function createStorage() {
    let s = {},
        noopCallback = () => {},
        _itemInsertionCallback = noopCallback;

    Object.defineProperty(s, 'setItem', {
      get: () => {
        return (k, v) => {
          k = k + '';
          if (!s.hasOwnProperty(k)) {
            _itemInsertionCallback(s.length);
          }
          s[k] = v + '';
        };
      }
    });
    Object.defineProperty(s, 'getItem', {
      get: () => {
        return k => {
          k = k + '';
          if (s.hasOwnProperty(k)) {
            return s[k];
          } else {
            return null;
          }
        };
      }
    });
    return s;
  }

  const global = require("global");
  const window = require("global/window");

  Object.defineProperty(global, 'sessionStorage', {
    value: createStorage(),
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: global.sessionStorage,
  });
}());

/*
 * @Description: utils文件
 * @Author: QingTong
 * @Date: 2019-02-26 19:47:35
 * @Last Modified by: QingTong
 * @Last Modified time: 2019-02-26 19:53:25
 */

// 封装localstorge操作
export const localStore = (() => {
  let support = true;
  function isSupport() {
    try {
      if (window.localStorage) {
        localStorage.setItem('webpsupport', 'true');
        localStorage.removeItem('webpsupport');
        return true
      }
    } catch (e) {
      return false
    }
  }
  support = isSupport();
  return {
    support,
    set(key, value) {
      if(!support) {
        return ;
      }
      if(typeof value === 'object') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    },
    get(key) {
      if(support) {
        return JSON.parse(localStorage.getItem(key));
      }
      return '';
    },
    remove(key) {
      if(support) {
        localStorage.removeItem(key);
      }
    }
  }
})();
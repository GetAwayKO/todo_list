class sessionStorageObject {
  constructor(key) {
    this.key = key;
  }
  getData(key, defaultValue) {
    let data = window.sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return defaultValue;
    }
  }
  setData(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
}
export default sessionStorageObject;

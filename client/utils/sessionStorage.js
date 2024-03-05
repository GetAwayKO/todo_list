class sessionStorageObject {
  constructor(key) {
    this.key = key;
  }
  getData(key) {
    let data = window.sessionStorage.getItem(key);
    return JSON.parse(data);
  }
  setData(key, value) {
    window.sessionStorage.setItem(key, value);
  }
}
export default sessionStorageObject;

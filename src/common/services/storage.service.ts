class StorageService {
  private static instance: StorageService;

  public static get Instance(): StorageService {
    return this.instance || (this.instance = new this());
  }

  loadData(key: string) {
    try {
      const storageData = sessionStorage.getItem(key);
      return storageData ? JSON.parse(storageData) : '';
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
    }
  }

  saveData<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeData(key: string) {
    sessionStorage.removeItem(key);
  }

  clearData() {
    sessionStorage.clear();
  }
}

export default StorageService.Instance;

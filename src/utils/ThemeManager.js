class ThemeManager {
  static instance;

  static getInstance() {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  constructor() {
    this.darkMode = false;
    this.listeners = [];
  }

  setDarkMode(darkMode) {
    if (this.darkMode !== darkMode) {
      this.darkMode = darkMode;
      this.notify();
    }
  }

  getDarkMode() {
    return this.darkMode;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.darkMode));
  }
}

export const themeManager = ThemeManager.getInstance();

(() => {
  'use strict';

  const STORAGE_KEY = 'cv-theme';

  const initTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'nes';
    document.documentElement.setAttribute('data-theme', savedTheme);
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'nes' ? '98' : 'nes';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  const setupEventListeners = () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      setupEventListeners();
    });
  } else {
    initTheme();
    setupEventListeners();
  }
})();

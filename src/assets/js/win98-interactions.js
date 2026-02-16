(() => {
  'use strict';

  // Wait for DOM to be ready
  const init = () => {
    if (document.documentElement.getAttribute('data-theme') !== '98') {
      return;
    }

    createStartButton();
    createDesktopIcons();
    createStartMenu();
    createClippyDialog();
  };

  const createStartButton = () => {
    if (document.querySelector('.win98-start-button')) return;

    const startButton = document.createElement('button');
    startButton.className = 'win98-start-button';
    startButton.setAttribute('data-start-button', '');
    startButton.innerHTML = '⊞ Start';
    document.body.appendChild(startButton);
  };

  // Create desktop icons with click handlers
  const createDesktopIcons = () => {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'desktop-icons-container';
    iconsContainer.innerHTML = `
      <div class="desktop-icon" data-action="my-computer">
        <div class="icon-image">💻</div>
        <div class="icon-label">My Computer</div>
      </div>
      <div class="desktop-icon" data-action="documents">
        <div class="icon-image">📁</div>
        <div class="icon-label">My Documents</div>
      </div>
      <div class="desktop-icon" data-action="recycle-bin">
        <div class="icon-image">🗑️</div>
        <div class="icon-label">Recycle Bin</div>
      </div>
      <div class="desktop-icon" data-action="options">
        <div class="icon-image">⚙️</div>
        <div class="icon-label">Options</div>
      </div>
    `;

    document.body.appendChild(iconsContainer);

    // Add click handlers
    document.querySelectorAll('.desktop-icon').forEach(icon => {
      icon.addEventListener('click', handleIconClick);
      icon.addEventListener('dblclick', handleIconDoubleClick);
    });
  };

  const handleIconClick = (e) => {
    document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    e.currentTarget.classList.add('selected');
  };

  const handleIconDoubleClick = (e) => {
    const action = e.currentTarget.getAttribute('data-action');

    switch(action) {
      case 'my-computer':
        openExplorerWindow('My Computer', 'This PC contains all your drives and devices.');
        break;
      case 'documents':
        openExplorerWindow('My Documents', 'Your personal documents folder.');
        break;
      case 'recycle-bin':
        openExplorerWindow('Recycle Bin', 'The Recycle Bin is empty.');
        break;
      case 'options':
        openOptionsDialog();
        break;
    }
  };

  const openExplorerWindow = (title, message) => {
    const existingWindow = document.querySelector('.explorer-window');
    if (existingWindow) {
      existingWindow.remove();
    }

    const windowEl = document.createElement('div');
    windowEl.className = 'explorer-window';
    windowEl.innerHTML = `
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">${title}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" class="close-btn"></button>
          </div>
        </div>
        <div class="window-body">
          <p>${message}</p>
          <div class="tree-view">
            <ul>
              <li>📁 Desktop</li>
              <li>📁 My Documents</li>
              <li>💾 (C:) Local Disk</li>
              <li>💿 (D:) CD-ROM</li>
            </ul>
          </div>
        </div>
        <div class="status-bar">
          <p class="status-bar-field">${title}</p>
        </div>
      </div>
    `;

    document.body.appendChild(windowEl);

    windowEl.querySelector('.close-btn').addEventListener('click', () => {
      windowEl.remove();
    });

    makeDraggable(windowEl.querySelector('.window'));
  };

  const createStartMenu = () => {
    const startMenu = document.createElement('div');
    startMenu.className = 'start-menu hidden';
    startMenu.innerHTML = `
      <div class="start-menu-sidebar">
        <span>Windows 98</span>
      </div>
      <ul class="start-menu-items">
        <li><span>📂</span> Programs</li>
        <li><span>📄</span> Documents</li>
        <li><span>⚙️</span> Settings</li>
        <li><span>🔍</span> Find</li>
        <li><span>❓</span> Help</li>
        <li><span>🏃</span> Run...</li>
        <li class="separator"></li>
        <li><span>🔌</span> Shut Down...</li>
      </ul>
    `;

    document.body.appendChild(startMenu);

    // Start button click handler
    document.addEventListener('click', (e) => {
      const startBtn = e.target.closest('[data-start-button]');
      if (startBtn) {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
        playStartSound();
      } else if (!e.target.closest('.start-menu')) {
        startMenu.classList.add('hidden');
      }
    });
  };

  const createClippyDialog = () => {
    const clippy = document.querySelector('[data-clippy]');
    if (!clippy) {
      // Create clippy element
      const clippyEl = document.createElement('div');
      clippyEl.setAttribute('data-clippy', '');
      clippyEl.className = 'clippy-assistant';
      clippyEl.innerHTML = '📎';
      document.body.appendChild(clippyEl);
    }

    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-clippy]') || e.target.closest('.clippy-assistant')) {
        showClippyMessage();
      }
    });
  };

  const showClippyMessage = () => {
    const messages = [
      { text: "It looks like you're viewing a CV. Would you like help?", action: null },
      { text: "Hi! I'm Clippy, your office assistant!", action: null },
      { text: "Did you know Alessandro is a Full Stack Developer?", action: null },
      { text: "This CV looks great! Want to download the PDF?", action: 'download' },
      { text: "I see you're interested in retro themes. Nice choice!", action: null }
    ];

    const existingDialog = document.querySelector('.clippy-dialog');
    if (existingDialog) {
      existingDialog.remove();
    }

    const dialog = document.createElement('div');
    dialog.className = 'clippy-dialog';
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    dialog.innerHTML = `
      <div class="window" style="width: 300px;">
        <div class="title-bar">
          <div class="title-bar-text">Office Assistant</div>
          <div class="title-bar-controls">
            <button aria-label="Close" class="close-btn"></button>
          </div>
        </div>
        <div class="window-body">
          <p>${randomMsg.text}</p>
          <div class="field-row" style="margin-top: 1rem;">
            <button class="clippy-btn ok-btn">OK</button>
            <button class="clippy-btn close-btn">Cancel</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    // OK button
    dialog.querySelector('.ok-btn').addEventListener('click', () => {
      if (randomMsg.action === 'download') {
        // Download classic CV
        window.location.href = '/cv-classic.pdf';
      }
      dialog.remove();
    });

    // Close/Cancel buttons
    dialog.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => dialog.remove());
    });
  };

  const createOptionsDialog = () => {
    // This will be called when Options icon is double-clicked
  };

  const openOptionsDialog = () => {
    const existingDialog = document.querySelector('.options-dialog');
    if (existingDialog) {
      existingDialog.remove();
    }

    const dialog = document.createElement('div');
    dialog.className = 'options-dialog';
    dialog.innerHTML = `
      <div class="window" style="width: 500px;">
        <div class="title-bar">
          <div class="title-bar-text">Display Properties</div>
          <div class="title-bar-controls">
            <button aria-label="Close" class="close-btn"></button>
          </div>
        </div>
        <div class="window-body">
          <menu role="tablist">
            <button role="tab" aria-selected="true" aria-controls="general">General</button>
            <button role="tab" aria-controls="display">Display</button>
            <button role="tab" aria-controls="advanced">Advanced</button>
          </menu>

          <article role="tabpanel" id="general">
            <fieldset>
              <legend>Theme Options</legend>
              <div class="field-row">
                <input id="option1" type="checkbox" checked />
                <label for="option1">Enable retro mode</label>
              </div>
              <div class="field-row">
                <input id="option2" type="checkbox" />
                <label for="option2">Show desktop icons</label>
              </div>
              <div class="field-row">
                <input id="option3" type="checkbox" checked />
                <label for="option3">Enable Clippy assistant</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Sound</legend>
              <div class="field-row">
                <input id="radio1" type="radio" name="sound" checked />
                <label for="radio1">Enable sound effects</label>
              </div>
              <div class="field-row">
                <input id="radio2" type="radio" name="sound" />
                <label for="radio2">Mute all sounds</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Screen Resolution</legend>
              <div class="field-row">
                <label for="range1">Quality:</label>
                <input id="range1" type="range" min="1" max="5" value="3" />
              </div>
            </fieldset>

            <div class="field-row" style="margin-top: 1rem;">
              <button class="close-btn">OK</button>
              <button class="close-btn">Cancel</button>
              <button>Apply</button>
            </div>
          </article>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    dialog.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => dialog.remove());
    });

    makeDraggable(dialog.querySelector('.window'));
  };

  const makeDraggable = (windowEl) => {
    const titleBar = windowEl.querySelector('.title-bar');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    titleBar.addEventListener('mousedown', (e) => {
      if (e.target.closest('.title-bar-controls')) return;

      isDragging = true;
      initialX = e.clientX - (windowEl.offsetLeft || 0);
      initialY = e.clientY - (windowEl.offsetTop || 0);
      windowEl.style.position = 'fixed';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      windowEl.style.left = currentX + 'px';
      windowEl.style.top = currentY + 'px';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  };

  const playStartSound = () => {
    // Simple beep using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  // Initialize when theme changes to 98
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === '98') {
          setTimeout(init, 100);
        } else {
          // Clean up 98 elements when switching themes
          document.querySelectorAll('.desktop-icons-container, .start-menu, .explorer-window, .clippy-dialog, .options-dialog, .win98-start-button, .clippy-assistant, [data-clippy]').forEach(el => el.remove());
        }
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });

  // Initialize if already on 98 theme
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

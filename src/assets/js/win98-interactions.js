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
    startButton.innerHTML = '<img src="/assets/images/icons/start-here.png" alt="Start" class="start-icon"> Start';
    document.body.appendChild(startButton);
  };

  // Create desktop icons with click handlers
  const createDesktopIcons = () => {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'desktop-icons-container';
    iconsContainer.innerHTML = `
      <div class="desktop-icon" data-action="my-computer">
        <div class="icon-image"><img src="/assets/images/icons/computer_win98.png" alt="My Computer"></div>
        <div class="icon-label">My Computer</div>
      </div>
      <div class="desktop-icon" data-action="documents">
        <div class="icon-image"><img src="/assets/images/icons/folder-documents.png" alt="My Documents"></div>
        <div class="icon-label">My Documents</div>
      </div>
      <div class="desktop-icon" data-action="recycle-bin">
        <div class="icon-image"><img src="/assets/images/icons/user-trash_win98.png" alt="Recycle Bin"></div>
        <div class="icon-label">Recycle Bin</div>
      </div>
      <div class="desktop-icon" data-action="options">
        <div class="icon-image"><img src="/assets/images/icons/gnome-control-center.png" alt="Options"></div>
        <div class="icon-label">Control Panel</div>
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

    // Get appropriate content based on window type
    let content = '';
    if (title === 'My Computer') {
      content = `
        <div class="explorer-toolbar">
          <button class="toolbar-btn">File</button>
          <button class="toolbar-btn">Edit</button>
          <button class="toolbar-btn">View</button>
          <button class="toolbar-btn">Go</button>
          <button class="toolbar-btn">Favorites</button>
          <button class="toolbar-btn">Help</button>
        </div>
        <div class="explorer-address-bar">
          <label>Address:</label>
          <input type="text" value="My Computer" readonly>
        </div>
        <div class="explorer-content">
          <div class="explorer-item">
            <img src="/assets/images/icons/media-floppy.png" alt="3½ Floppy">
            <span>3½ Floppy (A:)</span>
          </div>
          <div class="explorer-item">
            <img src="/assets/images/icons/computer_win98.png" alt="Local Disk">
            <span>(C:)</span>
          </div>
          <div class="explorer-item">
            <img src="/assets/images/icons/media-optical.png" alt="CD-ROM">
            <span>Compact Disc (D:)</span>
          </div>
          <div class="explorer-item">
            <img src="/assets/images/icons/gnome-control-center.png" alt="Control Panel">
            <span>Control Panel</span>
          </div>
        </div>
      `;
    } else if (title === 'My Documents') {
      content = `
        <div class="explorer-toolbar">
          <button class="toolbar-btn">File</button>
          <button class="toolbar-btn">Edit</button>
          <button class="toolbar-btn">View</button>
          <button class="toolbar-btn">Go</button>
          <button class="toolbar-btn">Favorites</button>
          <button class="toolbar-btn">Help</button>
        </div>
        <div class="explorer-address-bar">
          <label>Address:</label>
          <input type="text" value="C:\\My Documents" readonly>
        </div>
        <div class="explorer-content">
          <div class="explorer-item">
            <img src="/assets/images/icons/text-x-generic.png" alt="Text File">
            <span>Alessandro's CV.txt</span>
          </div>
          <div class="explorer-item">
            <img src="/assets/images/icons/folder.png" alt="Folder">
            <span>Projects</span>
          </div>
        </div>
      `;
    } else if (title === 'Recycle Bin') {
      content = `
        <div class="explorer-toolbar">
          <button class="toolbar-btn">File</button>
          <button class="toolbar-btn">Edit</button>
          <button class="toolbar-btn">View</button>
          <button class="toolbar-btn">Help</button>
        </div>
        <div class="explorer-content empty-recycle">
          <p>The Recycle Bin is empty.</p>
        </div>
      `;
    }

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
        <div class="window-body explorer-window-body">
          ${content}
        </div>
        <div class="status-bar">
          <p class="status-bar-field">${title}</p>
          <p class="status-bar-field">${title === 'Recycle Bin' ? '0 objects' : 'My Computer'}</p>
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
        <li><img src="/assets/images/icons/system-file-manager.png" alt="Programs" class="menu-icon"> Programs</li>
        <li><img src="/assets/images/icons/folder-documents.png" alt="Documents" class="menu-icon"> Documents</li>
        <li><img src="/assets/images/icons/preferences-desktop.png" alt="Settings" class="menu-icon"> Settings</li>
        <li><img src="/assets/images/icons/system-search.png" alt="Find" class="menu-icon"> Find</li>
        <li><span>❓</span> Help</li>
        <li><img src="/assets/images/icons/system-run.png" alt="Run" class="menu-icon"> Run...</li>
        <li class="separator"></li>
        <li data-action="update"><img src="/assets/images/icons/system-software-update.png" alt="Windows Update" class="menu-icon"> Windows Update</li>
        <li data-action="shutdown"><img src="/assets/images/icons/system-shutdown.png" alt="Shut Down" class="menu-icon"> Shut Down...</li>
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

    // Menu items click handler
    startMenu.addEventListener('click', (e) => {
      const menuItem = e.target.closest('[data-action]');
      if (menuItem) {
        const action = menuItem.getAttribute('data-action');
        startMenu.classList.add('hidden');

        if (action === 'shutdown') {
          showShutdownScreen();
        } else if (action === 'update') {
          showBSOD();
        }
      }
    });
  };

  const createClippyDialog = () => {
    const clippy = document.querySelector('[data-clippy]');
    if (!clippy) {
      // Create clippy element with the real Clippy!
      const clippyEl = document.createElement('div');
      clippyEl.setAttribute('data-clippy', '');
      clippyEl.className = 'clippy-assistant';
      clippyEl.innerHTML = `<img src="/assets/images/clippy.svg" alt="Clippy the Office Assistant" draggable="false">`;
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

  const showShutdownScreen = () => {
    const shutdownOverlay = document.createElement('div');
    shutdownOverlay.className = 'shutdown-screen';
    shutdownOverlay.innerHTML = `
      <div class="dos-terminal">
        <div class="dos-content"></div>
      </div>
    `;

    document.body.appendChild(shutdownOverlay);

    const dosContent = shutdownOverlay.querySelector('.dos-content');
    const commands = [
      { text: 'Microsoft(R) Windows 98', delay: 0 },
      { text: '   (C)Copyright Microsoft Corp 1981-1999.', delay: 100 },
      { text: '', delay: 200 },
      { text: 'C:\\WINDOWS> shutdown.exe /s', delay: 800 },
      { text: '', delay: 1000 },
      { text: 'Closing all applications...', delay: 1200 },
      { text: 'Saving user settings...', delay: 1800 },
      { text: 'Flushing cache buffers...', delay: 2200 },
      { text: 'Unmounting file systems...', delay: 2600 },
      { text: '', delay: 3000 },
      { text: 'WARNING: MSOFFICE.EXE was not properly closed!', delay: 3200 },
      { text: 'ERROR: WINOLDAP.MOD has caused a General Protection Fault', delay: 3600 },
      { text: 'ERROR: Illegal operation in module KERNEL32.DLL at 0157:BFF9DFFF', delay: 4000 },
      { text: '', delay: 4400 },
      { text: 'Ignoring errors... :/', delay: 4600 },
      { text: 'Powering down system...', delay: 5200 },
      { text: '', delay: 5600 },
      { text: 'Phew! Close call there... system stabilized :)', delay: 6200 },
      { text: 'Press any key to return to Windows...', delay: 6800 }
    ];

    let currentLine = 0;

    const typeCommand = () => {
      if (currentLine < commands.length) {
        setTimeout(() => {
          const line = document.createElement('div');
          line.textContent = commands[currentLine].text;
          dosContent.appendChild(line);
          currentLine++;
          typeCommand();
        }, commands[currentLine].delay);
      }
    };

    typeCommand();

    // Close on any key press
    const closeHandler = (e) => {
      if (currentLine >= commands.length) {
        shutdownOverlay.remove();
        document.removeEventListener('keydown', closeHandler);
        document.removeEventListener('click', closeHandler);
      }
    };

    document.addEventListener('keydown', closeHandler);
    document.addEventListener('click', closeHandler);
  };

  const showBSOD = () => {
    const bsodOverlay = document.createElement('div');
    bsodOverlay.className = 'bsod-screen';
    bsodOverlay.innerHTML = `
      <div class="bsod-content">
        <h1>Windows</h1>
        <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) +</p>
        <p>00010E36. The current application will be terminated.</p>
        <br>
        <p>*  Press any key to terminate the current application.</p>
        <p>*  Press CTRL+ALT+DEL again to restart your computer. You will</p>
        <p>   lose any unsaved information in all applications.</p>
        <br>
        <p>Press any key to continue _</p>
        <br>
        <br>
        <p style="text-align: center; margin-top: 2rem;">Phew! Disaster averted... Windows Update completed :)</p>
        <p style="text-align: center; margin-top: 0.5rem;">(Click anywhere to return)</p>
      </div>
    `;

    document.body.appendChild(bsodOverlay);

    // Close on click
    bsodOverlay.addEventListener('click', () => {
      bsodOverlay.remove();
    });

    // Close on any key press
    document.addEventListener('keydown', function closeHandler(e) {
      bsodOverlay.remove();
      document.removeEventListener('keydown', closeHandler);
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
          document.querySelectorAll('.desktop-icons-container, .start-menu, .explorer-window, .clippy-dialog, .options-dialog, .win98-start-button, .clippy-assistant, [data-clippy], .shutdown-screen, .bsod-screen').forEach(el => el.remove());
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

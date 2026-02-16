(() => {
  'use strict';

  const init = () => {
    if (document.documentElement.getAttribute('data-theme') !== 'nes') {
      return;
    }

    createPokeball();
    createSNESLogo();
  };

  // Pokéball that spawns random Pokémon on click
  const createPokeball = () => {
    if (document.querySelector('.nes-pokeball-container')) return;

    const container = document.createElement('div');
    container.className = 'nes-pokeball-container';
    container.innerHTML = '<i class="nes-pokeball"></i>';
    document.body.appendChild(container);

    container.addEventListener('click', spawnRandomPokemon);
  };

  const spawnRandomPokemon = () => {
    const pokemon = ['bulbasaur', 'charmander', 'squirtle'];
    const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

    const existingDialog = document.querySelector('.pokemon-dialog');
    if (existingDialog) {
      existingDialog.remove();
    }

    const dialog = document.createElement('div');
    dialog.className = 'pokemon-dialog';

    const pokemonNames = {
      bulbasaur: 'Bulbasaur',
      charmander: 'Charmander',
      squirtle: 'Squirtle'
    };

    const pokemonMessages = {
      bulbasaur: 'A wild Bulbasaur appeared! 🍃 Grass/Poison type Pokémon.',
      charmander: 'A wild Charmander appeared! 🔥 Fire type Pokémon.',
      squirtle: 'A wild Squirtle appeared! 💧 Water type Pokémon.'
    };

    dialog.innerHTML = `
      <div class="nes-container is-dark with-title pokemon-window">
        <p class="title">Wild Pokémon!</p>
        <div class="pokemon-content">
          <div class="pokemon-sprite">
            <i class="nes-${randomPokemon}"></i>
          </div>
          <div class="pokemon-info">
            <p>${pokemonMessages[randomPokemon]}</p>
          </div>
        </div>
        <div class="nes-balloon from-left pokemon-speech">
          <p>${pokemonNames[randomPokemon]}: Hello! Thanks for viewing Alessandro's CV!</p>
        </div>
        <div class="dialog-actions">
          <button type="button" class="nes-btn is-primary catch-btn">Catch</button>
          <button type="button" class="nes-btn is-error close-btn">Run</button>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    // Add sound effect
    playPokemonSound();

    // Close button
    dialog.querySelector('.close-btn').addEventListener('click', () => {
      dialog.remove();
    });

    // Catch button
    dialog.querySelector('.catch-btn').addEventListener('click', () => {
      const balloon = dialog.querySelector('.pokemon-speech p');
      if (balloon) {
        balloon.innerHTML = `Gotcha! ${pokemonNames[randomPokemon]} was caught! 🎉 Added to Alessandro's team!`;
      }
      setTimeout(() => dialog.remove(), 2500);
    });

    // Close when clicking outside
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.remove();
      }
    });
  };


  const playPokemonSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Play a simple 8-bit style sound
    const playNote = (frequency, startTime, duration) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'square'; // 8-bit sound

      gainNode.gain.setValueAtTime(0.3, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    // Play a simple melody
    const now = audioContext.currentTime;
    playNote(523, now, 0.1);        // C
    playNote(659, now + 0.1, 0.1);  // E
    playNote(784, now + 0.2, 0.2);  // G
  };

  // SNES Logo that opens component showcase
  const createSNESLogo = () => {
    if (document.querySelector('.snes-logo-container')) return;

    const container = document.createElement('div');
    container.className = 'snes-logo-container';
    container.innerHTML = '<i class="snes-logo"></i>';
    document.body.appendChild(container);

    container.addEventListener('click', openComponentShowcase);
  };

  const openComponentShowcase = () => {
    const existingDialog = document.querySelector('.snes-showcase-dialog');
    if (existingDialog) {
      existingDialog.remove();
      return;
    }

    const dialog = document.createElement('div');
    dialog.className = 'snes-showcase-dialog';

    dialog.innerHTML = `
      <div class="nes-container is-rounded is-dark with-title settings-window">
        <p class="title">⚙️ Game Settings</p>

        <div class="settings-content">
          <section class="settings-section">
            <h3 class="nes-text is-warning">Display Options</h3>
            <div class="form-controls">
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" checked />
                <span>Enable CRT Scanlines</span>
              </label>
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" checked />
                <span>Pixel Perfect Mode</span>
              </label>
              <label>
                <input type="checkbox" class="nes-checkbox is-dark" />
                <span>Motion Blur (Authentic 90s)</span>
              </label>
            </div>
          </section>

          <section class="settings-section">
            <h3 class="nes-text is-warning">Audio Settings</h3>
            <div class="form-controls">
              <label>
                <input type="radio" class="nes-radio is-dark" name="audio" checked />
                <span>8-bit Chiptune</span>
              </label>
              <label>
                <input type="radio" class="nes-radio is-dark" name="audio" />
                <span>16-bit MIDI</span>
              </label>
              <label>
                <input type="radio" class="nes-radio is-dark" name="audio" />
                <span>Mute (Why though?)</span>
              </label>
            </div>
            <div class="volume-control">
              <label>Volume: <span class="volume-value">80</span>%</label>
              <input type="range" class="volume-slider" min="0" max="100" value="80" />
            </div>
          </section>

          <section class="settings-section">
            <h3 class="nes-text is-warning">Difficulty</h3>
            <select class="nes-select is-dark" required>
              <option value="1">Easy (For noobs)</option>
              <option value="2" selected>Normal (Recommended)</option>
              <option value="3">Hard (Git gud)</option>
              <option value="4">NIGHTMARE (Good luck lol)</option>
            </select>
          </section>

          <section class="settings-section">
            <h3 class="nes-text is-warning">Cheat Codes</h3>
            <div class="nes-field is-inline">
              <input type="text" class="nes-input is-dark" placeholder="↑↑↓↓←→←→BA" />
            </div>
            <p class="cheat-hint">Hint: Konami Code unlocks secret features 👀</p>
          </section>

          <section class="settings-section">
            <h3 class="nes-text is-warning">Player Stats</h3>
            <div class="stats-display">
              <p><i class="nes-icon star is-small"></i> High Score: 999,999</p>
              <p><i class="nes-icon trophy is-small"></i> Achievements: 42/100</p>
              <p><i class="nes-icon heart is-small"></i> Lives: ∞</p>
              <p><i class="nes-icon coin is-small"></i> Coins: 1337</p>
            </div>
          </section>

          <div class="nes-balloon from-left settings-tip">
            <p>Tip: Press START+SELECT to save your progress!</p>
          </div>
        </div>

        <div class="dialog-actions">
          <button type="button" class="nes-btn is-success">Save</button>
          <button type="button" class="nes-btn is-warning">Reset</button>
          <button type="button" class="nes-btn is-error close-showcase">Exit</button>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    // Volume slider
    const volumeSlider = dialog.querySelector('.volume-slider');
    const volumeValue = dialog.querySelector('.volume-value');
    volumeSlider.addEventListener('input', (e) => {
      volumeValue.textContent = e.target.value;
    });

    // Save button
    dialog.querySelector('.nes-btn.is-success').addEventListener('click', () => {
      dialog.remove();
    });

    // Close/Exit button
    dialog.querySelector('.close-showcase').addEventListener('click', () => {
      dialog.remove();
    });

    // Close when clicking outside
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.remove();
      }
    });

    // Make draggable
    makeDraggable(dialog.querySelector('.settings-window'));
  };

  const makeDraggable = (element) => {
    const titleBar = element.querySelector('.title');
    if (!titleBar) return;

    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    titleBar.style.cursor = 'move';

    titleBar.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - (element.offsetLeft || 0);
      initialY = e.clientY - (element.offsetTop || 0);
      element.style.position = 'fixed';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      element.style.left = currentX + 'px';
      element.style.top = currentY + 'px';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  };

  // Theme change observer
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'nes') {
          setTimeout(init, 100);
        } else {
          // Clean up NES elements when switching themes
          document.querySelectorAll('.nes-pokeball-container, .snes-logo-container, .pokemon-dialog, .snes-showcase-dialog, .catch-message').forEach(el => el.remove());
        }
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });

  // Initialize if already on NES theme
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

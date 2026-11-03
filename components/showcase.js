// The documentation page needs no framework or network connection.
const swatches = ['blue','red','blue-text','red-text','ink','ink-muted','surface','surface-alt','success','pixel-mint','pixel-teal','pixel-magenta','pixel-void','code-bg'];
const container = document.getElementById('swatches');
for (const name of swatches) {
  const tile = document.createElement('div');
  tile.className = 'swatch';
  const color = document.createElement('i');
  color.style.background = `var(--${name})`;
  const label = document.createElement('span');
  label.textContent = name;
  tile.append(color, label);
  container.append(tile);
}
const choices = document.querySelectorAll('[data-theme-choice]');
function reflectTheme(choice) {
  for (const button of choices) {
    const selected = button.dataset.themeChoice === choice;
    button.classList.toggle('dp-btn-primary', selected);
    button.classList.toggle('dp-btn-ghost', !selected);
    button.setAttribute('aria-pressed', String(selected));
  }
}
reflectTheme(document.documentElement.dataset.theme || 'system');
for (const button of choices) {
  button.addEventListener('click', () => {
    const choice = button.dataset.themeChoice;
    if (choice === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = choice;
    reflectTheme(choice);
  });
}

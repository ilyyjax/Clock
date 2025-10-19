// script.js
(function () {
  const clockEl = document.getElementById('clock');

  // pad helper
  const pad = (n) => String(n).padStart(2, '0');

  function renderTime(date) {
    const h = pad(date.getHours());
    const m = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    // Use mono-colon style with thin separators; can easily be changed to blink if desired
    clockEl.textContent = `${h}:${m}:${s}`;
  }

  // Sync to the real clock boundary so it updates exactly when the second changes
  function startClock() {
    const now = new Date();
    renderTime(now);

    // Next update at the next exact second boundary
    const msToNextSecond = 1000 - now.getMilliseconds();

    // First align
    setTimeout(() => {
      renderTime(new Date());
      // Then set interval every 1000ms
      setInterval(() => renderTime(new Date()), 1000);
    }, msToNextSecond);
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', startClock, { once: true });
})();

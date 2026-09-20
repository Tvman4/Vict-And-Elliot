(function () {
  const target = new Date("2026-11-01T00:00:00-05:00").getTime();
  const ids = { d: "d", h: "h", m: "m", s: "s" };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000);
    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);

    const d = document.getElementById(ids.d);
    if (!d) return;
    d.textContent = pad(days);
    document.getElementById(ids.h).textContent = pad(hours);
    document.getElementById(ids.m).textContent = pad(mins);
    document.getElementById(ids.s).textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);

  document.querySelectorAll(".btn-discord").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
})();

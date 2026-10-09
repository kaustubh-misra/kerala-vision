// Shared sidebar for Project: Kerala Vision pages.
// Each page sets <body data-page="..."> to mark the active nav link.
(function () {
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "why-kerala.html", label: "Why Kerala?", key: "why-kerala" },
    { href: "climate.html", label: "Climate", key: "climate" },
    { href: "economy.html", label: "Economy", key: "economy" },
    { href: "livelihoods.html", label: "Livelihoods", key: "livelihoods" },
    { href: "agriculture.html", label: "Agriculture", key: "agriculture" },
    { href: "education.html", label: "Education", key: "education" },
    { href: "entrepreneurship.html", label: "Entrepreneurship", key: "entrepreneurship" },
    { href: "health.html", label: "Health", key: "health" },
  ];

  const currentPage = document.body.dataset.page || "home";

  const navHtml = links
    .map((link) => {
      const isActive = link.key === currentPage;
      return `<a href="${link.href}"${isActive ? ' aria-current="page"' : ""}>${link.label}</a>`;
    })
    .join("");

  const panel = document.createElement("aside");
  panel.className = "kv-panel";
  panel.innerHTML = `
    <nav class="kv-nav" aria-label="Primary">
      <div class="kv-wordmark-link" style="visibility: hidden;" aria-hidden="true">Project: Kerala Vision</div>
      ${navHtml}
    </nav>
    <div class="kv-about-block">
      <p>A climate-oriented, youth-centric, local-problem-solving vision for the state.</p>
    </div>
  `;

  document.body.prepend(panel);

  const watermark = document.createElement("div");
  watermark.className = "kv-watermark";
  watermark.setAttribute("aria-hidden", "true");
  document.body.appendChild(watermark);
})();

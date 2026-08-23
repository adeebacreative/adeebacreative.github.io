/* ==================================================================
   context behind theme
   tbh i cant choose an aesthetic, i love purples and blues in their dark form
   but also their icy light forms so that's why i hav an invert button.
   the dark mode is inspired by coraline, and the light mode is inspired by barbie swan lake.
================================================================== */
const html = document.documentElement;
const backdrop = document.getElementById("backdrop");
const easyDoesIt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* tries to remember which theme the user picks, so it sticks when they click through
   to another page instead of resetting to dark every time.
   wrapped in try/catch since some browsers block storage in private/incognito mode.
   if that happens it js falls back to per-page default. */
const THEME_KEY = "preferredTheme";
try {
  const remembered = localStorage.getItem(THEME_KEY);
  if (remembered === "dark" || remembered === "light") {
    html.setAttribute("data-theme", remembered);
  }
} catch (e) {
  /* if storage blocked, its wtv js wont do anything */
}

function stitchedButton(cx, cy, r) {
  return `<g opacity="0.4" stroke="#8b8fb3" stroke-width="0.6" fill="none">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0d0a1a" stroke="#4a4d70"/>
    <line x1="${cx - r * 0.5}" y1="${cy - r * 0.5}" x2="${cx + r * 0.5}" y2="${cy + r * 0.5}"/>
    <line x1="${cx + r * 0.5}" y1="${cy - r * 0.5}" x2="${cx - r * 0.5}" y2="${cy + r * 0.5}"/>
  </g>`;
}

const GOTHIC_LINEWORK = `
<svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="url(#tunnel)" opacity="0.5">
    <ellipse class="ring" cx="640" cy="480" rx="620" ry="470" stroke-width="1.4"/>
    <ellipse class="ring" cx="640" cy="480" rx="500" ry="378" stroke-width="1.2"/>
    <ellipse class="ring" cx="640" cy="480" rx="390" ry="296" stroke-width="1.1"/>
    <ellipse class="ring" cx="640" cy="480" rx="285" ry="218" stroke-width="1"/>
    <ellipse class="ring" cx="640" cy="480" rx="190" ry="146" stroke-width="0.9"/>
    <ellipse class="ring" cx="640" cy="480" rx="100" ry="78" stroke-width="0.8"/>
  </g>
  <g fill="none" stroke="url(#thread)" stroke-width="1.1" opacity="0.6">
    <path class="ring" d="M980,120 C1120,220 1100,420 940,480 C780,540 660,440 700,320 C740,200 880,180 900,280 C920,380 820,420 780,360" />
    <path class="ring" d="M120,700 C60,560 160,440 300,470 C440,500 480,620 400,680 C320,740 220,700 240,620 C260,540 340,540 350,600" />
    <path class="ring" d="M600,60 C660,20 740,40 750,100 C760,160 700,190 660,160" />
    <path class="ring" d="M1080,600 C1150,660 1130,760 1040,780 C950,800 900,730 950,690" />
    <path class="ring" d="M60,180 C20,130 70,70 140,80 C210,90 230,150 180,180" />
  </g>
  ${stitchedButton(1040, 220, 6)}
  ${stitchedButton(160, 560, 5)}
  ${stitchedButton(920, 700, 5)}
  ${stitchedButton(260, 190, 4.5)}
  <defs>
    <linearGradient id="thread" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7ba3e8"/><stop offset="100%" stop-color="#241f45"/>
    </linearGradient>
    <radialGradient id="tunnel">
      <stop offset="0%" stop-color="#020108"/><stop offset="55%" stop-color="#4a3f8f"/><stop offset="100%" stop-color="#7ba3e8"/>
    </radialGradient>
  </defs>
</svg>`;

const SWAN_LAKE = `
<svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <circle cx="960" cy="150" r="180" fill="url(#halo)" opacity="0.55"/>
  <circle cx="960" cy="150" r="90" fill="url(#moon)" opacity="0.8"/>
  <circle cx="960" cy="150" r="36" fill="#ffffff" opacity="0.9"/>
  <circle cx="220" cy="250" r="110" fill="url(#bokehA)" opacity="0.5"/>
  <circle cx="1000" cy="620" r="130" fill="url(#bokehB)" opacity="0.45"/>
  <circle cx="380" cy="720" r="80" fill="url(#bokehA)" opacity="0.35"/>
  <g fill="none" stroke="url(#neck)" stroke-width="1.1" opacity="0.5">
    <path d="M980,150 C955,250 890,320 810,355" />
    <path d="M905,190 C880,235 850,270 812,298" />
    <path d="M220,630 C198,548 232,466 305,424" />
    <path d="M262,566 C256,514 278,468 320,442" />
  </g>
  <g fill="#8d6fd6" opacity="0.6">
    <path d="M700,90 l5,12 12,5 -12,5 -5,12 -5,-12 -12,-5 12,-5z"/>
    <path d="M300,760 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3z"/>
    <path d="M1040,500 l4,9 9,4 -9,4 -4,9 -4,-9 -9,-4 9,-4z"/>
    <path d="M150,220 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3z"/>
    <path d="M520,180 l2,5 5,2 -5,2 -2,5 -2,-5 -5,-2 5,-2z"/>
    <path d="M840,780 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3z"/>
    <path d="M60,480 l2,5 5,2 -5,2 -2,5 -2,-5 -5,-2 5,-2z"/>
  </g>
  <g fill="none" stroke="url(#neck)" stroke-width="0.7" opacity="0.3">
    <path d="M0,780 C200,765 260,795 460,780 C660,765 720,795 920,780 C1040,772 1120,788 1200,780" />
    <path d="M0,830 C220,815 300,845 520,830 C740,815 820,845 1040,830 C1100,825 1160,835 1200,830" />
  </g>
  <defs>
    <radialGradient id="halo"><stop offset="0%" stop-color="#d8c8ff" stop-opacity="0.55"/><stop offset="100%" stop-color="#d8c8ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="moon"><stop offset="0%" stop-color="#eaf0ff" stop-opacity="0.9"/><stop offset="100%" stop-color="#eaf0ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="bokehA"><stop offset="0%" stop-color="#c9b8f0" stop-opacity="0.5"/><stop offset="100%" stop-color="#c9b8f0" stop-opacity="0"/></radialGradient>
    <radialGradient id="bokehB"><stop offset="0%" stop-color="#a9c2f0" stop-opacity="0.45"/><stop offset="100%" stop-color="#a9c2f0" stop-opacity="0"/></radialGradient>
    <linearGradient id="neck" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8d6fd6"/><stop offset="100%" stop-color="#5a7bc4"/></linearGradient>
  </defs>
</svg>`;

function paintBackdrop(theme) {
  if (!backdrop) return;
  backdrop.innerHTML = theme === "dark" ? GOTHIC_LINEWORK : SWAN_LAKE;
  if (!easyDoesIt) {
    backdrop.querySelectorAll(".ring").forEach((el, i) => {
      el.style.transformOrigin = "center";
      el.style.animation = `driftRing ${14 + i * 3}s ease-in-out infinite`;
    });
  }
}

if (!easyDoesIt) {
  const kf = document.createElement("style");
  kf.textContent = `@keyframes driftRing{0%,100%{transform:rotate(0deg) scale(1)}50%{transform:rotate(2.2deg) scale(1.02)}}`;
  document.head.appendChild(kf);
}

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  const switcher = document.getElementById("dim-switch-btn");
  if (switcher) switcher.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  paintBackdrop(theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    /* storage blocked, fine */
  }
}

const switcher = document.getElementById("dim-switch-btn");
if (switcher) {
  switcher.addEventListener("click", () => {
    setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
}
paintBackdrop(html.getAttribute("data-theme"));

/* ---------- hamburger menu only kicks in below 640px, see CSS ---------- */
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("nav.top");
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
}

/* ==================================================================
   drifting little lights
================================================================== */
const motesCanvas = document.getElementById("motes");
if (motesCanvas) {
  const ctx = motesCanvas.getContext("2d");
  let motes = [];

  function fitCanvas() {
    motesCanvas.width = innerWidth;
    motesCanvas.height = innerHeight;
  }
  addEventListener("resize", fitCanvas);
  fitCanvas();

  function seedMotes() {
    const count = 80;
    motes = Array.from({ length: count }, () => ({
      x: Math.random() * motesCanvas.width,
      y: Math.random() * motesCanvas.height,
      r: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.28 + 0.07,
      drift: (Math.random() - 0.5) * 0.22,
      base: Math.random() * 0.55 + 0.25,
      twinkleSpeed: Math.random() * 0.025 + 0.006,
      phase: Math.random() * Math.PI * 2,
      sparkle: Math.random() < 0.18 // a handful get a little flare instead of a plain dot
    }));
  }

  function moteLook() {
    const dark = html.getAttribute("data-theme") === "dark";
    return dark ? { rgb: "150,175,235", boost: 1 } : { rgb: "150,80,195", boost: 1.7 }; // richer + stronger on the pale bg so it actually reads
  }

  function drawMotes() {
    const { rgb, boost } = moteLook();
    ctx.clearRect(0, 0, motesCanvas.width, motesCanvas.height);
    motes.forEach((m) => {
      const tw = (Math.sin(m.phase) + 1) / 2;
      const alpha = Math.min(1, m.base * boost * (0.4 + tw * 0.6));
      if (m.sparkle && tw > 0.75) {
        // brief four-point twinkle for a bit of extra magic
        const s = m.r * 3.2;
        ctx.strokeStyle = `rgba(${rgb},${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(m.x - s, m.y);
        ctx.lineTo(m.x + s, m.y);
        ctx.moveTo(m.x, m.y - s);
        ctx.lineTo(m.x, m.y + s);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  function tickMotes() {
    motes.forEach((m) => {
      m.y -= m.speed;
      m.x += m.drift;
      m.phase += m.twinkleSpeed;
      if (m.y < -10) {
        m.y = motesCanvas.height + 10;
        m.x = Math.random() * motesCanvas.width;
      }
      if (m.x < -10) m.x = motesCanvas.width + 10;
      if (m.x > motesCanvas.width + 10) m.x = -10;
    });
    drawMotes();
    requestAnimationFrame(tickMotes);
  }

  seedMotes();
  if (easyDoesIt) drawMotes();
  else requestAnimationFrame(tickMotes);
}

/* ==================================================================
   GALLERY ENGINE
   one function builds the grid + wires up wtever kind of spotlight
   the page needs. Call buildGallery({...}) from each page's own tiny
   data file (e.g. video-editing-data.js) script loads.
   config = {
     grid:    the <div id="..."> to render pieces into
     mode:    "single"    -> one video or image per piece (video-editing)
              "carousel"  -> a piece can hold several photos/clips,
                              opens like an Instagram carousel (social, graphic)
              "site"      -> a piece is a live website: preview + a
                              real link to go look at it (websites page)
     pieces:  the array of my projects, shape depends on mode, see
              the comments in each -data.js file
     paginate: false      -> flip to true once i hv enough pieces
                              that an endless grid stops being fun to
                              scroll. see PAGE_SIZE below.
     previewMode: "hover" -> only "single" mode pieces have a card
                              preview loop at all. "hover" (default)
                              plays it on mouseenter like b4. "auto"
                              autoplays + loops it straight away,
                              no hover needed. see the pieces' own
                              -data.js file for the toggle.
   }
================================================================== */
function buildGallery(config) {
  const { grid, mode, pieces, paginate = false, previewMode = "hover" } = config;
  if (!grid) return;

  const PAGE_SIZE = 6; // only matters once paginate is true

  const veil = document.getElementById("spotlight-veil");
  const box = document.getElementById("spotlight");
  const stage = document.getElementById("spotlight-stage");
  const shutBtn = document.getElementById("spotlight-shut");
  const kicker = document.getElementById("spotlight-kicker");
  const title = document.getElementById("spotlight-title");
  const when = document.getElementById("spotlight-when");
  const context = document.getElementById("spotlight-context");

  let cameFrom = null;
  let page = 0;

  function peekIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="rgba(7,6,15,.55)" stroke="#eef1ff" stroke-width="1"/>
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="#eef1ff"/>
    </svg>`;
  }

  function makeCard(piece) {
    const card = document.createElement("button");
    card.className = "piece";
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `${piece.title} - see more`);

    const shot = document.createElement("div");
    shot.className = "piece-shot";
    shot.style.setProperty("--tint", piece.accent || "var(--accent-2)");

    // "single" mode pieces can now optionally carry a "frames" array (same
    // shape as carousel mode) so a video project can open as a carousel of
    // different links in the spotlight. when that's there, the card's
    // thumbnail + preview loop come from frames[0] instead of poster/preview
    // (the top-level poster/preview/full/embed fields go unused on that
    // project once frames exist with multiple clips in the group, those
    // fields can't tell which clip they'd even belong to, so frames[0] is
    // the one that gets to represent the group on the card. poster still
    // works as a manual override below if frames[0] doesn't give us
    // anything to grab a thumbnail from automatically, e.g. an instagram
    // link instead of youtube.)
    const firstFrame = mode === "single" && piece.frames?.length ? piece.frames[0] : null;
    const isVideoPiece = firstFrame ? firstFrame.type === "video" || firstFrame.type === "embed" : piece.type === "video";

    // if frames[0] is a youtube link, grab its thumbnail straight from
    // youtube (same img.youtube.com trick used by hand on the video page)
    // instead of needing a poster set manually.
    const firstFrameYtId = firstFrame && firstFrame.type === "embed" ? youTubeId(firstFrame.src) : null;

    // NOTE: "site" mode cards were falling thru to `piece.poster` here, but
    // websites-data.js pieces don't hv a poster field at all. they hv
    // "preview" instead. so a site card never actually showed a screenshot
    // n js sat there tinted. fixed: site cards now use piece.preview for
    // their thumbnail. this is JUST the grid thumbnail tho. clicking into
    // the spotlight always shows the real live site regardless (see
    // fillStageSite below), preview is only ever for the grid cover.
    const posterSrc =
      mode === "carousel" ? piece.frames?.[0]?.src
      : mode === "site" ? piece.preview
      : firstFrame
        ? firstFrame.type === "image"
          ? firstFrame.src
          : firstFrameYtId
            ? `https://img.youtube.com/vi/${firstFrameYtId}/maxresdefault.jpg`
            : piece.poster || ""
        : piece.poster;
    if (posterSrc) {
      const img = document.createElement("img");
      img.src = posterSrc;
      img.alt = "";
      shot.appendChild(img);
    }

    const previewSrc = firstFrame ? (firstFrame.type === "video" ? firstFrame.src : "") : piece.preview;
    if (mode === "single" && isVideoPiece && previewSrc) {
      const vid = document.createElement("video");
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.setAttribute("aria-hidden", "true");
      const src = document.createElement("source");
      src.src = previewSrc;
      vid.appendChild(src);
      shot.appendChild(vid);
      if (previewMode === "auto") {
        vid.preload = "auto";
        vid.autoplay = true;
        vid.play().catch(() => {}); // browsers can be fussy abt autoplay til it's attached, this catches that
      } else {
        vid.preload = "none";
        card.addEventListener("mouseenter", () => vid.play().catch(() => {}));
        card.addEventListener("mouseleave", () => {
          vid.pause();
          vid.currentTime = 0;
        });
      }
    } else if (mode === "single" && firstFrameYtId) {
      // no local file to preview from, but frames[0] is youtube. so just
      // borrow youtube's own player for the loop instead of needing a
      // self-hosted clip. muted + looped + controls off so it reads as a
      // silent little preview, same vibe as the mp4 version above.
      // (this only works for youtube. instagram doesn't hand out a
      // no-login preview like this, so instagram-first carousels just
      // keep showing the peek icon over the tint like they do now.)
      const ytPreviewSrc = `https://www.youtube.com/embed/${firstFrameYtId}?autoplay=1&mute=1&loop=1&playlist=${firstFrameYtId}&controls=0&modestbranding=1&playsinline=1&disablekb=1&rel=0&iv_load_policy=3`;

      const mountYtPreview = () => {
        if (shot.querySelector(".yt-preview")) return; // already playing, don't double up
        const frame = document.createElement("iframe");
        frame.className = "yt-preview";
        frame.src = ytPreviewSrc;
        frame.title = "";
        frame.setAttribute("aria-hidden", "true");
        frame.allow = "autoplay; encrypted-media";
        shot.insertBefore(frame, shot.querySelector(".badge")); // badge doesn't exist yet on first (auto) mount, works fine either way
      };
      const unmountYtPreview = () => {
        // pulling it out of the dom is what actually kills the sound.
        // there's no "pause" you can call on someone else's iframe from
        // out here
        shot.querySelector(".yt-preview")?.remove();
      };

      if (previewMode === "auto") {
        mountYtPreview();
      } else {
        card.addEventListener("mouseenter", mountYtPreview);
        card.addEventListener("mouseleave", unmountYtPreview);
      }
    }

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent =
      mode === "site"
        ? "Website"
        : mode === "carousel"
          ? `${piece.frames?.length || 1} up`
          : firstFrame && piece.frames.length > 1
            ? `${piece.frames.length} up`
            : isVideoPiece
              ? "Video"
              : "Image";
    shot.appendChild(badge);

    if (mode === "single" && isVideoPiece) {
      const peek = document.createElement("span");
      peek.className = "peek";
      peek.innerHTML = peekIcon();
      shot.appendChild(peek);
    }
    if (mode === "site") {
      const hint = document.createElement("span");
      hint.className = "visit-hint";
      hint.textContent = "Peek inside →";
      shot.appendChild(hint);
    }

    const info = document.createElement("div");
    info.className = "piece-info";
    info.innerHTML = `<span class="kicker">${piece.tag}</span><h3>${piece.title}</h3><span class="when">${piece.date}</span>`;

    card.appendChild(shot);
    card.appendChild(info);
    card.addEventListener("click", () => openSpotlight(piece));
    return card;
  }

  function totalPages() {
    return Math.max(1, Math.ceil(pieces.length / PAGE_SIZE));
  }

  function renderPage() {
    grid.innerHTML = "";
    const slice = paginate ? pieces.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE) : pieces;
    slice.forEach((p) => grid.appendChild(makeCard(p)));
    if (paginate) renderPager();
  }

  function renderPager() {
    let pager = document.getElementById("gallery-pager");
    if (!pager) {
      pager = document.createElement("div");
      pager.className = "pager";
      pager.id = "gallery-pager";
      grid.insertAdjacentElement("afterend", pager);
    }
    pager.innerHTML = "";

    const prev = document.createElement("button");
    prev.className = "pager-btn";
    prev.textContent = "← Earlier";
    prev.disabled = page === 0;
    prev.addEventListener("click", () => {
      page--;
      renderPage();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const status = document.createElement("span");
    status.className = "pager-status";
    status.textContent = `page ${page + 1} of ${totalPages()}`;

    const next = document.createElement("button");
    next.className = "pager-btn";
    next.textContent = "Newer →";
    next.disabled = page >= totalPages() - 1;
    next.addEventListener("click", () => {
      page++;
      renderPage();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    pager.appendChild(prev);
    pager.appendChild(status);
    pager.appendChild(next);
  }

  /* pulls just the video id out of a youtube link (youtu.be/ID or
     watch?v=ID). split this out on its own so both embedSrcFor below AND
     the card preview stuff up in makeCard can use it. the card needs
     the bare id to build img.youtube.com thumbnail + preview urls,
     not the full embed src. */
  function youTubeId(url) {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu")) {
        return u.hostname.includes("youtu.be")
          ? u.pathname.slice(1)
          : u.searchParams.get("v") || u.pathname.split("/").pop();
      }
    } catch (e) {
      /* not a full url, so def not youtube */
    }
    return null;
  }

  /* ---- turns a normal youTube/instagram link into the right embeddable
     iframe src. paste in whatever link  n this sorts out the rest. ---- */
  function embedSrcFor(url) {
    const ytId = youTubeId(url);
    if (ytId) return `https://www.youtube.com/embed/${ytId}`;
    try {
      const u = new URL(url);
      if (u.hostname.includes("instagram.com")) {
        const path = u.pathname.endsWith("/") ? u.pathname : u.pathname + "/";
        return `https://www.instagram.com${path}embed`;
      }
    } catch (e) {
      /* not a full URL, assume it's already an embed link */
    }
    return url;
  }

  function embedFrame(url, label) {
    const frame = document.createElement("iframe");
    frame.className = "embed-frame";
    frame.src = embedSrcFor(url);
    frame.title = label;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    return frame;
  }

  /* ---- spotlight: single media ---- */
  function fillStageSingle(piece) {
    stage.innerHTML = "";
    if (piece.embed) {
      stage.appendChild(embedFrame(piece.embed, piece.title));
      return;
    }
    if (piece.type === "video") {
      const vid = document.createElement("video");
      vid.controls = true;
      vid.autoplay = true;
      vid.poster = piece.poster || "";
      const src = document.createElement("source");
      src.src = piece.full || piece.preview || "";
      vid.appendChild(src);
      stage.appendChild(vid);
    } else {
      const img = document.createElement("img");
      img.src = piece.full || piece.poster || "";
      img.alt = piece.title;
      stage.appendChild(img);
    }
  }

  /* ---- spotlight: carousel (multiple frames, instagram-style) ---- */
  function fillStageCarousel(piece) {
    stage.innerHTML = "";
    const frames = piece.frames || [];
    let idx = 0;

    const frameHost = document.createElement("div");
    frameHost.style.cssText = "width:100%;height:100%;position:relative;";
    stage.appendChild(frameHost);

    // direction is "next" / "prev" / undefined (undefined on the very
    // first paint, so it js appears normally instead of sliding in from
    // nowhere). used to pick which slide-in animation plays, see the
    // .frame-slide-next / .frame-slide-prev keyframes in styles.css.
    // makes swiping thru photos/clips actually feel like swiping instead
    // of a flat static swap.
    function paintFrame(direction) {
      frameHost.innerHTML = "";
      const f = frames[idx];
      if (!f) return;
      let el;
      if (f.type === "embed") {
        el = embedFrame(f.src, `${piece.title} — embed`);
        el.style.cssText = "width:100%;height:100%;border:0;";
      } else if (f.type === "video") {
        el = document.createElement("video");
        el.controls = true;
        el.autoplay = true;
        el.src = f.src;
        el.style.cssText = "width:100%;height:100%;object-fit:contain;";
      } else {
        el = document.createElement("img");
        el.src = f.src;
        el.alt = "";
        el.style.cssText = "width:100%;height:100%;object-fit:contain;";
      }
      if (!easyDoesIt && direction) {
        el.classList.add(direction === "next" ? "frame-slide-next" : "frame-slide-prev");
      }
      frameHost.appendChild(el);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    }

    if (frames.length > 1) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "carousel-prev";
      prevBtn.setAttribute("aria-label", "Previous photo");
      prevBtn.textContent = "‹";
      prevBtn.addEventListener("click", () => {
        idx = (idx - 1 + frames.length) % frames.length;
        paintFrame("prev");
      });

      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-next";
      nextBtn.setAttribute("aria-label", "Next photo");
      nextBtn.textContent = "›";
      nextBtn.addEventListener("click", () => {
        idx = (idx + 1) % frames.length;
        paintFrame("next");
      });

      const dotWrap = document.createElement("div");
      dotWrap.className = "carousel-dots";
      var dots = frames.map((_, i) => {
        const d = document.createElement("span");
        if (i === 0) d.classList.add("active");
        dotWrap.appendChild(d);
        return d;
      });

      stage.appendChild(prevBtn);
      stage.appendChild(nextBtn);
      stage.appendChild(dotWrap);

      // actual finger-swipe support, not js the arrow buttons. swipe
      // left goes to the next frame, swipe right goes back. 40px min
      // distance so a tap or a lil accidental wobble doesn't count.
      let touchStartX = null;
      frameHost.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.touches[0].clientX;
        },
        { passive: true }
      );
      frameHost.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        touchStartX = null;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) {
          idx = (idx + 1) % frames.length;
          paintFrame("next");
        } else {
          idx = (idx - 1 + frames.length) % frames.length;
          paintFrame("prev");
        }
      });
    } else {
      var dots = [];
    }

    paintFrame();
  }

  /* ---- spotlight: live website preview ----
     always the real live site in an iframe here, no matter what preview
     is set to. preview is js for the grid card's screenshot cover now
     (see the posterSrc note up in makeCard). clicking in is what gets u
     the actual live thing. */
  function fillStageSite(piece) {
    stage.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "site-frame";
    frame.src = piece.url;
    frame.title = piece.title;
    stage.appendChild(frame);
  }

  function openSpotlight(piece) {
    cameFrom = document.activeElement;

    if (mode === "single") {
      // pieces with a "frames" array open as a carousel of links instead
      // of the usual single video/image (see the "frames" option in
      // video-editing-data.js)
      if (piece.frames?.length) fillStageCarousel(piece);
      else fillStageSingle(piece);
    } else if (mode === "carousel") fillStageCarousel(piece);
    else fillStageSite(piece);

    kicker.textContent = piece.tag;
    title.textContent = piece.title;
    when.textContent = piece.date;
    context.textContent = piece.context;

    const existingLink = box.querySelector(".visit-link");
    if (existingLink) existingLink.remove();
    if (mode === "site" && piece.url) {
      const link = document.createElement("a");
      link.className = "visit-link";
      link.href = piece.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Visit the live site →";
      context.insertAdjacentElement("afterend", link);
    }

    veil.hidden = false;
    document.body.style.overflow = "hidden";
    shutBtn.focus();
    document.addEventListener("keydown", onSpotlightKeydown);
    if (window.pauseSparkleTrail) window.pauseSparkleTrail();
  }

  function closeSpotlight() {
    // used to just do `stage.querySelector("video")?.pause()` here, but that
    // only ever stopped a real <video> tag. it did nothing for an embedded
    // youtube/instagram iframe (no "pause" you can call on someone else's
    // iframe from out here), so closing the spotlight on an embed left the
    // audio playing in the background even tho it was hidden. wiping the
    // whole stage kills it either way. video or iframe, since it's not
    // in the dom anymore to keep making noise.
    stage.innerHTML = "";
    veil.hidden = true;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onSpotlightKeydown);
    if (cameFrom) cameFrom.focus();
    if (window.resumeSparkleTrail) window.resumeSparkleTrail();
  }

  function onSpotlightKeydown(e) {
    if (e.key === "Escape") {
      closeSpotlight();
      return;
    }
    if (e.key === "Tab") {
      const focusables = box.querySelectorAll('button, [href], video, iframe, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0],
        last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  shutBtn.addEventListener("click", closeSpotlight);
  veil.addEventListener("click", (e) => {
    if (e.target === veil) closeSpotlight();
  });

  renderPage();
}

/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
****************************/
/****************************
*  Dynamic Theme Sparkle    *
* (c)2005-13 mf2fm web-design*
* Modified for CSS Variables *
****************************/

(function() {
  // Sparkle configuration
  const sparkles = 50;
  let fastDecay = false; // true while a spotlight is open. trail keeps sparkling, js fades out way quicker so it's not lingering over the video/image
  const NORMAL_LIFE = 50; // ticks a sparkle lives for normally (40ms per tick)
  const FAST_LIFE = 14;   // shortened life while fastDecay is on

  let x = 400, ox = 400;
  let y = 300, oy = 300;
  let swide = 800;
  let shigh = 600;
  let sleft = 0, sdown = 0;

  const tiny = [];
  const star = [];
  const starv = [];
  const starMax = []; // life this particular sparkle was spawned with, so the
                       // shrink/fade points below still land at the halfway mark
  const starx = [];
  const stary = [];
  const tinyx = [];
  const tinyy = [];
  const tinyv = [];

  document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < sparkles; i++) {
      const rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      rats.style.zIndex = "9999";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;

      const starRats = createDiv(5, 5);
      starRats.style.backgroundColor = "transparent";
      starRats.style.visibility = "hidden";
      starRats.style.zIndex = "9999";
      
      const rlef = createDiv(1, 5);
      const rdow = createDiv(5, 1);
      starRats.appendChild(rlef);
      starRats.appendChild(rdow);
      
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = starRats);
    }
    set_width();
    sparkle();
  });

  // Dynamically extracts Coraline / Swan Lake colors from your active CSS variables
  function getThemeColor() {
    const rootStyle = getComputedStyle(document.documentElement);
    // Randomly alternates between your primary accent and secondary accent colors
    const useSecondary = Math.random() > 0.5;
    const colorVar = useSecondary ? '--accent-2' : '--accent';
    return rootStyle.getPropertyValue(colorVar).trim() || "#7ba3e8";
  }

  function sparkle() {
    if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
      ox = x;
      oy = y;
      for (let c = 0; c < sparkles; c++) {
        if (!starv[c]) {
          star[c].style.left = (starx[c] = x) + "px";
          star[c].style.top = (stary[c] = y + 1) + "px";
          star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
          
          // grab the live color from the active theme
          const dynamicColor = getThemeColor();
          if (star[c].childNodes[0] && star[c].childNodes[1]) {
            star[c].childNodes[0].style.backgroundColor = dynamicColor;
            star[c].childNodes[1].style.backgroundColor = dynamicColor;
          }
          
          star[c].style.visibility = "visible";
          starMax[c] = fastDecay ? FAST_LIFE : NORMAL_LIFE;
          starv[c] = starMax[c];
          break;
        }
      }
    }
    for (let c = 0; c < sparkles; c++) {
      if (starv[c]) update_star(c);
      if (tinyv[c]) update_tiny(c);
    }
    setTimeout(sparkle, 40);
  }

  function update_star(i) {
    if (--starv[i] === Math.floor(starMax[i] / 2)) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
      stary[i] += 1 + Math.random() * 3;
      starx[i] += (i % 5 - 2) / 5;
      if (stary[i] < shigh + sdown) {
        star[i].style.top = stary[i] + "px";
        star[i].style.left = starx[i] + "px";
      } else {
        star[i].style.visibility = "hidden";
        starv[i] = 0;
      }
    } else {
      tinyv[i] = starMax[i]; // afterglow phase gets the same lifespan the star had
      tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
      tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
      tiny[i].style.width = "2px";
      tiny[i].style.height = "2px";
      if (star[i].childNodes[0]) {
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
      }
      star[i].style.visibility = "hidden";
      tiny[i].style.visibility = "visible";
    }
  }

  function update_tiny(i) {
    if (--tinyv[i] === Math.floor(starMax[i] / 2)) {
      tiny[i].style.width = "1px";
      tiny[i].style.height = "1px";
    }
    if (tinyv[i]) {
      tinyy[i] += 1 + Math.random() * 3;
      tinyx[i] += (i % 5 - 2) / 5;
      if (tinyy[i] < shigh + sdown) {
        tiny[i].style.top = tinyy[i] + "px";
        tiny[i].style.left = tinyx[i] + "px";
      } else {
        tiny[i].style.visibility = "hidden";
        tinyv[i] = 0;
      }
    } else {
      tiny[i].style.visibility = "hidden";
    }
  }

  document.addEventListener("mousemove", (e) => {
    y = e.pageY;
    x = e.pageX;
  });

  window.addEventListener("scroll", () => {
    sdown = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    sleft = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
  });

  window.addEventListener("resize", set_width);

  function set_width() {
    swide = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 800;
    shigh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 600;
  }

  function createDiv(height, width) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    return div;
  }

  // called when a spotlight opens. trail keeps going
  // but switches to the short life, so it fades out fast instead of
  // drifting across your video/image while someone's trying to watch it.
  window.pauseSparkleTrail = function () {
    fastDecay = true;
    for (let c = 0; c < sparkles; c++) {
      if (starv[c] > FAST_LIFE) {
        starMax[c] = FAST_LIFE;
        starv[c] = FAST_LIFE;
      }
      if (tinyv[c] > FAST_LIFE) tinyv[c] = FAST_LIFE;
    }
  };

  // called when the spotlight closes trail goes back to its normal, lazier decay
  window.resumeSparkleTrail = function () {
    fastDecay = false;
  };
})();
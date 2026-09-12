// ── Clips list ──────────────────────────────────────────────
// Two kinds of entries:
//   YouTube:      { id: "dQw4w9WgXcQ", title: "Insane clutch 1v5" }
//                 (id is the part after "v=" or after "youtu.be/" in the video URL)
//   Self-hosted:  { src: "assets/clips/my-clip.mp4", title: "How did this even happen" }
//                 (src is a video file placed in assets/clips/)
const CLIPS = [
  { src: "assets/clips/hibana-2k-funny-tk.mp4", title: "Hibana 2K — Funny TK" },
];

function renderClips() {
  const grid = document.getElementById('clipsGrid');
  if (!grid) return;

  if (CLIPS.length === 0) {
    grid.innerHTML = `
      <div class="clips-empty">
        <i class="fa-solid fa-clapperboard"></i>
        New clips are on the way — check the YouTube channel for the latest uploads.
      </div>`;
    return;
  }

  grid.innerHTML = CLIPS.map(clip => `
    <div class="clip-card">
      <div class="clip-frame">
        ${clip.src ? `
        <video controls preload="metadata" playsinline title="${clip.title}">
          <source src="${clip.src}">
        </video>` : `
        <iframe
          src="https://www.youtube.com/embed/${clip.id}"
          title="${clip.title}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>`}
      </div>
      <div class="clip-title">${clip.title}</div>
    </div>
  `).join('');
}

function setupNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => links.classList.remove('open'))
  );
}

document.getElementById('year').textContent = new Date().getFullYear();
renderClips();
setupNav();

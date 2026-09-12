// ── Clips list ──────────────────────────────────────────────
// Add your recent clips here. `id` is the YouTube video ID
// (the part after "v=" or after "youtu.be/" in the video URL).
// Example: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -> id: "dQw4w9WgXcQ"
const CLIPS = [
  // { id: "dQw4w9WgXcQ", title: "Insane clutch 1v5" },
  // { id: "dQw4w9WgXcQ", title: "How did this even happen" },
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
        <iframe
          src="https://www.youtube.com/embed/${clip.id}"
          title="${clip.title}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
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

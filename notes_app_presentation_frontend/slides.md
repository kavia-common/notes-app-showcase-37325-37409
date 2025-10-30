---
# Global deck settings
theme: default
title: "Notes App — Ocean Professional Walkthrough"
info: |
  Dynamic, animated walkthrough of the Notes App.
  Ocean Professional theme: primary #2563EB, secondary/success #F59E0B, error #EF4444.
class: text-left
mdc: true
transition: slide-left
fonts:
  sans: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial
  mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
css: |
  @import "./style.css";
---

layout: cover
class: with-hero-glow
transition: fade-out
---

# Notes App
<div class="title-slide">
  <div class="hero-copy">
    <h2 class="text-hero" style="color:#2563EB;">Capture ideas. Organize knowledge.</h2>
    <p class="subtitle text-md" style="color:#111827;">
      A fast, minimal notes experience with powerful organization.
    </p>
    <div class="subtitle text-xs" style="color:#6B7280;">Ocean Professional Theme • Clean • Modern</div>
    <div class="hero-ctas mt-2">
      <button class="btn-primary">Live Demo</button>
      <button class="btn-secondary">Docs</button>
    </div>
  </div>
</div>

---

transition: slide-left
class: notes-bg
---

# Feature Overview

- Blazing fast list and search functionality
- Tags & filters for quick organization
- Distraction-free editing with markdown support
- Real-time sync and collaboration
- Secure by default with offline-first behavior
<!-- v-click -->
<div class="card mt-2" style="background:linear-gradient(135deg,#eff6ff,#ffffff);border-color:#dbeafe;">
  <div class="eyebrow" style="background:#DBEAFE;color:#1E3A8A;border-color:#BFDBFE;">Ocean Professional</div>
  <div class="grid-2">
    <div>
      <ul class="points-clean">
        <li>Primary: #2563EB</li>
        <li>Secondary/Success: #F59E0B</li>
        <li>Error: #EF4444</li>
      </ul>
    </div>
    <div>
      <span class="pill" style="background:#2563EB;color:white;border:0;">Primary</span>
      <span class="pill" style="background:#F59E0B;color:#111827;border:0;margin-left:8px;">Secondary</span>
      <span class="pill" style="background:#EF4444;color:white;border:0;margin-left:8px;">Error</span>
    </div>
  </div>
</div>

---

transition: fade
---

# Notes List

<div class="split-cols">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">List</div>
      <h3 class="feature-title">Fast, Filterable</h3>
      <ul class="points-clean">
        <li class="fragment">Instant keyboard navigation</li>
        <li class="fragment">Pinned and recent notes</li>
        <li class="fragment">Tag chips and quick filters</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">UX</div>
      <h3 class="feature-title">Minimal & Focused</h3>
      <p class="muted">Clean layout with subtle shadows and rounded corners.</p>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame tall">
      <img src="/assets/mockups/notes-list.svg" alt="Notes list mockup" style="max-width:100%;border-radius:12px;">
    </div>
  </div>
</div>

---

transition: slide-up
---

# Note Details & Editing

<div class="split-cols">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">Editor</div>
      <h3 class="feature-title">Markdown + Inline Formatting</h3>
      <ul class="points-clean">
        <li class="fragment">Headings, lists, code</li>
        <li class="fragment">Quick toolbar shortcuts</li>
        <li class="fragment">Autosave & versioning</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">Performance</div>
      <h3 class="feature-title">Optimized Rendering</h3>
      <p class="muted">Lazy loading of heavy content, smart diffing.</p>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame tall">
      <img src="/assets/mockups/note-detail.svg" alt="Note detail mockup" style="max-width:100%;border-radius:12px;">
    </div>
  </div>
</div>

---

transition: fade
---

# Search & Tags

<div class="split-cols">
  <div class="left">
    <div class="feature-card">
      <div class="eyebrow">Search</div>
      <h3 class="feature-title">Type-to-find</h3>
      <ul class="points-clean">
        <li class="fragment">Fuzzy matching</li>
        <li class="fragment">Title & content indexing</li>
        <li class="fragment">Keyboard-first flow</li>
      </ul>
    </div>
    <div class="feature-card">
      <div class="eyebrow">Tags</div>
      <h3 class="feature-title">Color-coded</h3>
      <p class="muted">Quick tag chips with filter persistence.</p>
    </div>
  </div>
  <div class="right">
    <div class="glass-frame">
      <img src="/assets/mockups/search-tags.svg" alt="Search and tags mockup" style="max-width:100%;border-radius:12px;">
    </div>
  </div>
</div>

---

transition: slide-left
---

# Sync & Collaboration

<div class="grid-2 mt-2">
  <div class="card">
    <div class="eyebrow" style="background:#FEF3C7;border-color:#FDE68A;color:#92400E;">Real-time</div>
    <h3 class="feature-title">Live cursors, presence</h3>
    <ul class="points-clean">
      <li class="fragment">Multi-user edits</li>
      <li class="fragment">Conflict-free merges</li>
      <li class="fragment">Comment threads</li>
    </ul>
  </div>
  <div class="card">
    <div class="eyebrow" style="background:#E0E7FF;border-color:#C7D2FE;color:#3730A3;">Resilient</div>
    <h3 class="feature-title">Offline-first</h3>
    <ul class="points-clean">
      <li class="fragment">Local cache and retry queue</li>
      <li class="fragment">Background sync</li>
      <li class="fragment">Optimistic updates</li>
    </ul>
  </div>
</div>

---

transition: fade-out
---

# Performance & Quality

<div class="stats-grid mt-2">
  <div class="stat-card">
    <div class="stat-number" style="background:linear-gradient(135deg,#2563EB,#60A5FA);"><100ms</div>
    <div class="stat-label">Search Latency</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" style="background:linear-gradient(135deg,#2563EB,#60A5FA);">95+</div>
    <div class="stat-label">Lighthouse Score</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" style="background:linear-gradient(135deg,#2563EB,#60A5FA);">99.9%</div>
    <div class="stat-label">Sync Uptime</div>
  </div>
</div>

```ts {monaco} {lines:false} {maxHeight:'200px'}
/**
 * Example: client config (static demo; uses VITE_* envs if needed elsewhere)
 */
export const clientConfig = {
  base: import.meta.env.VITE_FRONTEND_URL,
  api: import.meta.env.VITE_BACKEND_URL,
  ws: import.meta.env.VITE_WS_URL,
  nodeEnv: import.meta.env.VITE_NODE_ENV,
}
```

---

transition: slide-up
class: text-center
---

# Closing & Contact

- Try the demo and share feedback
- Fork the template and build your own
- Star on GitHub if you like it!

<div class="mt-2">
  <span class="pill" style="background:#2563EB;color:white;border:0;">hello@example.com</span>
  <span class="pill" style="background:#F59E0B;color:#111827;border:0;margin-left:8px;">@notes-app</span>
</div>

<div class="mt-4 subtle">Press S for presenter mode • Use arrow keys to navigate</div>

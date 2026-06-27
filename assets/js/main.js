/* =====================================================
   AI Agent Harness Training — Main JavaScript
   ===================================================== */

'use strict';

// ─── Scroll progress bar ───────────────────────────────
// Supports .scroll-progress-fill (modules 1-9) and #scrollBar (modules 10-17)
function initScrollProgress() {
  const fill = document.querySelector('.scroll-progress-fill') || document.getElementById('scrollBar');
  if (!fill) return;
  // Apply the correct CSS class so existing styles work
  if (!fill.classList.contains('scroll-progress-fill')) {
    fill.classList.add('scroll-progress-fill');
  }
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    fill.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

// ─── Active sidebar link via IntersectionObserver ──────
// Supports .sidebar-item[href] (modules 1-9) and .sidebar-nav a (modules 10-17)
function initScrollSpy() {
  const sections  = document.querySelectorAll('section[id]');
  const sideLinks = document.querySelectorAll('.sidebar-item[href], .sidebar-nav a[href^="#"]');
  if (!sections.length || !sideLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sideLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ─── Smooth scroll for in-page anchors ─────────────────
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ─── Progress persistence (localStorage) ───────────────
const PROGRESS_KEY = 'agentharness_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress(key, value) {
  const p = loadProgress();
  p[key] = value;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function applyProgressUI() {
  const p = loadProgress();
  document.querySelectorAll('.sidebar-item[data-lesson]').forEach(item => {
    const key = item.getAttribute('data-lesson');
    if (p[key]) item.classList.add('completed');
  });

  // Progress bar on module pages
  const bar = document.querySelector('.progress-fill');
  const moduleKey = document.body.getAttribute('data-module');
  if (bar && moduleKey) {
    const lessons = document.querySelectorAll('.sidebar-item[data-lesson]').length || 4;
    const done = Object.keys(p).filter(k => k.startsWith(moduleKey)).length;
    bar.style.width = Math.round((done / lessons) * 100) + '%';
    const label = document.querySelector('.progress-label');
    if (label) label.textContent = `${done} / ${lessons} bài hoàn thành`;
  }
}

// Mark lesson done when scrolled to bottom
function initLessonCompletion() {
  const lessonKey = document.body.getAttribute('data-lesson');
  if (!lessonKey) return;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      saveProgress(lessonKey, true);
      applyProgressUI();
    }
  }, { threshold: 0.5 });

  const footer = document.querySelector('.lesson-nav');
  if (footer) observer.observe(footer);
}

// ─── Copy code button ───────────────────────────────────
function initCodeCopy() {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Sao chép';
    btn.style.cssText = `position:absolute;top:10px;right:10px;background:#334155;color:#fff;border:none;padding:3px 8px;border-radius:5px;font-size:0.7rem;cursor:pointer;transition:all .2s;z-index:2;`;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(block.innerText.replace(/^Sao chép\n?/, ''));
      btn.textContent = '✓ Đã sao chép';
      setTimeout(() => btn.textContent = 'Sao chép', 2000);
    });
    block.style.position = 'relative';
    block.appendChild(btn);
  });
}

// ─── Tab components ─────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabs => {
    const triggers = tabs.querySelectorAll('[role=tab]');
    const panels   = tabs.querySelectorAll('[role=tabpanel]');
    triggers.forEach((t, i) => {
      t.addEventListener('click', () => {
        triggers.forEach(x => { x.setAttribute('aria-selected', 'false'); x.classList.remove('active'); });
        panels.forEach(p => p.hidden = true);
        t.setAttribute('aria-selected', 'true');
        t.classList.add('active');
        panels[i].hidden = false;
      });
    });
  });
}

// ─── Collapsible details ────────────────────────────────
function initCollapsible() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.style.maxHeight;
      body.style.maxHeight  = isOpen ? '' : body.scrollHeight + 'px';
      header.classList.toggle('open', !!body.style.maxHeight);
    });
  });
}

// ─── Progressive Disclosure (expand sections) ───────────
function toggleExpand(btn) {
  const content = btn.nextElementSibling;
  const isOpen  = content.classList.contains('open');
  content.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}

// ─── Concept Check reveal ────────────────────────────────
function toggleConceptCheck(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('revealed');
  answer.classList.toggle('revealed', !isOpen);
  btn.textContent = isOpen ? '💡 Xem gợi ý' : '🙈 Ẩn gợi ý';
}

// ─── Animate-on-scroll (IntersectionObserver) ────────────
function initAnimateOnScroll() {
  const els = document.querySelectorAll('.learning-objective, .key-formula, .concept-check, .stat-card, .callout');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ─── Table scroll enhancement ───────────────────────────
function initTableScroll() {
  document.querySelectorAll('.table-scroll').forEach(wrapper => {
    const checkOverflow = () => {
      const isScrollable = wrapper.scrollWidth > wrapper.clientWidth + 4;
      wrapper.classList.toggle('is-scrollable', isScrollable);
    };

    // Update fade hint position as user scrolls
    wrapper.addEventListener('scroll', () => {
      const atEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 8;
      wrapper.classList.toggle('scrolled-end', atEnd);
    }, { passive: true });

    checkOverflow();
    // Re-check on resize
    if (window.ResizeObserver) {
      new ResizeObserver(checkOverflow).observe(wrapper);
    }
  });
}

// ─── Mobile sidebar drawer ──────────────────────────────
function initMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  const topbar  = document.querySelector('.topbar');
  if (!topbar) return;
  if (!sidebar) return; // Quiz/landing pages: topbar-nav stays visible, no hamburger needed
  document.body.classList.add('has-sidebar');

  // Inject hamburger button into topbar
  const btn = document.createElement('button');
  btn.className = 'mobile-menu-btn';
  btn.setAttribute('aria-label', 'Mở menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  topbar.appendChild(btn);

  // Inject overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('sidebar-open');
    overlay.classList.add('active');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('sidebar-open');
    overlay.classList.remove('active');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // Close on anchor click (navigate to section)
  sidebar.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 1024) closeSidebar();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });

  // Re-open body scroll if window resizes to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeSidebar();
      document.body.style.overflow = '';
    }
  }, { passive: true });
}

// ─── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initScrollSpy();
  initSmoothScroll();
  applyProgressUI();
  initLessonCompletion();
  initCodeCopy();
  initTabs();
  initCollapsible();
  initAnimateOnScroll();
  initTableScroll();
  initMobileMenu();
});

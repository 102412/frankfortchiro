document.addEventListener('DOMContentLoaded', function () {
  /* ---------------- Nav drawer ---------------- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    var closers = drawer.querySelectorAll('[data-nav-close]');
    var openDrawer = function () {
      drawer.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    var closeDrawer = function () {
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', function () {
      if (drawer.classList.contains('open')) { closeDrawer(); } else { openDrawer(); }
    });
    closers.forEach(function (el) { el.addEventListener('click', closeDrawer); });
    drawer.querySelectorAll('.nav-drawer-links a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDrawer(); }
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealSelectors = [
    'section .section-head', '.value-card', '.location-card', '.doctor-card',
    '.symptom-tile', '.service-card', '.doctor-bio', '.cta-band',
    '.insurance-band > div', '.insurance-list', '.map-embed', '.hours-table',
    '#intake-form .card'
  ];
  var revealEls = document.querySelectorAll(revealSelectors.join(','));
  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(function (el, i) {
      el.setAttribute('data-reveal', '');
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + 's';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------- Animated stat counters ---------------- */
  var counters = document.querySelectorAll('.hero-stat strong');
  if ('IntersectionObserver' in window && counters.length) {
    var countUp = function (el) {
      var raw = el.textContent.trim();
      var match = raw.match(/^(\d+)(.*)$/);
      if (!match) return;
      var target = parseInt(match[1], 10);
      var suffix = match[2];
      var start = 0;
      var duration = 900;
      var startTime = null;
      var step = function (ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(start + (target - start) * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    var counterIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          counterIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterIo.observe(el); });
  }

  /* ---------------- Intake form ---------------- */
  var form = document.querySelector('.intake-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmation = form.querySelector('.form-confirmation');
      form.querySelectorAll('input, select, textarea, button').forEach(function (el) {
        el.disabled = true;
      });
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});

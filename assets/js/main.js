document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

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

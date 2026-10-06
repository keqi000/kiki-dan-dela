document.addEventListener('DOMContentLoaded', () => {
  // Replace feather icons
  if (window.feather) {
    window.feather.replace();
  }

  // Navbar mobile toggle
  const navbarNav = document.querySelector('#navbarNav');
  const menuBtn = document.querySelector('#menu');

  if (menuBtn && navbarNav) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navbarNav.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
      }
    });

    // Close mobile nav when clicking a link
    navbarNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
      });
    });
  }

  // Scroll Progress + Navbar scrolled + Back to top
  const navbar = document.getElementById('navbar');
  const progress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Scroll progress bar
    if (progress && maxScroll > 0) {
      progress.style.width = (scrollY / maxScroll * 100) + '%';
    }

    // Navbar glass effect
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }

    // Back to top visibility
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }

    // Active nav link scroll spy
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      const link = document.querySelector(`.navbar-nav a[href="#${section.id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll reveal (Intersection Observer)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Typing effect hero
  const target = document.getElementById('typingText');
  if (target) {
    const words = ['Febrian & Nurdela ♥', 'ReDo Family ♥'];
    let wIndex = 0;
    let cIndex = 0;
    let deleting = false;

    function type() {
      const word = words[wIndex];
      const speed = deleting ? 60 : 110;

      target.textContent = word.substring(0, cIndex);

      if (!deleting && cIndex === word.length) {
        setTimeout(() => { deleting = true; type(); }, 2200);
        return;
      }
      if (deleting && cIndex === 0) {
        deleting = false;
        wIndex = (wIndex + 1) % words.length;
      }

      cIndex += deleting ? -1 : 1;
      setTimeout(type, speed);
    }

    type();
  }

  // Lightbox
  const galeriItems = document.querySelectorAll('.galeri-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  let currentIndex = 0;

  if (lightbox && galeriItems.length > 0) {
    const images = Array.from(galeriItems).map(item => ({
      src: item.querySelector('img').src,
      caption: item.querySelector('h3') ? item.querySelector('h3').textContent : '',
    }));

    function openLightbox(index) {
      currentIndex = index;
      lbImg.src = images[index].src;
      lbCaption.textContent = images[index].caption;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.feather) window.feather.replace();
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function navigate(dir) {
      currentIndex = (currentIndex + dir + images.length) % images.length;
      lbImg.src = images[currentIndex].src;
      lbCaption.textContent = images[currentIndex].caption;
    }

    galeriItems.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', () => navigate(-1));
    if (lbNext) lbNext.addEventListener('click', () => navigate(1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  // Love Counter
  const countYears = document.getElementById('countYears');
  const countMonths = document.getElementById('countMonths');
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countSeconds = document.getElementById('countSeconds');

  if (countYears && countMonths && countDays && countHours && countSeconds) {
    const startDateAttr = document.querySelector('[data-start-date]')?.getAttribute('data-start-date') || '2022-01-17T00:00:00';
    const start = new Date(startDateAttr);

    function updateCounter() {
      const now = new Date();
      let diff = now - start;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
      const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30) % 12;
      const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

      countYears.textContent = String(years).padStart(2, '0');
      countMonths.textContent = String(months).padStart(2, '0');
      countDays.textContent = String(days).padStart(2, '0');
      countHours.textContent = String(hours).padStart(2, '0');
      countSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCounter();
    setInterval(updateCounter, 1000);
  }

  // Music Player
  const musicToggle = document.getElementById('musicToggle');
  const musicInfo = document.getElementById('musicInfo');
  const musicPlay = document.getElementById('musicPlay');
  const musicDisc = document.getElementById('musicDisc');
  const musicNotif = document.getElementById('musicNotif');
  const audioSrc = document.getElementById('musicPlayer')?.getAttribute('data-audio-src') || '/assets/music/bruno mars - risk it all.mp3';

  if (musicToggle && musicInfo && musicPlay && musicDisc) {
    let isOpen = false;
    let isPlaying = false;
    let autoplayDone = false;

    const audio = new Audio();
    audio.loop = true;
    audio.src = audioSrc;

    function setPlaying(state) {
      isPlaying = state;
      if (isPlaying) {
        audio.play().catch(() => {});
        musicDisc.classList.add('spinning');
        musicPlay.innerHTML = '<i data-feather="pause"></i>';
      } else {
        audio.pause();
        musicDisc.classList.remove('spinning');
        musicPlay.innerHTML = '<i data-feather="play"></i>';
      }
      if (window.feather) window.feather.replace();
    }

    function handleAutoplay() {
      if (autoplayDone) return;
      autoplayDone = true;
      if (musicNotif) musicNotif.classList.remove('show');
      setPlaying(true);
    }

    if (musicNotif) {
      setTimeout(() => musicNotif.classList.add('show'), 1500);
    }

    musicToggle.addEventListener('click', () => {
      handleAutoplay();
      isOpen = !isOpen;
      musicInfo.classList.toggle('open', isOpen);
      if (window.feather) window.feather.replace();
    });

    musicPlay.addEventListener('click', () => setPlaying(!isPlaying));
  }

  // Parallax Hero
  const heroSection = document.querySelector('.home');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroSection.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`;
      }
    });
  }

  // 3D Tilt Card
  document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = ((y - cy) / cy) * 10;
      const tiltY = ((x - cx) / cx) * -10;
      card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });
});

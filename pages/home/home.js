// Navbar toggle mobile
const navbarNav = document.querySelector('.navbar-nav');
const menuBtn = document.querySelector('#menu');

menuBtn.onclick = () => navbarNav.classList.toggle('active');

document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Navbar scrolled + scroll progress + back to top
const navbar    = document.querySelector('.navbar');
const progress  = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollY   = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // scroll progress bar
  progress.style.width = (scrollY / maxScroll * 100) + '%';

  // navbar glass effect
  navbar.classList.toggle('scrolled', scrollY > 50);

  // back to top visibility
  backToTop.classList.toggle('visible', scrollY > 400);

  // active nav link spy
  document.querySelectorAll('section[id]').forEach(section => {
    const top    = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const link   = document.querySelector(`.navbar-nav a[href="#${section.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
});

// Back to top click
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll (Intersection Observer)
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Typing effect hero
const words   = ['Febrian & Nurdela ♥', 'ReDo Family ♥'];
let wIndex    = 0;
let cIndex    = 0;
let deleting  = false;
const target  = document.getElementById('typingText');

function type() {
  const word    = words[wIndex];
  const speed   = deleting ? 60 : 110;

  target.textContent = word.substring(0, cIndex);

  if (!deleting && cIndex === word.length) {
    setTimeout(() => { deleting = true; type(); }, 2200);
    return;
  }
  if (deleting && cIndex === 0) {
    deleting = false;
    wIndex   = (wIndex + 1) % words.length;
  }

  cIndex += deleting ? -1 : 1;
  setTimeout(type, speed);
}

type();

// Lightbox
const galeriItems = document.querySelectorAll('.galeri-item');
const lightbox    = document.getElementById('lightbox');
const lbImg       = document.getElementById('lightboxImg');
const lbCaption   = document.getElementById('lightboxCaption');
let currentIndex  = 0;

const images = Array.from(galeriItems).map(item => ({
  src:     item.querySelector('img').src,
  caption: item.querySelector('h3').textContent,
}));

function openLightbox(index) {
  currentIndex    = index;
  lbImg.src       = images[index].src;
  lbCaption.textContent = images[index].caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  feather.replace();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  lbImg.src    = images[currentIndex].src;
  lbCaption.textContent = images[currentIndex].caption;
}

galeriItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => navigate(-1));
document.getElementById('lightboxNext').addEventListener('click', () => navigate(1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigate(-1);
  if (e.key === 'ArrowRight')  navigate(1);
});

// Love Counter — sejak 17 Januari 2022
function updateCounter() {
  const start = new Date('2022-01-17T00:00:00');
  const now   = new Date();
  let   diff  = now - start;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours   = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days    = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
  const months  = Math.floor(diff / 1000 / 60 / 60 / 24 / 30) % 12;
  const years   = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

  document.getElementById('countYears').textContent   = String(years).padStart(2, '0');
  document.getElementById('countMonths').textContent  = String(months).padStart(2, '0');
  document.getElementById('countDays').textContent    = String(days).padStart(2, '0');
  document.getElementById('countHours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
}

updateCounter();
setInterval(updateCounter, 1000);

// Music Player
const musicToggle = document.getElementById('musicToggle');
const musicInfo   = document.getElementById('musicInfo');
const musicPlay   = document.getElementById('musicPlay');
const musicDisc   = document.getElementById('musicDisc');
let   isOpen      = false;
let   isPlaying   = false;
let   autoplayDone = false;

const audio = new Audio();
audio.loop  = true;
audio.src   = '../../assets/music/bruno mars - risk it all.mp3';

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
  feather.replace();
}

// Autoplay saat interaksi pertama user
const musicNotif = document.getElementById('musicNotif');

function handleAutoplay() {
  if (autoplayDone) return;
  autoplayDone = true;
  musicNotif.classList.remove('show');
  setPlaying(true);
}

// Tampilkan notif setelah 1.5 detik
setTimeout(() => musicNotif.classList.add('show'), 1500);

musicToggle.addEventListener('click', () => {
  handleAutoplay();
  isOpen = !isOpen;
  musicInfo.classList.toggle('open', isOpen);
  feather.replace();
});

musicPlay.addEventListener('click', () => setPlaying(!isPlaying));

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit span');
  btn.textContent = 'Terkirim ✓';
  setTimeout(() => { btn.textContent = 'Kirim Pesan'; e.target.reset(); }, 2500);
});

// Parallax Hero
const heroSection = document.querySelector('.home');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroSection.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`;
  }
});

// Cursor Custom
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (cursor && cursorFollower) {
  let followerX = 0, followerY = 0;
  let cursorX   = 0, cursorY   = 0;

  document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top  = cursorY + 'px';
  });

  function animateFollower() {
    followerX += (cursorX - followerX) * 0.12;
    followerY += (cursorY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverTargets = document.querySelectorAll(
    'a, button, .galeri-item, .info-card, .medsos-card, .btn-cta, .back-to-top, .music-toggle'
  );
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });
}

// Tilt Card
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const cx     = rect.width  / 2;
    const cy     = rect.height / 2;
    const tiltX  = ((y - cy) / cy) * 10;
    const tiltY  = ((x - cx) / cx) * -10;
    card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
  });
});

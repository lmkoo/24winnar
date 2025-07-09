const ovr = document.getElementById('ovr');
const music = document.getElementById('bg-music');
const main = document.getElementById('main');
const prfbox = document.getElementById('prfbox');

const pic = 'Assets/profile.jpg';
const uname = 'Lmko?';

const homebtn = document.getElementById('btn-home');
const aboutbtn = document.getElementById('btn-about');
const projbtn = document.getElementById('btn-projects');

function type(text, el, speed = 50) {
  el.innerHTML = '';
  let i = 0;
  function next() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i++);
      setTimeout(next, speed);
    }
  }
  next();
}

const home = `
  <div class="tilt">
    <div class="tiltin box" style="display:flex;flex-direction:column;gap:20px;align-items:center;text-align:center;">
      <div style="display:flex;align-items:center;gap:20px;">
        <img src="${pic}" alt="Picture" style="width:150px;height:150px;border-radius:50%;border:3px solid rgba(160,120,255,0.8);box-shadow:0 0 12px rgba(160,120,255,0.7);" />
        <div style="font-size:2.5rem;font-weight:700;color:#d6b3ff;text-shadow:0 0 10px #a974ff;">
          ${uname}
        </div>
      </div>
      <div style="display:flex;gap:15px;flex-wrap:wrap;justify-content:center;">
        <span class="lang-icon"><i class="fa-brands fa-python"></i> Python</span>
        <span class="lang-icon"><i class="fa-brands fa-js-square"></i> JavaScript</span>
        <span class="lang-icon"><i class="fa-solid fa-code"></i> C#</span>
      </div>
    </div>
  </div>
`;

const about = `I'm a programmer that codes C#, Python, JavaScript. I'm currently learning SQLite, and C++. I make mods, cheats, and projects for whatever. Thanks for visiting my ass website and reading my about me!`;

const projects = `
  <div style="font-size:1.5rem;color:#d6b3ff;text-shadow:0 0 10px #a974ff;">
    <p>No projects for right now.</p>
  </div>
`;

function loadhome() {
  main.innerHTML = home;
  tilt();
}

function loadabout() {
  main.innerHTML = `<div id="abtbox"></div>`;
  const abtbox = document.getElementById('abtbox');
  type(about, abtbox, 40);
}

function loadproj() {
  main.innerHTML = projects;
}

ovr.addEventListener('click', () => {
  ovr.style.display = 'none';
  music.play();
  loadhome();
});

homebtn.addEventListener('click', loadhome);
aboutbtn.addEventListener('click', loadabout);
projbtn.addEventListener('click', loadproj);

function tilt() {
  const tiltBox = document.querySelector('.tilt');
  const tiltIn = tiltBox?.querySelector('.tiltin');
  if (!tiltBox || !tiltIn) return;

  tiltBox.addEventListener('mousemove', e => {
    const r = tiltBox.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / (r.height / 2)) * 10;
    const ry = ((x - r.width / 2) / (r.width / 2)) * -10;
    tiltIn.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  tiltBox.addEventListener('mouseleave', () => {
    tiltIn.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

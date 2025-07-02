const ovr = document.getElementById('ovr');
const landing = document.getElementById('textcontainer');
const music = document.getElementById('bg-music');

ovr.addEventListener('click', () => {
  ovr.style.display = 'none';
  landing.style.display = 'block';
  music.play();
  music.volume = 0.3;
});

const textanimation = document.getElementById('textanimation');
textanimation.addEventListener('mousemove', e => {
  const rect = textanimation.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10; 
  const rotateY = ((x - centerX) / centerX) * -10;
  textanimation.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

textanimation.addEventListener('mouseleave', () => {
  textanimation.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
});

window.addEventListener('DOMContentLoaded', () => {
  const customicon = document.getElementById('customc');

  window.addEventListener('mousemove', e => {
    customicon.style.display = 'block';
    customicon.style.left = `${e.clientX}px`;
    customicon.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget) {
      customicon.style.display = 'none';
    }
  });
});



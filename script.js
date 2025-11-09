// ===== Pesan =====
document.getElementById("tombolKirim").addEventListener("click", function() {
  const nama = document.getElementById("namaInput").value.trim();
  const pesan = document.getElementById("pesan");

  if (nama === "") {
    pesan.textContent = "Silakan masukkan nama kamu!";
    pesan.style.color = "red";
  } else {
    pesan.textContent = `Halo, ${nama}! Senang bertemu denganmu 😊`;
    pesan.style.color = "green";
  }
});

// ===== Efek Fade =====
const fadeElements = document.querySelectorAll('.fade');
function tampilkanFade() {
  fadeElements.forEach(el => {
    const posisi = el.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;
    if (posisi < tinggiLayar - 100) el.classList.add('visible');
  });
}
window.addEventListener('scroll', tampilkanFade);
window.addEventListener('load', tampilkanFade);

// ===== Scroll Halus =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Dark Mode Toggle =====
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ===== Skill Bar Animation =====
function animasiSkill() {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    const posisi = skill.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;
    if (posisi < tinggiLayar - 100) {
      skill.style.width = skill.getAttribute('style').match(/width:\s*(\d+%)/)[1];
    }
  });
}
window.addEventListener('scroll', animasiSkill);
window.addEventListener('load', animasiSkill);

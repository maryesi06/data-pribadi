// === Interaksi kirim pesan ===
document.getElementById("tombolKirim").addEventListener("click", function() {
  const nama = document.getElementById("namaInput").value;
  const pesan = document.getElementById("pesan");
  if (nama) {
    pesan.textContent = `Halo ${nama}, terima kasih sudah berkunjung! 😊`;
  } else {
    pesan.textContent = "Silakan isi nama dulu ya!";
  }
});

// === Menampilkan foto sesuai hobi ===
const daftarHobi = document.querySelectorAll("#daftarHobi li");
const fotoHobiContainer = document.getElementById("fotoHobi");

daftarHobi.forEach(item => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("data-img");
    fotoHobiContainer.innerHTML = `<img src="${imgSrc}" alt="Foto ${item.textContent}">`;

    const img = fotoHobiContainer.querySelector("img");
    setTimeout(() => img.classList.add("tampil"), 50);
  });
});

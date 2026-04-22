function wa() {
  let nomor = "6285838762115";
  let text = "Halo kak, saya tertarik membeli ayam kampung 🐔\nBoleh info lebih lanjut?";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}

function kirim() {
  let nama = document.getElementById("nama").value;
  let pesan = document.getElementById("pesan").value;

  let nomor = "628XXXXXXXXXX";

  let text = `Halo, saya ${nama}.
${pesan}`;

  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}
window.addEventListener("scroll", () => {
  let elements = document.querySelectorAll("section");

  elements.forEach(el => {
    let posisi = el.getBoundingClientRect().top;
    let layar = window.innerHeight;

    if (posisi < layar - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
let index = 0;

setInterval(() => {
  let slides = document.getElementById("slides");
  index++;

  if (index > 2) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

function pesanProduk(nama, harga, inputId) {
  let qty = document.getElementById(inputId).value;

  if (qty === "" || qty <= 0) {
    alert("Masukkan jumlah dulu");
    return;
  }

  let total = harga * qty;

  let nomor = "6285838762115";

  let pesan = "Halo saya mau pesan " + nama + " jumlah " + qty + " total " + total;

  let url = "https://api.whatsapp.com/send?phone=" + nomor + "&text=" + encodeURIComponent(pesan);

  window.location.href = url;
}

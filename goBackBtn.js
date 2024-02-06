// Geri git butonunu seç
const goBackBtn = document.getElementById("goBackBtn");

// Geri git butonuna tıklanınca geri git fonksiyonunu çağır
goBackBtn.addEventListener("click", goBack);

// Geri git fonksiyonu
function goBack() {
  window.location.href = "index.html";
}

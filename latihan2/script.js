let angka1, angka2, hasil;

document.getElementById("jml-btn").onclick = function () {
  angka1 = document.getElementById("angka1").value;
  angka2 = document.getElementById("angka2").value;
  hasil = parseFloat(angka1) + parseFloat(angka2);

  document.getElementById("hasil").textContent = hasil;
};

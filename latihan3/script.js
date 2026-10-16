let angka1, angka2, operatorAritmatika, hasil;

document.getElementById("hasil-btn").onclick = function () {
  angka1 = document.getElementById("angka1").value;
  angka2 = document.getElementById("angka2").valueAsNumber;
  operatorAritmatika = document.getElementById("operatorAritmatika").value;

  hasil = eval(angka1 + operatorAritmatika + angka2);
  document.getElementById("hasil").textContent = hasil;
};

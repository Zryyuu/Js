function calculate() {
  const no1 = parseFloat(document.getElementById("no1").value);
  const no2 = parseFloat(document.getElementById("no2").value);
  const operation = document.getElementById("operation").value;

  let hasil;

  if (isNaN(no1) || isNaN(no2)) {
    document.getElementById("hasil").textContent =
      "Mohon masukkan dua angka yang valid";
    return;
  }

  if (operation === "+") {
    hasil = no1 + no2;
  } else if (operation === "-") {
    hasil = no1 - no2;
  } else if (operation === "x") {
    hasil = no1 * no2;
  } else if (operation === "/") {
    if (no2 === 0) hasil = "hasil tak hingga, karena pembagi nol";
    else {
      hasil = no1 / no2;
    }
  } else {
    hasil = "operator tidak tersedia";
  }
  document.getElementById("hasil").textContent = `Hasil : ${hasil}`;
}

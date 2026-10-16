let namadepan, namabelakang, namalengkap;

document.getElementById("xbutton").onclick = function () {
  namadepan = document.getElementById("namadepan").value;
  namabelakang = document.getElementById("namabelakang").value;
  namalengkap = namadepan + " " + namabelakang;

  document.getElementById("namalengkap").textContent = namalengkap;
};

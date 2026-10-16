// Halaman Utama

let menuArea = document.getElementById("menu-area");
let cartArea = document.getElementById("cart-area");
let totalBayar = document.getElementById("totalBayar");

let daftarMenu = [
  "Mie Ayam",
  "Ayam Geprek",
  "Es Teh Anget",
  "Ayam Bakar",
  "Nasgor",
];

let hargaMenu = [9000, 14000, 3000, 15000, 12000];

let Keranjang = [];

function renderMenu() {
  let elemenHTML = "<ul class='list-group'>";
  for (let i = 0; i < daftarMenu.length; i++) {
    elemenHTML += `
      <li class='list-group-item d-flex justify-content-between align-items-center'>
        <div>
          <h5 class='mb-0'>${daftarMenu[i]}</h5>
          <small class='text-muted'>Rp. ${hargaMenu[i]}</small>
        </div>
        <button class='btn btn-primary btn-sm' onclick='tambahKeKeranjang(${i})'>Tambah</button>
      </li>
    `;
  }
  elemenHTML += "</ul>";
  menuArea.innerHTML = elemenHTML;
}

function tambahKeKeranjang(index) {
  Keranjang.push(index);
  renderKeranjang();
}

function hapusDariKeranjang(index) {
  Keranjang.splice(index, 1);
  renderKeranjang();
}

function renderKeranjang() {
  if (Keranjang.length === 0) {
    cartArea.innerHTML = `
    <p class='text-muted text-center'>Keranjang Masih kososng</p>`;
    totalBayar.innerHTML = `Rp. 0`;
    return;
  }
  let elemenHTML = "<ul class='list-group'></ul>";
  let totalBayarPesanan = 0;
  for (let i = 0; i < Keranjang.length; i++) {
    let indexMenu = Keranjang[i];
    let namaPesanan = daftarMenu[indexMenu];
    let hargaPesanan = hargaMenu[indexMenu];
    totalBayarPesanan = totalBayarPesanan + hargaPesanan;
    elemenHTML += `
      <li class='list-group-item d-flex align-center-items justify-content-between list-group-item-success mb-1 p-2 rounded'>
        ${namaPesanan} (Rp. ${hargaPesanan})
        <button onclick="hapusDariKeranjang(${i})" class='btn btn-danger btn-sm'>x</button>
      </li>`;
  }
  elemenHTML += "</ul>";
  totalBayar.innerHTML = "Rp. " + totalBayarPesanan;
  cartArea.innerHTML = elemenHTML;
}

renderMenu();
renderKeranjang();

// Halaman Struk Pembayaran

let halamanUtama = document.getElementById("halamanUtama");
let halamanStruk = document.getElementById("halamanStruk");
let detailPesanan = document.getElementById("detailPesanan");

function prosesCheckout() {
  if (Keranjang.length === 0) {
    alert("Keranjang nya masih kosong, pilih menu yaaa");
    return;
  }
  // struk
  let elemenHTML = `
    <table class='table table-borderless'>
      <tbody>`;
  let totalBelanja = 0;
  for (let i = 0; i < Keranjang.length; i++) {
    let indexMenu = Keranjang[i];
    let nama = daftarMenu[indexMenu];
    let harga = hargaMenu[indexMenu];
    totalBelanja += harga;
    elemenHTML += `
      <tr>
        <td>${nama}</td>
        <td>Rp. ${harga}</td>
      </tr>`;
  }
  elemenHTML += `
      </tbody>
      <tfoot class='border-top'>
        <tr>
          <th><strong>TOTAL BAYAR</strong></th>
          <th><strong>Rp. ${totalBelanja}</strong></th>
        </tr>
      </tfoot>
    </table>`;
  detailPesanan.innerHTML = elemenHTML;
  halamanUtama.classList.add("d-none");
  halamanStruk.classList.remove("d-none");
}

function pesananSelesai() {
  Keranjang = [];
  renderKeranjang();
  halamanUtama.classList.remove("d-none");
  halamanStruk.classList.add("d-none");
  alert("Pesanan baru siap ditrima!. Terimakasih");
}

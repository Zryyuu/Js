let todoList = [];

let addBtn = document.getElementById("add-btn");
let input = document.getElementById("input");
let areaList = document.getElementById("areaList");

function tambahTugas() {
  let tugasBaru = input.value;
  if (tugasBaru === "") {
    alert("Tugas tidak boleh kosong !");
    return;
  }

  todoList.push(tugasBaru);
  input.value = "";
  renderList();
}

function hapusTugas(index) {
  todoList.splice(index, 1);
  renderList();
}

function renderList() {
  if (todoList.length === 0) {
    areaList.innerHTML =
      "<p class='text-center text-muted'>Belum ada tugas hari ini...</p>";
    return;
  }

  let isiHTML = "<ul class='list-group'>";

  for (let i = 0; i < todoList.length; i++) {
    isiHTML += `
          <li class='list-group-item list-group-item-primary mb-2 rounded d-flex justify-content-between align-items-center'>
            <span>${todoList[i]}</span>
            <button onclick='hapusTugas(${i})' class='btn btn-danger ntn-sm'>Hapus</button>
          </li>`;
  }

  isiHTML += "</ul>";
  areaList.innerHTML = isiHTML;
}

addBtn.onclick = tambahTugas;

let todoList = [];

let addBtn = document.getElementById("add-btn");
let input = document.getElementById("input");
let areaList = document.getElementById("areaList");

addBtn.onclick = function () {
  let tugasBaru = input.value;

  if (tugasBaru === "") {
    alert("Tugas tidak boleh kosong");
    return;
  }

  todoList.push(tugasBaru);
  input.value = "";

  let isiHTML = "<ul class='list-group'>";
  for (let i = 0; i < todoList.length; i++) {
    isiHTML +=
      "<li class='list-group-item list-group-item-primary mb-2 rounded'>" +
      todoList[i] +
      "</li>";
  }

  isiHTML += "</ul>";
  areaList.innerHTML = isiHTML;
};

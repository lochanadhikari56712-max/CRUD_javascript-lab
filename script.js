let students = [];
let editIndex = null;
function addStudent() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    alert("Please enter a name");
    return;
  }

  if (editIndex === null) {
    let student = {
      id: students.length + 1,
      name: name,
    };
    students.push(student);
  } else {
    students[editIndex].name = name;
    editIndex = null;
  }
  document.getElementById("nameInput").value = "";
  showStudents();
}
function showStudents() {
  let table = document.getElementById("tableBody");

  table.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    let row = "<tr>";
    row += "<td>" + students[i].id + "</td>";
    row += "<td>" + students[i].name + "</td>";
    row += "<td>";
    row += "<button onclick='editStudent(" + i + ")'>Edit</button>";
    row += "<button onclick='deleteStudent(" + i + ")'>Delete</button>";
    row += "</td>";
    row += "</tr>";

    table.innerHTML += row;
  }
}

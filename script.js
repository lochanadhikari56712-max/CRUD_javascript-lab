let students = []
let editIndex = null
function addStudent() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    alert("Please enter a name");
    return;
  }
}
if (editIndex === null) {
  let student = {
    id: students.length + 1,
    name: name
  }
  students.push(student);
} else {
  students[editIndex].name = name;
  editIndex = null;
}
document.getElementById("nameInput").value = "";
showStudents()
}


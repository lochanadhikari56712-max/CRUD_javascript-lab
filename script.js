function addStudent() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    alert("Please enter a name");
    return;
  }
}

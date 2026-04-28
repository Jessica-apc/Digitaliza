<<<<<<< HEAD
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentEmail", email);

  document.getElementById(
    "successMessage"
  ).innerText = `Cadastro realizado com sucesso, ${name}!`;

  this.reset();
=======
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentEmail", email);

  document.getElementById(
    "successMessage"
  ).innerText = `Cadastro realizado com sucesso, ${name}!`;

  this.reset();
>>>>>>> 1cda2b5 (primeira conexão do projeto)
});
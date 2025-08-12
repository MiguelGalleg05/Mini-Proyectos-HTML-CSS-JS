const data = {
  name: "Miguel Gallego Alvarez",
  description: "Ingeniero de Sistemas,Programación,Bases de datos, Machine Learnig,Ciencia de datos,Python",
  email: "miguelgallego2020@gmail.com",
  tel: " +57 3234560096",
};

function loadUserProfile(data) {
  document.getElementById("userName").textContent = data.name;
  document.getElementById("userDescription").textContent = data.description;
  document.getElementById("userEmail").textContent = data.email;
  document.getElementById("userTel").textContent = data.tel;
}

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile(data);
});
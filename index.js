var modal = document.getElementById("form-section");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showAlert() {
  alert(
    "Thank you for Ordering! Please wait for 30 minutes we will contact you!"
  );
  modal.style.display = "none";
}

function openNav() {
  document.getElementById("mcdSidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mcdSidenav").style.width = "0";
}

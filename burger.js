window.addEventListener("load", showPage);

function showPage() {
  console.log("showPage");
  document.querySelector("#burgerBtn").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#burgerMenu").classList.toggle("hidden");

  let erSkjult = document
    .querySelector("#burgerMenu")
    .classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#burgerBtn").textContent = "☰";
    burgerBtn.style.left = "5em";
  } else {
    document.querySelector("#burgerBtn").textContent = "X";
    burgerBtn.style.left = "1em";
  }
}

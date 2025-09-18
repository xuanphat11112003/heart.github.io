function openEnvelope() {
  const flap = document.getElementById("flap");
  const card = document.getElementById("card");

  flap.classList.add("open");

  setTimeout(() => {
    card.classList.add("peek");
  }, 400);

  setTimeout(() => {
    card.classList.remove("peek");
    card.classList.add("slide-out");
  }, 1000);

  setTimeout(() => {
    card.classList.add("fullscreen");
  }, 1800);
}

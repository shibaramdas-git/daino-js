const daino = document.querySelector("#daino");

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    daino.classList.add("jump");
    setTimeout(() => {
      daino.classList.remove("jump");
    }, 600);
  }
});

"use strict";
const daino = document.querySelector("#daino");
const playground = document.querySelector(".playground");
// const cactus = document.querySelector("#cactus");

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    daino.classList.add("jump");
    setTimeout(() => {
      daino.classList.remove("jump");
    }, 600);
  }
});

function createObstacle(obstacleName) {
  // Append a new obstacle
  const obstacle = document.createElement("div");
  obstacle.id = `${obstacleName}`;
  obstacle.style.right = randomCactusLocation();
  playground.appendChild(obstacle);
  // Remove obstacle after animationed
  obstacle.addEventListener("animationend", () => {
    playground.removeChild(obstacle);
    console.log("Removed obstacle");
  });
}
function randomCactusLocation() {
  const randomLocation = Math.floor(Math.random() * 100 + 1);
  console.log(randomLocation);
  return `${randomLocation}vw`;
}
setInterval(() => {
  createObstacle("cactus");
}, 2000);

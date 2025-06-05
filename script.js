
document.addEventListener("DOMContentLoaded", () => {
  const duck = document.getElementById("duck");
  let posX = 100;
  let posY = 0;
  let velocityY = 0;
  let isJumping = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") posX += 10;
    if (e.key === "ArrowLeft") posX -= 10;
    if (e.key === " " && !isJumping) {
      velocityY = -15;
      isJumping = true;
    }
    duck.style.left = posX + "px";
  });

  setInterval(() => {
    if (isJumping) {
      velocityY += 1;
      posY += velocityY;
      if (posY > 0) {
        posY = 0;
        isJumping = false;
      }
      duck.style.bottom = (50 + posY) + "px";
    }
  }, 30);
});

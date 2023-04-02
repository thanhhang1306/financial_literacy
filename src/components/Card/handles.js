import GameManager from "../../core/gameManager";

const handleHover = e => {
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  const { clientX, clientY, target } = e;
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = target;

  const relativeX= (clientX - offsetLeft - offsetWidth / 2) / offsetWidth;
  const relativeY = (clientY - offsetTop - 180 - offsetHeight / 2) / offsetHeight;
  const rotateMagnitude = 11;

  target.style.transform = `rotateY(${relativeX * rotateMagnitude}deg)
                            rotateX(${relativeY * rotateMagnitude * -1}deg)
                            translateX(5px) translateY(-11px)
                            rotateZ(-1deg)
                            scale(1.03)`;
  target.style.filter = `drop-shadow(${relativeX * rotateMagnitude}px ${relativeY * rotateMagnitude}px 8px rgba(0, 0, 0, 0.1))`;
}

const handleMouseLeave = e => {
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  const { target } = e;
  target.style.transform = "translateX(5px) translateY(-11px) rotateZ(-1deg)";
  target.style.filter = "none";
}

function handleCardClick(e) {
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  gameManager.drawCards();

  flipCard(e);
}

function flipCard(e) {
  const { target } = e;
  target.style.transform = "translateX(-100%) rotateY(180deg)";
  target.style.transition = "0.6s";
}

export { handleHover, handleMouseLeave, handleCardClick };
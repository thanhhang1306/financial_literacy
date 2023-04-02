import GameManager from "../../core/gameManager";

const handleHover = e => {
  // Should not be able to draw cards when the game is not in the DRAW_CARDS state.
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  const { clientX, clientY, target } = e;
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = target;
  const relativeX= (clientX - offsetLeft - offsetWidth / 2) / offsetWidth;
  const relativeY = (clientY - offsetTop - 180 - offsetHeight / 2) / offsetHeight;
  const rotateMagnitude = 11;

  target.style.boxShadow = `${-relativeX * rotateMagnitude}px ${-relativeY * rotateMagnitude}px 20px rgba(0, 0, 0, 0.1)`;
  target.style.transform = 
    `rotateY(${relativeX * rotateMagnitude}deg)
     rotateX(${relativeY * rotateMagnitude * -1}deg)
     translateX(5px) translateY(-11px)
     rotateZ(-1deg)
     scale(1.03)`;
}

const handleMouseLeave = e => {
  // Behavior should not happen if game is not in the DRAW_CARDS state.
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  // Reset the card's style to the default.
  const { target } = e;
  target.style.transform = "translateX(5px) translateY(-11px) rotateZ(-1deg)";
  target.style.boxShadow = "none";
}

function handleCardClick(e) {
  // Should not be able to draw cards when the game is not in the DRAW_CARDS state.
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;

  

  // Flip each card on the table.
  const cards = Array.from(e.target.parentElement.children);

  e.target.parentElement.style.perspective = "4000px";
  const translateSequence = [0, 220, 110];
  for (let i=0; i<3; i++) {
    cards[i].style.transition = `${0.6 + i*0.22}s`;
    setTimeout(() => {
      _flipCard(cards[i], translateSequence[i]);
    }, 0);
  }

  for (const card of cards) {
    card.style.transform = "";
    card.classList.remove("selected");
  }

  // e.target.parentElement.querySelector(".summaryContainer").style.display = "block";
  e.target.parentElement.querySelector(".summaryContainer").style.transform = "translateY(55%)";

  // Draw cards by accessing game manager.
  const drawnCards = gameManager.drawCards();

  for (let i=0; i<3; i++) {
    cards[i].querySelector(".front p").innerHTML = drawnCards[i].description;
    cards[i].querySelector(".front h1").innerHTML = drawnCards[i].type;
    cards[i].removeEventListener("click", _clickEventListener);
    cards[i].addEventListener("click", _clickEventListener);  
  }

  _updateSummary();  
}

function _clickEventListener(e) {
  _toggleSelection(e);
}

function _updateSummary() {
  const gameManager = GameManager.getInstance();
  gameManager.lazyUpdateUI();
}

function _toggleSelection(e) {
  const gameManager = GameManager.getInstance();
  if (gameManager.gameState !== GameManager.GAME_STATE.SELECT_CARDS) return;

  gameManager.toggleSelection();
  const cards = Array.from(e.target.parentElement.children);
  const card = cards[1];
  if (card.classList.contains("selected")) {
    card.classList.remove("selected");
  }
  else {
    card.classList.add("selected");
  }

  _updateSummary();
}

function _flipCard(element, translateX) {
  element.style.transform = `translateX(${-210 + translateX}%) translateY(-50%) rotateY(180deg)`;
  element.style.boxShadow = "none";
}

export { handleHover, handleMouseLeave, handleCardClick };
/* Singleton class that holds the current state of the game,
   and handles the main life cycle of the game. */

class GameManager {
  static GAME_STATE = {
    DRAW_CARDS: 0,
    SELECT_CARDS: 1,
    RESOLVE_CARDS: 2,
    END_GAME: 3
  }

  static _gameManagerInstance = null;

  static init() {
    if (GameManager._gameManagerInstance == null)
      GameManager._gameManagerInstance = new GameManager();
  }

  static getInstance() {
    return GameManager._gameManagerInstance;
  }

  constructor() {
    this.gameState = GameManager.GAME_STATE.DRAW_CARDS;
    this.year = 22;
    this.balance = 1000;
    this.incomeSources = [];
    this.expenseSources = [];
  }

  drawCards() {
    if (this.gameState !== GameManager.GAME_STATE.DRAW_CARDS)
      return;

    this.gameState = GameManager.GAME_STATE.SELECT_CARDS;

    console.log("here your cads");
  }
}

export default GameManager;
/* Singleton class that holds the current state of the game,
   and handles the main life cycle of the game. */

const CARD_TYPE = {
  NEED: 0,
  WANT: 1,
  EVENT: 2
}

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
    this.year = 1;
    this.balance = 1000;
    this.incomeSources = [];
    this.expenseSources = [];

    this._currentCardsDrawn = [];
    this._currentCardSelections = [];
  }

  toggleSelection(cardIndex) {
    if (this.gameState !== GameManager.GAME_STATE.SELECT_CARDS) return;
    const card = this._currentCardsDrawn[cardIndex];

    if (this._currentCardSelections.includes(card)) {
      this._currentCardSelections = this._currentCardSelections.filter(c => c !== card);
    } else {
      this._currentCardSelections.push(card);
    }
  }

  drawCards() {
    if (this.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;
    this.gameState = GameManager.GAME_STATE.SELECT_CARDS;

    this._currentCardsDrawn.push(new Card(CARD_TYPE.WANT, "Income", 100));
    this._currentCardsDrawn.push(new Card(CARD_TYPE.NEED, "Need", 100));
    this._currentCardsDrawn.push(new Card(CARD_TYPE.EVENT, "Event", 100));
  
    return this._currentCardsDrawn;
  }
}

class Card {
  constructor(cardType, description, value) {
    this.cardType = cardType;
    this.description = description;
    this.value = value;
  }
}





// Data.



export default GameManager;
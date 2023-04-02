/* Singleton class that holds the current state of the game,
   and handles the main life cycle of the game. */
import { Wants, Needs, Events } from './ChoiceData.js';

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
    this.salary = 80000;
    this.savings = 0;
    this.investment = 0;
    this.debt = 0;
    this.incomeSources = [];
    this.expenseSources = [];

    this._currentCardsDrawn = [];
    this._currentCardSelections = [];

    //
    this.selectedNeed = 0;
    this.selectedWant = 0;
    this.selectedDebt = 0;
    this.selectedTotal = 0;
    this.selectedSavings = 0;
    this.selectedInvestments = 0;
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

  getCardSelections() {
    return this._currentCardSelections;
  }

  drawCards() {
    if (this.gameState !== GameManager.GAME_STATE.DRAW_CARDS) return;
    this.gameState = GameManager.GAME_STATE.SELECT_CARDS;

    /* Need Card */
    const randomNeed = Needs[Math.floor(Math.random() * Needs.length)];
    const needCard = new NeedCard(CARD_TYPE.NEED, randomNeed.text, "Need", randomNeed.need, randomNeed.time);
    this._currentCardsDrawn.push(needCard);

    /* Want Card  */
    const randomWant = Needs[Math.floor(Math.random() * Wants.length)];
    const wantCard = new WantCard(CARD_TYPE.WANT, randomWant.text, "Want", randomWant.cost, randomWant.happy, randomWant.time);
    this._currentCardsDrawn.push(wantCard);

    /* Event Card */
    const randomEvent = Needs[Math.floor(Math.random() * Events.length)];
    const eventCard = new EventCard(CARD_TYPE.EVENT, randomEvent.text, "Event", randomEvent.percent, randomEvent.lump, randomEvent.happy);
    this._currentCardsDrawn.push(eventCard);

    for (const card of this._currentCardsDrawn) {
      if (!card.selectable) continue;
      this.selectedNeed = 100;
      if (card.cardType === CARD_TYPE.WANT) this.selectedWant += card.want;
      else if (card.cardType === CARD_TYPE.NEED) this.selectedNeed += card.need;
    }
    this.lazyUpdateUI();
    return this._currentCardsDrawn;
  }

  getSelectedValues() {
    return {
      need: this.selectedNeed,
      want: this.selectedWant,
      debt: this.selectedDebt,
      total: this.selectedTotal,
      savings: this.selectedSavings,
      investments: this.selectedInvestments
    }
  }

  lazyUpdateUI() {
    document.querySelector(".need").innerHTML = "Need: $" + this.selectedNeed;
    document.querySelector(".want").innerHTML = "Want: $" + this.selectedWant;
    document.querySelector(".debt").innerHTML = "Debt: $" + this.selectedDebt;
    document.querySelector(".salary-discrepancy").innerHTML = "Salary + Discrepency: $" + this.selectedTotal;
    document.querySelector(".saving").innerHTML = "Saving: $" + this.selectedSavings;
    document.querySelector(".investment").innerHTML = "Investment: $" + this.selectedInvestments;
    //
    document.querySelector(".salary").innerHTML = "Salary: $" + this.salary;
    document.querySelector(".savings").innerHTML = "Savings: $" + this.savings;
    document.querySelector(".investment").innerHTML = "Investment: $" + this.investment;
    document.querySelector(".debt").innerHTML = "Debt: $" + this.debt;
  
  }
}

class NeedCard {
  constructor(cardType, description, type, need, time) {
    this.cardType = cardType;
    this.description = description;
    this.type = type;
    this.need = need;
    this.selectable = (cardType == CARD_TYPE.WANT) ? true : false;
    this.time = time;
  }
}

class WantCard {
  constructor(cardType, description, type, want, happy, time) {
    this.cardType = cardType;
    this.description = description;
    this.type = type;
    this.want = want;
    this.happy = happy;
    this.selectable = (cardType == CARD_TYPE.WANT) ? true : false;
    this.time = time; 
  }
}

class EventCard {
  constructor(cardType, description, type, per, lump, happy) {
    this.cardType = cardType;
    this.description = description;
    this.type = type;
    this.per = per;
    this.lump = lump;
    this.happy = happy;
    this.selectable = (cardType == CARD_TYPE.WANT) ? true : false;
  }
}




// Data.



export default GameManager;
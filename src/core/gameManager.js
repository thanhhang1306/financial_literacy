/* Singleton class that holds the current state of the game,
   and handles the main life cycle of the game. */
import { Wants, Needs, Events } from './ChoiceData.js';

const CARD_TYPE = {
  NEED: 0,
  WANT: 1,
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
    this.salary = 35000;
    this.savings = 0;
    this.investment = 1000;
    this.debt = 30000;

    this.wellbeings = [50];

    this.setFunctions = [];
    this.times = [1];

    this.needs = [16000];
    this.needsObjs = [];

    this.wants = [0];
    this.wantsObjs = [];

    this.wealths = [6000];

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


  
  toggleSelection() {
  if (this.gameState !== GameManager.GAME_STATE.SELECT_CARDS) return;
    if (this.wantsObjs.includes(this.wantCard)) {
      this.wantsObjs.splice(this.wantsObjs.indexOf(this.wantCard), 1);
      // this.wants[this.wants.length - 1] -= this.wantCard.cost;
      // this.setFunctions[1](this.wants);
    } else {
      this.wantsObjs.push(this.wantCard);
      // this.wants[this.wants.length - 1] += this.wantCard.cost;
      // this.setFunctions[1](this.wants);
    }
  
    
    this.lazyUpdateUI();
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
    this.needsObjs.push(needCard);
    // do need stuff.
    // this.needs.push(this.needs.push(this.needs[this.needs.length - 1] + needCard.need));
    // this.setFunctions[0](this.needs); 



    /* Want Card  */
    const randomWant = Wants[Math.floor(Math.random() * Wants.length)];
    this.wantCard = new WantCard(CARD_TYPE.WANT, randomWant.text, "Want", randomWant.cost, randomWant.happiness, randomWant.time);
    this._currentCardsDrawn.push(this.wantCard);





    /* Event Card */
    const randomEvent = Events[Math.floor(Math.random() * Events.length)];
    this.eventCard = new EventCard(CARD_TYPE.EVENT, randomEvent.text, "Event", randomEvent.percent, randomEvent.lump, randomEvent.happiness);
    this._currentCardsDrawn.push(this.eventCard);

    
    const newTimes = [...this.times];
    newTimes.push(this.times[this.times.length - 1] + 1);
    this.times = newTimes;
    this.setFunctions[4](this.times);




    // wants
    for (const want of this.wantsObjs)
        this.selectedWant -= want.cost;

    for (const need of this.needsObjs) {
      this.selectedNeed -= need.need;
    }



    // this.selectedTotal = this.salary + this.selectedNeed;
    
    // Calculate debt.
    const total = (this.salary - this._calculateNeed() - this._calculateWant() - this.selectedDebt - this.selectedSavings - this.selectedInvestments);



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

  _calculateNeed() {
    this.selectedNeed = 16000;
    for (const need of this.needsObjs) {
      this.selectedNeed += need.need;
    }
    return this.selectedNeed;
  }

  _calculateWant() {
    this.selectedWant = 0;
    for (const want of this.wantsObjs) {
      this.selectedWant += want.want;
    }
    return this.selectedWant;
  }

  lazyUpdateUI() {
    document.querySelector(".need").innerHTML = "Need: $" + this._calculateNeed();
    document.querySelector(".want").innerHTML = "Want: $" + this._calculateWant();
    // document.querySelector(".selectedDebt").innerHTML = "Pay off Debt: $" + (this.selectedDebt);
    document.querySelector(".debt").innerHTML = "Debt: $" + this.debt;
    this.selectedDebt = this.selectedDebt || 0;
    this.selectedSavings = this.selectedSavings || 0;
    this.selectedInvestments = this.selectedInvestments || 0;
    document.querySelector(".total").innerHTML = "Remaining Salary + Savings: $" + (this.salary + (this.investment*0.07) - this._calculateNeed() - this._calculateWant() - this.selectedDebt - this.selectedSavings - this.selectedInvestments + this.savings);
    document.querySelector(".selectedDebt > p").innerHTML = "Remaining Debt: $" + (this.debt);

    document.querySelector(".savings2").innerHTML = "Savings: <br>$" + this.savings;
    document.querySelector(".salary").innerHTML = "Salary: <br>$" + this.salary + "<br>+ $" + Math.floor(this.investment*0.07) + " (3% I)";
    document.querySelector(".debt").innerHTML = "Debt: <br>$" + this.debt;
    document.querySelector(".investment").innerHTML = "Investments (I): <br>$" + this.investment;
    document.querySelector(".year").innerHTML = "Year " + this.year;
  }


  submit() {
    // gameManager.setFunctions = [setNeeds, setWants, setWealth, setWellbeing, setTimes];

    // event stuff
     // do event thing
     this.salary *= this.eventCard.per;
     this.salary = Math.floor(this.salary);
     this.savings += this.eventCard.lump;
     this.wellbeings.push(this.wellbeings[this.wellbeings.length - 1] + this.eventCard.happiness);
     


      const newNeeds = [...this.needs];
      newNeeds.push(this.needs[this.needs.length - 1] + this.selectedNeed);
      this.needs = newNeeds;

      const newWants = [...this.wants];
      newWants.push(this.wants[this.wants.length - 1] + this.selectedWant);
      this.wants = newWants;

      this.setFunctions[0](this.needs);
      this.setFunctions[1](this.wants);

      const newWealth = [...this.wealths];
      newWealth.push(this.salary - this._calculateNeed() - this._calculateWant() - this.debt + this.selectedSavings + this.selectedInvestments);
      this.wealths = newWealth;
      this.setFunctions[2](this.wealths);

      for (const want of this.wantsObjs) {
        console.log(want);
        this.wellbeings[this.wellbeings.length - 1] += want.happy;
        want.time -= 1;
        if (want.time == -1)
          this.wantsObjs.splice(this.wantsObjs.indexOf(want), 1);

      }
      this.setFunctions[3](this.wellbeings);
      
      for (const need of this.needsObjs) {
        need.time -= 1;
        if (need.time == -1)
            this.needsObjs.splice(this.needsObjs.indexOf(need), 1);
    }

    this.savings += this.selectedSavings;
    this.investment += this.selectedInvestments;

    if (- this._calculateNeed() - this._calculateWant() - this.selectedDebt - this.selectedSavings - this.selectedInvestments > this.salary) {
      this.savings -= this.salary - this._calculateNeed() - this._calculateWant() - this.selectedDebt - this.selectedSavings - this.selectedInvestments;
    }

    // weird stuff with savings
    if (this.savings < 0) {
      this.debt -= this.savings;
      this.savings = 0;
    }

    // pay off debt
    this.debt -= this.selectedDebt;

    this.debt *= 1.08;
    this.debt = Math.floor(this.debt);

    this.year += 0.5;

    if (this.year >= 10) {
      this.endGame();
    } else {

    // reset everything
      this.reset();
      this.lazyUpdateUI();
    }
    


  }

  endGame() {
    this.gameState = -1;
    document.querySelector(".endPage").style.display = "block";
    document.querySelector(".playAreaContainer").style.display = "none";
  }

  reset() {
    this.selectedSavings = 0;
    this.selectedInvestments = 0;
    this.selectedDebt = 0;

    document.querySelector(".summaryContainer").style.transform = "translateY(120%)";
    const cards = document.querySelectorAll(".card-container");
    for (const card of cards) {
      card.style.transform = "";
      card.classList.remove("selected");
    }

    this._currentCardsDrawn = [];
    setTimeout(() => {
      this.gameState = GameManager.GAME_STATE.DRAW_CARDS;
    }, 900);
    
    document.querySelector(".investments-input").value = "";
    document.querySelector(".savings-input").value = "";
    document.querySelector(".debt-input").value = "";
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
  constructor(cardType, description, type, per, lump, happiness) {
    this.cardType = cardType;
    this.description = description;
    this.type = type;
    this.per = per;
    this.lump = lump;
    this.happiness = happiness;
    this.selectable = (cardType == CARD_TYPE.WANT) ? true : false;
  }
}




// Data.



export default GameManager;
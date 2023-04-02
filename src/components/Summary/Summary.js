import React from "react";

import GameManager from "../../core/gameManager";
import { Box } from "@mui/material";

import useStyles from "./SummaryStyles";

const Summary = (props) => {
  const classes = useStyles();
  const { test } = props;

  return (
    <Box className={`${classes.summaryContainer} summaryContainer`}>
      <div className={classes.firstColumn}>
        {test}
        <div className="need">
          Need: $0
        </div>
        <div className="savings">
          Savings:<br/>
          $<input class="savings-input" type="number" onChange={(e) => handleSavingsInput(e)}></input>
        </div>
        {/* <div className="want">
          Want: $0
        </div> */}
      </div>
      
      <div className={classes.secondColumn}>
        <div className="want">
          Want: $0
        </div>
        <div className="investments">
          Investments:<br/>
          $<input class="investments-input" type="number" onChange={(e) => handleInvestmentsInput(e)}></input>
        </div>
        {/* <div className="salary-discrepancy">
          Salary + Discrepency: $0
        </div>
        <div className="debt">
          Debt: $0
        </div> */}
        <button onClick={() => {submit()}}>
          Submit
        </button>
      </div>

      <div className={classes.thirdColumn}>
        <div className="selectedDebt">
          Pay off Debt:<br/>
          $<input class="debt-input" type="number" onChange={(e) => handleDebtInput(e)}></input>
          <p>Remaining Debt: $30000</p>
        </div>
        
        
        <div className="total">
          
        </div>
        {/* <div className="saving">
          Saving: $0
        </div>
        <div className="investment">
          Investment: $0
        </div> */}
      </div>
    </Box>
  );
};

function submit() {
  const gameManager = GameManager.getInstance();

  const total = parseInt(document.querySelector(".total").innerHTML.split("$")[1]);
  if (total < 0) {
    alert("You cannot spend more than you earn!");
    return;
  }

  const debtRemaining = parseInt(document.querySelector(".selectedDebt > p").innerHTML.split("$")[1]);
  if (debtRemaining < 0) {
    alert("You cannot pay off more debt than you have!");
    return;
  }

  gameManager.submit();
}

function handleDebtInput(e) {
  const gameManager = GameManager.getInstance();
  let debtToPay = parseInt(e.target.value);
  debtToPay = debtToPay || 0;
  if (debtToPay < 0) 
    document.querySelector(".debt-input").value = 0;

  gameManager.selectedDebt = debtToPay;
  gameManager.lazyUpdateUI();
  document.querySelector(".selectedDebt > p").innerHTML = "Remaining Debt: $" + (gameManager.debt - debtToPay);
}

function handleSavingsInput(e) {
  const gameManager = GameManager.getInstance();
  const savings = parseInt(e.target.value);
  if (savings < 0)
    document.querySelector(".savings-input").value = 0;
  gameManager.selectedSavings = savings;
  gameManager.lazyUpdateUI();
}

function handleInvestmentsInput(e) {
  const gameManager = GameManager.getInstance();
  const investments = parseInt(e.target.value);
  if (investments < 0)
    document.querySelector(".investments-input").value = 0;
  gameManager.selectedInvestments = investments;
  gameManager.lazyUpdateUI();
}

export default Summary;
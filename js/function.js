function renderData(
    rowTarget,
    totalsTarget,
    minIncomeTarget,
    maxIncomeTarget,
    minExpenseTarget,
    maxExpenseTarget,
    data,
    months
  ) {
    let rowsHTML = '';
    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;
    const maxExpense = {
      month: '',
      value: 0,
    };
    const maxIncome = {
      month: '',
      value: 0,
    };
    const minExpense = {
      month: '',
      value: 999999999,
    };
    const minIncome = {
      month: '',
      value: 999999999,
    };
  
    account.forEach(({month, income, expense}) => {
      if (!income) {
        income = 0;
      }
      if (!expense) {
        expense = 0;
      }
            
      totalIncome += income;
      totalExpense += expense;
      totalBalance += income - expense;

      

      if (month) {
        rowsHTML += `<div class="table-row">
                                <div class="cell">${month}</div>
                                <div class="cell">${months[month - 1]}</div>
                                <div class="cell">${income} Eur</div>
                                <div class="cell">${expense} Eur</div>
                                <div class="cell">${income - expense} Eur</div>
                            </div>`
  
      }
    });
    
const totalsHTML = `
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${totalIncome} Eur</div>
                <div class="cell">${totalExpense} Eur</div>
                <div class="cell">${totalBalance} Eur</div>
                `;
  
    document.getElementById(rowTarget).innerHTML = rowsHTML;
    document.getElementById(totalsTarget).innerHTML = totalsHTML;
  }
  


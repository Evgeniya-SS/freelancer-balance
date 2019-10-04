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

      if (income >= maxIncome.value) {
        maxIncome.value = income;
        maxIncome.month = month;
      }
      if (expense >= maxExpense.value) {
        maxExpense.value = expense;
        maxExpense.month = month;
      }
      if (expense <= minExpense.value && expense > 0) {
        minExpense.value = expense;
        minExpense.month = month;
      }
      if (income <= minIncome.value && income > 0) {
        minIncome.value = income;
        minIncome.month = month;
      }


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
    
    document.getElementById(minIncomeTarget).innerHTML = months[minIncome.month - 1];
    document.getElementById(maxIncomeTarget).innerHTML = months[maxIncome.month - 1];
    document.getElementById(minExpenseTarget).innerHTML = months[minExpense.month - 1];
    document.getElementById(maxExpenseTarget).innerHTML = months[maxExpense.month - 1];
  }
  


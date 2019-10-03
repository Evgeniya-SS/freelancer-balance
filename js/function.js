function renderRow(target, data) {
    let HTML = '';
    let income = 0;
    let expense = 0;
    let balance = 0;
    

    for (i=0; i<data.length; i++) {
        const obj = data[i];
        
        if (!obj.income || !obj.expense){
            obj.income = 0;
            obj.expense = 0;
        }

            
        if (obj.month) {
            HTML += `<div class="table-row">
                        <div class="cell">${obj.month}</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">${obj.income} Eur</div>
                        <div class="cell">${obj.expense} Eur</div>
                        <div class="cell">${obj.income - obj.expense} Eur</div>
                    </div>`
            
        }
        
    }
    return document.getElementById(target).innerHTML = HTML;
}




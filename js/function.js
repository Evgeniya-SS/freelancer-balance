function renderRow(target, data) {
    let HTML = '';
    let quantity = 0;

    for (i=0; i<data.length; i++) {
        const obj = data[i];

        if (!obj.month) {
            continue;
        }
        if (!obj.income ||
            !obj.expense) {
            return '0';
        }
        if (quantity === 12) {
            break;
        }
        if (obj.month) {
            HTML += `<div id="row" class="table-row">
                        <div class="cell">${obj.month}</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">${obj.income} Eur</div>
                        <div class="cell">${obj.expense} Eur</div>
                        <div class="cell">${obj.income + obj.expense} Eur</div>
                    </div>`
            quantity++;
        }
        
    }
    return document.getElementById(target).innerHTML = HTML;
}




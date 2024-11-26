// Função para adicionar destaque
function highlightRowAndArea(element) {
    // Identifica a linha e a área do saber correspondente
    const row = element.parentElement;
    const areaDoSaber = row.querySelector('.area') || document.querySelector(`.area[data-area="${element.getAttribute('data-area')}"]`);

    // Adiciona o destaque à linha e à área correspondente
    row.querySelectorAll('.disciplina, .tarefa').forEach(item => item.classList.add('highlight'));
    if (areaDoSaber) areaDoSaber.classList.add('highlight');
}

// Função para remover destaque
function removeHighlightRowAndArea(element) {
    const row = element.parentElement;
    const areaDoSaber = row.querySelector('.area') || document.querySelector(`.area[data-area="${element.getAttribute('data-area')}"]`);

    // Remove o destaque da linha e da área correspondente
    row.querySelectorAll('.disciplina, .tarefa').forEach(item => item.classList.remove('highlight'));
    if (areaDoSaber) areaDoSaber.classList.remove('highlight');
}

// Adiciona eventos de mouseover e mouseout para disciplinas e tarefas
document.querySelectorAll('.disciplina, .tarefa').forEach(element => {
    element.addEventListener('mouseover', () => highlightRowAndArea(element));
    element.addEventListener('mouseout', () => removeHighlightRowAndArea(element));
});




// Função para adicionar destaque às disciplinas e tarefas de uma área
function highlightByArea(areaElement) {
    // Obtém o valor do atributo 'data-area' da área do saber
    const areaName = areaElement.getAttribute('data-area');
    
    // Adiciona destaque a todas as disciplinas e tarefas correspondentes
    document.querySelectorAll(`.disciplina[data-area="${areaName}"], .tarefa[data-area="${areaName}"]`).forEach(item => {
        item.classList.add('highlight');
    });

    // Adiciona destaque à própria área do saber
    areaElement.classList.add('highlight');
}

// Função para remover o destaque das disciplinas e tarefas de uma área
function removeHighlightByArea(areaElement) {
    // Obtém o valor do atributo 'data-area' da área do saber
    const areaName = areaElement.getAttribute('data-area');
    
    // Remove o destaque de todas as disciplinas e tarefas correspondentes
    document.querySelectorAll(`.disciplina[data-area="${areaName}"], .tarefa[data-area="${areaName}"]`).forEach(item => {
        item.classList.remove('highlight');
    });

    // Remove o destaque da própria área do saber
    areaElement.classList.remove('highlight');
}

// Adiciona eventos de mouseover e mouseout para disciplinas e tarefas (código existente)
document.querySelectorAll('.disciplina, .tarefa').forEach(element => {
    element.addEventListener('mouseover', () => highlightRowAndArea(element));
    element.addEventListener('mouseout', () => removeHighlightRowAndArea(element));
});

// Adiciona eventos de mouseover e mouseout para áreas do saber
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('mouseover', () => highlightByArea(area));
    area.addEventListener('mouseout', () => removeHighlightByArea(area));
});




// Função para destacar uma coluna inteira com base no nome da coluna
function highlightColumnByClass(columnClass) {
    document.querySelectorAll(`.${columnClass}`).forEach(cell => {
        cell.classList.add('highlight');
    });
}

// Função para remover o destaque de uma coluna inteira
function removeHighlightColumnByClass(columnClass) {
    document.querySelectorAll(`.${columnClass}`).forEach(cell => {
        cell.classList.remove('highlight');
    });
}

// Função para destacar disciplinas e tarefas por área
function highlightByArea(areaElement) {
    const areaName = areaElement.getAttribute('data-area');
    document.querySelectorAll(`.disciplina[data-area="${areaName}"], .tarefa[data-area="${areaName}"]`).forEach(item => {
        item.classList.add('highlight');
    });
    areaElement.classList.add('highlight');
}

// Função para remover o destaque de disciplinas e tarefas por área
function removeHighlightByArea(areaElement) {
    const areaName = areaElement.getAttribute('data-area');
    document.querySelectorAll(`.disciplina[data-area="${areaName}"], .tarefa[data-area="${areaName}"]`).forEach(item => {
        item.classList.remove('highlight');
    });
    areaElement.classList.remove('highlight');
}

// Adiciona eventos de mouseover e mouseout para disciplinas e tarefas
document.querySelectorAll('.disciplina, .tarefa').forEach(element => {
    element.addEventListener('mouseover', () => highlightRowAndArea(element));
    element.addEventListener('mouseout', () => removeHighlightRowAndArea(element));
});

// Adiciona eventos de mouseover e mouseout para áreas do saber
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('mouseover', () => highlightByArea(area));
    area.addEventListener('mouseout', () => removeHighlightByArea(area));
});

// Adiciona eventos de mouseover e mouseout para os cabeçalhos das colunas
document.querySelector('.col-area').addEventListener('mouseover', () => highlightColumnByClass('area'));
document.querySelector('.col-area').addEventListener('mouseout', () => removeHighlightColumnByClass('area'));

document.querySelector('.col-disciplina').addEventListener('mouseover', () => highlightColumnByClass('disciplina'));
document.querySelector('.col-disciplina').addEventListener('mouseout', () => removeHighlightColumnByClass('disciplina'));

document.querySelector('.col-tarefa').addEventListener('mouseover', () => highlightColumnByClass('tarefa'));
document.querySelector('.col-tarefa').addEventListener('mouseout', () => removeHighlightColumnByClass('tarefa'));

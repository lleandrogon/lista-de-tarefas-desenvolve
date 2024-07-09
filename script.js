let conteudo = document.getElementById('conteudo');
let caixa = document.getElementById('caixa');

function adicionarEvento() {
    if (caixa.value === '') {
        alert('Digite algo para ser adicionado!');
    } else {
        let tarefa = document.createElement('li');
        tarefa.textContent = caixa.value;
        conteudo.appendChild(tarefa);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        tarefa.appendChild(span);
    }
    caixa.value = '';
    salvar();

    caixa.focus();
}

caixa.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        adicionarEvento();
    }
})

conteudo.addEventListener('click', (el) => {
    if(el.target.tagName == 'LI') {
        el.target.classList.toggle('marcado');
        salvar();
    }
    else if (el.target.tagName == 'SPAN') {
        el.target.parentElement.remove();
        salvar();
    }
})

function salvar() {
    localStorage.setItem('conteudos', conteudo.innerHTML);
}

function mostrar() {
    conteudo.innerHTML = localStorage.getItem('conteudos');
}

mostrar();
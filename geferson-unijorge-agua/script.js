let metaDiaria = 0;
let consumoTotal = 0;
let registrosConsumo = [];

function calcularMeta() {
    const pesoElement = document.getElementById("peso");
    const metaDiariaElement = document.getElementById("metaDiaria");

    const peso = parseFloat(pesoElement.value);

    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido.");
        return;
    }

    // Fórmula de cálculo da meta diária baseada apenas no peso
    metaDiaria = Math.round(35 * peso);
    metaDiariaElement.innerText = `${metaDiaria} ml`;
    alert(`Sua meta diária é de ${metaDiaria} ml de água.`);
}

function registrarConsumo() {
    const consumoElement = document.getElementById("consumo");
    const horarioElement = document.getElementById("horario");

    const consumo = parseFloat(consumoElement.value);
    const horario = horarioElement.value;

    if (isNaN(consumo) || consumo <= 0 || consumo > metaDiaria) {
        alert("Por favor, insira uma quantidade válida de água.");
        return;
    }

    consumoTotal += consumo;
    registrosConsumo.push({ consumo, horario });

    const percentual = ((consumoTotal / metaDiaria) * 100).toFixed(2);
    document.getElementById("resultado").innerHTML = `Você atingiu ${percentual}% da sua meta diária.`;

    exibirRegistrosConsumo();

    // Limpar os campos após o registro do consumo
    consumoElement.value = "";
    horarioElement.value = "";
}

function exibirRegistrosConsumo() {
    const listaRegistros = document.getElementById("listaRegistros");
    listaRegistros.innerHTML = "";

    for (const registro of registrosConsumo) {
        const itemLista = document.createElement("li");
        itemLista.innerText = `Consumo: ${registro.consumo} ml - Horário: ${registro.horario}`;
        listaRegistros.appendChild(itemLista);
    }
}

// Restante do script...

// Função para exibir a janela de informações
function exibirInformacoes() {
    document.getElementById("modalInfo").style.display = "block";
}

// Função para fechar a janela de informações
function fecharInformacoes() {
    document.getElementById("modalInfo").style.display = "none";
}

// Fechar a janela de informações se o usuário clicar fora dela
window.onclick = function (event) {
    const modalInfo = document.getElementById("modalInfo");
    if (event.target == modalInfo) {
        modalInfo.style.display = "none";
    }
};
// ... (código anterior) ...

function exibirRegistrosConsumo() {
    const listaRegistros = document.getElementById("listaRegistros");
    listaRegistros.innerHTML = "";
    
    for (const registro of registrosConsumo) {
        const itemLista = document.createElement("li");
        itemLista.innerText = `Consumo: ${registro.consumo} ml - Horário: ${registro.horario}`;
        listaRegistros.appendChild(itemLista);
    }
}

// ... (código posterior) ...

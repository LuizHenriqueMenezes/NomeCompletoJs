let nome = prompt("Digite seu nome:") || "";
let sobrenome = prompt("Digite seu sobrenome:") || "";

let nomeCompleto = `Nome completo: ${nome} ${sobrenome}`;
let nomeCatalogo = `Nome de catálago: ${sobrenome.toUpperCase()}, ${nome}`;

alert(nomeCompleto);
alert(nomeCatalogo);

// script.js
const form = document.getElementById('form-animal');
const animaisCadastrados = document.getElementById('animais-cadastrados');
let animais = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const status = document.getElementById('status').value;

    const novoAnimal = {
        nome,
        raca,
        idade,
        status
    };

    animais.push(novoAnimal);
    mostrarAnimais();
});

function mostrarAnimais() {
    animaisCadastrados.innerHTML = '';
    animais.forEach(animal => {
        const divAnimal = document.createElement('div');
        divAnimal.textContent = `Nome: ${animal.nome}, Raça: ${animal.raca}, Idade: ${animal.idade}, Status: ${animal.status}`;
        animaisCadastrados.appendChild(divAnimal);
    });
}
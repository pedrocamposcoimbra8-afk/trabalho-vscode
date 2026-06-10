// script.js — validação simples do formulário

// 1. Pega o formulário pelo id
const form = document.getElementById("form-contato");
const resposta = document.getElementById("resposta");


form.addEventListener("submit", function (evento) {

  // Impede que a página recarregue
  evento.preventDefault();

  // 3. Lê os valores digitados
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // 4. Validação básica
  if (nome.length < 2) {
    alert("Digite seu nome completo, por favor.");
    return;
  }

  if (!email.includes("@")) {
    alert("E-mail inválido.");
    return;
  }

  if (mensagem.length < 5) {
    alert("Escreva uma mensagem maior.");
    return;
  }

  // 5. Se passou, mostra mensagem de sucesso
  console.log("Mensagem recebida:", { nome, email, mensagem });
  resposta.classList.remove("hidden");
  form.reset();
});
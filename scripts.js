const generateNumber = document.querySelector(".generate-number");
const resultModal = document.querySelector(".result-modal");
const resultNumber = document.querySelector(".result-number");
const closeModal = document.querySelector(".close-modal");

function sortear() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Atualiza e exibe o modal
  resultNumber.textContent = result;
  resultModal.classList.remove("hidden");
}

// Fecha o modal
function closeModalAction() {
  resultModal.classList.add("hidden");
}

closeModal.addEventListener("click", closeModalAction);

generateNumber.addEventListener("click", sortear);

document.querySelector(".input-max").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    generateNumber.click(); // Simula o clique no botão "Sortear"
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") { // Verifica se pressionou a tecla Esc
    closeModalAction(); // Chama a função para fechar o modal
  }
});

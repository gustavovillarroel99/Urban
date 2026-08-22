document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        // Evita que a página seja recarregada ao enviar o formulário
        event.preventDefault();

        // Exibe a mensagem de sucesso
        alert('Cadastro feito');

        // Limpa os campos do formulário
        form.reset();
    });
});
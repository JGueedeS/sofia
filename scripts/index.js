function login() {

    const validPassword = 'shrek 2' ;
    const validPassword2 = 'shrek';
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validPassword2 || password === validPassword) {
        // Login bem-sucedido, redireciona para a página desejada
        window.location.href = 'presente.html';
    } else {
        // Exibe mensagem de erro
        errorMessage.textContent = 'Credenciais inválidas. Tente novamente.';
    }
}
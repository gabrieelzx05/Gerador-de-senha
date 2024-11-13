document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = 5; // Tamanho da senha
    const lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "0123456789";
    const specialCharset = "!@#*.?";
    
    let password = "";
    
    // Garantir pelo menos 1 caractere especial e 1 número
    password += numberCharset[Math.floor(Math.random() * numberCharset.length)];
    password += specialCharset[Math.floor(Math.random() * specialCharset.length)];
    
    // Completar com caracteres aleatórios
    const allCharsets = lowerCaseCharset + upperCaseCharset + numberCharset + specialCharset;
    for (let i = password.length; i < length; i++) {
        password += allCharsets[Math.floor(Math.random() * allCharsets.length)];
    }
    
    // Misturar a senha para garantir que o número e o caractere especial não fiquem sempre nas mesmas posições
    password = shuffleString(password);
    
    document.getElementById('password').value = password;
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos
    }
    return arr.join('');
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}

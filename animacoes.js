function validar() {
    var cpfInput = document.getElementById("icpf").value.replace(/\D/g, '');
    var rgInput = document.getElementById("irg").value.replace(/\D/g, '');
    var nomeInput = document.getElementById("inome");
    var sobrenomeInput = document.getElementById("isobrenome");
    var dataInput = document.getElementById("idata").value;
    var emailInput = document.getElementById("iemail").value;

    if(nomeInput.value.length === 0) {
        alert("Nome não pode estar vazio");
        nomeInput.focus();
        return false;
    }
    if (sobrenomeInput.value.length === 0) {
        alert("Sobrenome não pode estar vazio");
        sobrenomeInput.focus();
        return false;
    }

    
    if (cpfInput.length !== 11) {
        alert("CPF deve ter 11 dígitos numéricos.");
        document.getElementById("icpf").focus();
        return false;
    }

    if (rgInput.length !== 9) {
        alert("RG deve ter 9 dígitos numéricos.");
        document.getElementById("irg").focus();
        return false;
    }
    if (dataInput === "") {
        alert("Data de nascimento não pode estar vazia");
        document.getElementById("idata").focus();
        return false;
    }
    if (emailInput.length === 0) {
        alert("Email não pode estar vazio");
        document.getElementById("iemail").focus();
        return false;
    }

    return true; // Permite o envio do formulário se os campos estiverem corretos
}
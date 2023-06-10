function enviar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const msg = document.getElementById('msg');
  
  if (nome == "" || email == "" || mensagem == "") {
    msg.style.color = '#E16252'
    msg.innerText = "Por favor preencha todos os campos corretamente!";
  }else if (!email.includes("@")) {
    msg.style.color = '#E16252'
    msg.innerText = "Por favor preencha todos os campos corretamente! Faltou o @";
  }else {
    msg.style.color = '#8CB65F'
    msg.innerText = "Bip Bop! Mensagem enviada com sucesso!";

    // Limpar os campos após o envio
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensagem').value = "";
  }
}
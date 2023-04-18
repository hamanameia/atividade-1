// at 1

function verificar() {
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    let mensagem = document.getElementById('mensagem-erro')
    if (data.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }
    
    if (nome.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }

    if (telefone.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }

    if (email.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }

    if (produto.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }

    if (quantidade.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }

    if (valor.trim() == '') {
        mensagem.innerHTML = "Mensagem de erro: Todos os campos devem estar preenchidos";
        mensagem.style.display = 'block';
        return false;
    }
    if (nome.length < 5) {
        mensagem.innerHTML = "Mensagem de erro: O campo nome deve conter pelo menos 5 caracteres";
        mensagem.style.display = 'block';
        return false;
    }
    if (email.length < 5) {
        mensagem.innerHTML = "Mensagem de erro: O campo email deve conter pelo menos 5 caracteres";
        mensagem.style.display = 'block';
        return false;
    }
    if (produto.length < 5) {
        mensagem.innerHTML = "Mensagem de erro: O campo produto deve conter pelo menos 5 caracteres";
        mensagem.style.display = 'block';
        return false;
    }
    if (telefone.length < 5) {
        mensagem.innerHTML = "Mensagem de erro: O campo telefone deve conter pelo menos 5 caracteres";
        mensagem.style.display = 'block';
        return false;
    }
    if (valor <= 0) {
        mensagem.innerHTML = "Mensagem de erro: O campo valor tem que ser positivo";
        mensagem.style.display = 'block';
        return false;
    }
    if (quantidade <= 0) {
        mensagem.innerHTML = "Mensagem de erro: O campo quantidade tem que ser positivo";
        mensagem.style.display = 'block';
        return false;
    }
    else{
        mensagem.style.display = 'none';
    }
}

// at2

function criarimagens() {

    let qtdimg = parseInt(document.getElementById("inQtdImg").value);
    let caixa = document.getElementById("canvas");
    caixa.innerHTML = "";

    if (qtdimg < 0) {
        alert("não insira numeros negativos!");
    }

    else {

        for (let i = 0; i < qtdimg; i++) {
            let foto = document.createElement("img");
            foto.src = 'img/logo.png';
            foto.classList.add("imagens");
            caixa.appendChild(foto);
        }
    }
}

// at3

function acender() {
    let botao = document.getElementById('btnEnviar');
    let lampada = document.getElementById("lampada");
    let local = lampada.src;
    let foto = local.substring(local.lastIndexOf('/') + 1);

    if (foto == 'apagada.jpg' || foto == '') {
        lampada.src = 'img/acesa.jpg';
        botao.textContent = 'Apagar';
    }
    else {
        lampada.src = 'img/apagada.jpg';
        botao.textContent = 'Acender';
    }
}

//at4
function calcular() {
    let vp = document.getElementById('inValorPedido').value;
    let pd = document.getElementById('inPercDesc');
    let vd = document.getElementById('inValDesc');
    let vt = document.getElementById('inValFinal');

    if (vp > 0 && vp < 500) {
        let pd = 0
        let vd = vp * pd / 100
        document.getElementById("inPercDesc").value = pd;
        document.getElementById("inValDesc").value = vd;
        document.getElementById("inValFinal").value = vp - vd;
        return
    }

    if (vp >= 500 && vp < 1000) {
        let pd = 0.5
        let vd = vp * pd / 100
        document.getElementById("inPercDesc").value = pd;
        document.getElementById("inValDesc").value = vd;
        document.getElementById("inValFinal").value = vp - vd;
        return
    }

    if (vp >= 1000 && vp < 1500) {
        let pd = 0.8
        let vd = vp * pd / 100
        document.getElementById("inPercDesc").value = pd;
        document.getElementById("inValDesc").value = vd;
        document.getElementById("inValFinal").value = vp - vd;
        return
    }

    if (vp >= 1500 && vp < 2000) {
        let pd = 1
        let vd = vp * pd / 100
        document.getElementById("inPercDesc").value = pd;
        document.getElementById("inValDesc").value = vd;
        document.getElementById("inValFinal").value = vp - vd;
        return
    }

    if (vp >= 2000) {
        let pd = 1.5
        let vd = vp * pd / 100
        document.getElementById("inPercDesc").value = pd;
        document.getElementById("inValDesc").value = vd;
        document.getElementById("inValFinal").value = vp - vd;
        return
    }

    else {
        alert("Não use números negativos!");
    }
}
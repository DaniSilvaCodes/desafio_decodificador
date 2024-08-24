// Função para criptografar o texto
function criptografar_texto(estado) {
    const textarea = document.querySelector('.campo_texto');
    const texto = textarea.value;
    const resultado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    exibirResultado(resultado, estado);
}

// Função para descriptografar o texto
function descritografar_texto(estado) {
    const textarea = document.querySelector('.campo_texto');
    const texto = textarea.value;
    const resultado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    exibirResultado(resultado, estado);
}

// Função auxiliar para exibir o resultado
function exibirResultado(resultado, estado) {
    const imgBoneco = document.querySelector('.imagem_boneco');
    const infoNenhumaMsg = document.querySelector('.info_nenhuma_msg');
    const infoDigiteTexto = document.querySelector('.info_digite_texto');
    const parteSecundariaOculta = document.querySelector('.parte_secundaria_oculta');
    const textoResultado = document.querySelector('.texto p');
    
    if (resultado) {
        imgBoneco.style.display = 'none';
        infoNenhumaMsg.style.display = 'none';
        infoDigiteTexto.style.display = 'none';
        parteSecundariaOculta.style.display = 'block';
        textoResultado.textContent = resultado;
    } else {
        imgBoneco.style.display = 'block';
        infoNenhumaMsg.style.display = 'block';
        infoDigiteTexto.style.display = 'block';
        parteSecundariaOculta.style.display = 'none';
    }
}

// Função para copiar o texto para a área de transferência
function copiar() {
    const texto = document.querySelector('.texto p').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

const iaKey = "${SUA_CHAVE_AQUI}"

async function cliqueiNoBotao(){
  const inputCidade = document.querySelector('.input-cidade').value
  const caixa = document.querySelector('.caixa-media')
  
  // Requisição na API
  const apiKey = "${SUA_CHAVE_API_AQUI}"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${apiKey}&units=metric&lang=pt_br`
  const respostaServidor = await fetch(url)
  //Transforma em JSON
  const dadosJson = await respostaServidor.json()

  // Selecionando Elementos
  const cidade = document.querySelector('.cidade')
  const temperatura = document.querySelector('.temperatura')
  const icone = document.querySelector('.icone')
  const umidade = document.querySelector('.umidade')
  const roupa = document.querySelector('.roupa')

  //Mostrando na tela o resultado
  cidade.textContent = `${dadosJson.name}`
  temperatura.textContent = `${Math.floor(dadosJson.main.temp)} °C`
  codigoIcone = dadosJson.weather[0].icon
  icone.src = `https://openweathermap.org/payload/api/media/file/${codigoIcone}.png`
  umidade.textContent = `Umidade: ${dadosJson.main.humidity} %`
  roupa.textContent = `Sugestão de Roupa`


  caixa.classList.remove('escondido')
}

function detectaVoz(){
  // Ativa o microfone para captar o que foi falado
  const reconhecimento = new window.webkitSpeechRecognition()
  reconhecimento.lang = "pt-br"
  reconhecimento.start()

  reconhecimento.onresult = (evento) => {

    // Capta o que foi falado e armazena em uma constante
    textoTranscrito = evento.results[0][0].transcript

    // Define o valor do input para poder fazer a requisição da api, pois a api esta sendo requisitada quando o input tem um valor definido
    document.querySelector(".input-cidade").value = textoTranscrito

    cliqueiNoBotao()
  }
}

async function pedirSugestaoRoupa(){
  const temperatura = document.querySelector(".temperatura").textContent
  const umidade = document.querySelector(".umidade").textContent
  const cidade = document.querySelector(".cidade").textContent
  
  const respostaIa = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + iaKey
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: `Me de uma sugestão de qual roupa usar hoje. Estou na cidade de: ${cidade}, a temperatura atual é: ${temperatura} e a umidade esta em: ${umidade}. Me de sugestoes em duas frases curtas.`
        }
      ]
    })
  })

  const dados = await respostaIa.json()
  document.querySelector(".respostaIa").innerHTML = dados.choices[0].message.content
  console.log(dados) 
}
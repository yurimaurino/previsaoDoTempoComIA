# 🌤️ Clima Tempo

> App de previsão do tempo com busca por cidade, reconhecimento de voz e sugestão de roupa gerada por IA.

---

## 📋 Sobre o Projeto

O **Clima Tempo** é uma aplicação web que permite consultar as condições climáticas de qualquer cidade em tempo real. Além de exibir temperatura e umidade, o app conta com entrada por voz e uma funcionalidade especial: uma IA que sugere o que vestir com base no clima atual da cidade pesquisada.

---

## ✨ Funcionalidades

- 🔍 **Busca por cidade** — Digite o nome de qualquer cidade e veja o clima instantaneamente
- 🎤 **Reconhecimento de voz** — Fale o nome da cidade em vez de digitar
- 🌡️ **Dados em tempo real** — Temperatura em °C e umidade do ar via OpenWeatherMap
- 🖼️ **Ícone do clima** — Ícone oficial da API correspondente à condição climática atual
- 👕 **Sugestão de roupa com IA** — Receba uma recomendação personalizada do que vestir com base no clima, gerada pela API Groq

---

## 🎨 Visual

- Fundo dinâmico com foto de paisagem natural
- Card central escuro com transparência
- Botões com animações suaves de hover
- Layout responsivo e centralizado

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e animações |
| JavaScript (ES6+) | Lógica e chamadas de API |
| [OpenWeatherMap API](https://openweathermap.org/api) | Dados de clima em tempo real |
| [Groq API](https://groq.com/) | Sugestão de roupa com IA |
| Web Speech API | Reconhecimento de voz no navegador |

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/clima-tempo.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd clima-tempo
   ```

3. Abra o arquivo `index.html` diretamente no navegador — não é necessário instalar nada.

> ⚠️ Para o reconhecimento de voz funcionar, abra o projeto em um servidor local (ex: extensão Live Server do VS Code) ou via `https://`.

---

## 🔑 Variáveis de API

O projeto utiliza duas chaves de API que devem ser mantidas em segredo:

- **OpenWeatherMap** — `apiKey` no `script.js`
- **Groq** — `iaKey` no `script.js`

- Crie sua chave gratuita na [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
- Crie sua chave gratuita na [Groq](https://console.groq.com/)

---

## 📁 Estrutura do Projeto

```
clima-tempo/
├── index.html
├── style.css
└── script.js
```

---

## 👨‍💻 Autor

Desenvolvido por **Yuri**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
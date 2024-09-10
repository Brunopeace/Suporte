// Event Listener para o botão de envio
document.getElementById("sendBtn").addEventListener("click", sendMessage);

// Event Listener para o envio com a tecla Enter
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Função para enviar a mensagem
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput) {
        appendMessage("user-message", userInput);
        chatbotResponse(userInput);
        document.getElementById("userInput").value = "";
        saveMessages();
    }
}

// Função para adicionar mensagens ao chat
function appendMessage(className, message) {
    let output = document.getElementById("output");
    let messageDiv = document.createElement("div");
    messageDiv.className = "message " + className;
    messageDiv.innerHTML = message;
    output.appendChild(messageDiv);
    output.scrollTop = output.scrollHeight;
}

// Função para responder com o chatbot
function chatbotResponse(userInput) {
    let response = getBotResponse(userInput);
    appendMessage("bot-message", response);
    saveMessages();
}

// Função para salvar mensagens no localStorage
function saveMessages() {
    let output = document.getElementById("output").innerHTML;
    localStorage.setItem("chatMessages", output);
}

// Função para carregar mensagens salvas no localStorage
function loadMessages() {
    let savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
        document.getElementById("output").innerHTML = savedMessages;
    }
}

loadMessages(); // Carregar mensagens ao iniciar

// Função para definir respostas do chatbot
function getBotResponse(userInput) {
    userInput = userInput.trim().toLowerCase();

    if (userInput.includes("tabela") || userInput.includes("tabela de preço")) {
    return "<img src='./img/tabela-revenda.jpg' alt='tabela de preço' class='img-quadrada' />";
    }
    
    if (userInput.includes("internet") || userInput.includes("vivo") ||
userInput.includes("tim") ||
userInput.includes("claro")) {
    return "Clique no botão para baixar o aplicativo👉<a href='./downloads/techer-vivo.apk' download class='apk-link'>Clique aqui</a>";
}

    // Respostas específicas
    if (userInput.includes("plano") || userInput.includes("planos") ||
userInput.includes("pacote")) {
        return "Trabalhamos com esses planos: 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("valor") || userInput.includes("preço")) {
        return "Trabalhamos com esses planos: 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("quanto custa") || userInput.includes("custa")) {
        return "Trabalhamos com esses planos: 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("aceita pix")) {
        return "Sim. Mais antes do pagamento gostariamos de te mandar um teste pra ver se vai funcionar direitinho no seu aparelho. Escolha um dos planos para voce fazer um teste de 6h de duração. 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("telefone") || userInput.includes("celular")) {
        return "SIM! Temos aplicativos disponíveis para Android e iOS.";
        
        } else if (userInput.includes("quero testar")) {
        return "escolha seu plano para um teste de 6h. Assim que você escolher você será redirecionado para o suporte através do nosso WhatsApp, la ele vai te passar o aplicativo certo para seu aparelho.👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
        } else if (userInput.includes("como contratar") || userInput.includes("contratação") || userInput.includes("como faço para contratar")) {
        return "Você pode contratar nossos serviços diretamente pelo nosso suporte via WhatsApp. <br> 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("tempo de teste") ||
        userInput.includes("quanto tempo de teste") ||
        userInput.includes("qual a duração do teste")) {
        return "O teste tem uma duração de 6h.";
        
        } else if (userInput.includes("cancelar") || userInput.includes("política de cancelamento") || userInput.includes("posso cancelar")) {
        return "Sim, você pode cancelar a contratação a qualquer momento. Nossa política de cancelamento permite reembolso de até 30% do valor pago.";
   
    } else if (userInput.includes("computador") || userInput.includes("pc")) {
        return "Sim, temos aplicativos para computador ou notebook.";
    } else if (userInput.includes("horário") || userInput.includes("suporte")) {
        return "Nosso atendimento é de segunda a domingo, das 9h às 23h.";
        
    } else if (userInput.includes("smartv") || userInput.includes("smart tv")) {
        return "Certo. LG, Samsung ou ela é uma smartv android?";
        
        } else if (userInput.includes("5 credito") || userInput.includes("amanha") || userInput.includes("amanhã") ||
userInput.includes("10 credito") ||
userInput.includes("20 credito") ||
userInput.includes("recarregar")) {
        return "Eu não tenho acesso ao seu painel, mais não se preocupe, fale com nosso suporte que ele vai te ajudar melhor nesse caso. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%20gostaria%20de%20recarregar%20meu%20painel*' target='_blank'>Clique aqui</a>";
                
    } else if (userInput.includes("muito obrigado") || userInput.includes("obrigado") || userInput.includes("obrigada") || userInput.includes("obg")) {
        return "De nada, caso precise de mais alguma coisa, é só perguntar. 👍";
        
        } else if (userInput.includes("funciona") || userInput.includes("aparelho") || userInput.includes("aparelhos")) {
        return "Funciona na Smartv, tvbox, Firestick, Computador, celular e tablet.";
        
    } else if (userInput.includes("tudo bem") || userInput.includes("como vai") || userInput.includes("como você está")) {
        return "Tudo bem, melhor que nunca! 😉";
        
    } else if (userInput.includes("tvbox") || userInput.includes("tv box")) {
        return "Ok, escolha seu plano para um teste de 6h. Assim que você escolher você será redirecionado para o suporte através do nosso WhatsApp. 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("informações") || userInput.includes("detalhes") ||
userInput.includes("como funciona")) {
        return "Funciona da seguinte forma... você baixa o aplicativo no seu aparelho, seja ele Tvbox, Firestick ou Smartv. Te mandamos um usuário e senha com o teste de 6h de duração, caso goste, te enviamos os dados para pagamento via PIX. Já te adiantando, trabalhamos com esses planos. 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("pagar") || userInput.includes("pago") ||
userInput.includes("pagamento")) {
        return "Após o teste caso voce goste, é so fazer o pagamento via PIX, após o pagamento fazemos a ativação de 30 dias, e dois dias antes de vencer te avisaremos.";
        
        } else if (userInput.includes("erro") || userInput.includes("parou") ||
userInput.includes("parou de funcionar")) {
        return "Vamos te ajudar não se preocupe. Se você usa Tvbox, saia do aplicativo, tire o cabo de Internet do Tvbox, espere uns 10 segundos, coloque o cabo de Internet novamente, abra o aplicativo e faça o teste. Se mesmo assim isso não resolver, entre em contato com nosso suporte. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%20Bruno%2C%20gostaria%20de%20sua%20ajuda%2C%20meus%20canais%20n%C3%A3o%20est%C3%A3o%20funcionando*' target='_blank'>Clique aqui</a>";
        
        } else if (userInput.includes("revender") || userInput.includes("revendedor") ||
userInput.includes("vendedor")) {
        return "Olá, temos painel de revenda comum e master. Caso queira ver os valores da nossa tabela de preço so digitar TABELA que te envio. ou se preferir clique no botão para falar com um dos nossos suporte.👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20gostaria%20de%20ser%20revendedor*%20' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("aplicativos") || userInput.includes("loja") || userInput.includes("aplicativo")) {
        return "Aqui você encontra todos os Nossos aplicativos para smartv, tvbox, Firestick, Computador, tablet e celular. <br> 👉<a href='https://brunopeace.github.io/Paineldeapps/' target='_blank'>Clique aqui</a>";
        
        } else if (userInput.includes("link de acesso ao painel") || userInput.includes("link do painel")) {
        return "Aqui está seu link de acesso ao seu painel. 👉 <span style='color: blue;'>https://cms-web.getme.skin/</span>";
        
        } else if (userInput.includes("painel")) {
        return "você ja é nosso revendedor? digite <span style='color: blue;'>link do painel</span> que te envio, caso nao seja e quer ser um revendedor digite <span style='color: blue;'>revendedor</span>";
        
        } else if (userInput.includes("dns")) {
        return "                                                                <span style='color: blue;'>📌DNS´s✅</span> <hr>      DNS XCLOUD: <br>                                         <span style='color: blue;'>Union10</span>         <hr>       DNS SMARTERS PLAYER: <br>                                      <span style='color: blue;'>http://xpn01.xyz</span>   <hr>                      DNS XCIPTV 1: <br>                                   <span style='color: blue;'>https://srv01.top</span>     <hr>                                                    DNS XCIPTV 2: <br>                                   <span style='color: blue;'>https://sr.xdriver01.xyz</span>                             <hr>                                                   DNS STB V3 BR: <br>                                                 <span style='color: blue;'>209.14.71.101</span>                                                             <hr>                                                         EPG: <br>                                                <span style='color: blue;'>https://abre.ai/u9epg1</span><hr>                                                                                   Webplayer: <br>                                          <span style='color: blue;'>http://unionplayer.xyz</span>              ";
        
        } else if (userInput.includes("reativar") || userInput.includes("renovar") || userInput.includes("ativação") ||
userInput.includes("ativar") ||
userInput.includes("chave") ||
userInput.includes("seu pix")) {
        return "Ola, segue aqui meu PIX EMAIL: <span style='color: blue;'>brunopeaceandlove60@gmail.com</span> após fazer o pagamento envie o comprovante para nosso suporte para eles poder fazer sua ativação 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20fiz%20o%20pagamento%20poderia%20ativar%20meu%20acesso%20por%20favor*%20' target='_blank'>Clique aqui</a>";
        
        
    } else if (userInput.includes("iptv") || userInput.includes("canais") ||
userInput.includes("teste")) {
        return "Você usa Tvbox ou Smartv?";
        
    } else if (userInput.includes("android") || userInput.includes("panasonic")) {
        return "Certo. Na sua smartv android, baixe o aplicativo ntDown na Playstore. Depois de baixado abra ele e entre em contato com nosso suporte através do WhatsApp, la ele vai te enviar um código para voce adicionar no aplicativo. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20j%C3%A1%20baixei%20o%20aplicativo*' target='_blank'>Clique aqui</a>";
        
    } else if (userInput.includes("samsung") || userInput.includes("lg")) {
        return "Ok. entre na loja de aplicativos e baixa o aplicativo iptv smartes player ou o XCloud. Depois de baixado abra ele e entre em contato com nosso suporte através do WhatsApp, la ele vai te enviar o usuário e senha para voce adicionar no aplicativo. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20j%C3%A1%20baixei%20o%20aplicativo*' target='_blank'>Clique aqui</a>";
    }
    
    // Saudações
    if (userInput.includes("bom dia")) {
        return "Bom dia! Como posso te ajudar?";
    } else if (userInput.includes("ok")) {
        return "Qualquer coisa é so falar. 👍😉";
    } else if (userInput.includes("boa tarde")) {
        return "Boa tarde! Em que posso te ajudar?";
    } else if (userInput.includes("boa noite")) {
        return "Boa noite! Como posso te ajudar?";
    } else if (userInput.includes("olá") || userInput.includes("ola") || userInput.includes("oi")) {
        return "Olá! Como posso te ajudar?";
    }

    return "Desculpe, não entendi sua pergunta. Pode reformular?";
}

// Função para limpar o chat
function clearChat() {
    let output = document.getElementById("output");
    let messages = output.getElementsByClassName("message");
    while (messages.length > 0) {
        messages[0].remove();
    }
    localStorage.removeItem("chatMessages");
}

// Event Listener para limpar o chat
document.getElementById("clearBtn").addEventListener("click", clearChat);
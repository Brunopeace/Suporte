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
    messageDiv.innerHTML = message.replace(/\n/g, "<br>");  // Mantém quebras de linha
    output.appendChild(messageDiv);
    output.scrollTop = output.scrollHeight;
}

// Função para responder com o chatbot
function chatbotResponse(userInput) {
    appendMessage("bot-message", "Escrevendo...");

    setTimeout(function() {
        let response = getBotResponse(userInput);
        let messages = document.getElementsByClassName("bot-message");
        messages[messages.length - 1].innerHTML = response; // Substitui a mensagem "Escrevendo..."
        saveMessages();
    }, 1500); // Delay de 1.5s
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

const chaveSecreta = "x2V7hJd8Fg9BzP1nQ5rWk0cYtA3LmSs";

// Função para criptografar dados
function criptografar(dados) {
    return CryptoJS.AES.encrypt(dados, chaveSecreta).toString();
}

// Função para descriptografar dados
function descriptografar(dadosCriptografados) {
    let bytes = CryptoJS.AES.decrypt(dadosCriptografados, chaveSecreta);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Banco de dados de clientes para recuperação de senha
const clientes = {
    "italo2022": { 
        "senha": criptografar("202400"), 
        "telefone": "5567996278764"
        
    },
    "joao20190": { 
        "senha": criptografar("202400"), 
        "telefone": "5511980778049" 
    },
    "eliezer2019": { 
        "senha": criptografar("202400"), 
        "telefone": "5581998575267"
    },
    "binho2020": { 
        "senha": criptografar("202400"), 
        "telefone": "5581997921351"
    },
    "helton2018": { 
        "senha": criptografar("202400"), 
        "telefone": "5548999886522"
    },
    "dero2020": { 
        "senha": criptografar("202300"), 
        "telefone": "5581991764549"
    },
    "danielmoura2019": { 
        "senha": criptografar("202400"), 
        "telefone": "5516991699237"
    },
    "raphael2019": { 
        "senha": criptografar("202000"), 
        "telefone": "5521986908924"
    },
    "ivan2022": { 
        "senha": criptografar("202300"), 
        "telefone": "5551991323090"
    },
    "roge2018": { 
        "senha": criptografar("202400"), 
        "telefone": "5584987805002"
    },
    "ivo2019": { 
        "senha": criptografar("202000"), 
        "telefone": "5588996840279"
    },
    "Ademir2018": { 
        "senha": criptografar("202400"), 
        "telefone": "5511950594663"
    },
    "paulino2020": { 
        "senha": criptografar("202400"), 
        "telefone": "5571997186022"
    },
    "jhonatan2018": { 
        "senha": criptografar("202000"), 
        "telefone": "5568992458463"
    },
    "jonessantos2018": { 
        "senha": criptografar("202400"), 
        "telefone": "5571988484259"
    },
    "danilo2018": { 
        "senha": criptografar("202000"), 
        "telefone": "5521983028439"
    },
    "fitinha2019": { 
        "senha": criptografar("202000"), 
        "telefone": "5521970124039"
    },
    "moacir2019": { 
        "senha": criptografar("202400"), 
        "telefone": "5547992591655"
    },
    "Julioyoung": { 
        "senha": criptografar("202400"), 
        "telefone": "5581989994462"
    },
    "euricos2018": { 
        "senha": criptografar("202400"), 
        "telefone": "5518998203350"
    },
    "henrique20190": { 
        "senha": criptografar("202400"), 
        "telefone": "5521991672201"
    },
    "nando2018": { 
        "senha": criptografar("202500"), 
        "telefone": "5547989095746"
    },
    "adriano2020": { 
        "senha": criptografar("202400"), 
        "telefone": "5571988023878"
    },
    "railson2018": { 
        "senha": criptografar("202000"), 
        "telefone": "5591982374895"
     },
    "bruno2018": { 
        "senha": criptografar("1234567890"), 
        "telefone": "5581982258462"
        
    },
   
};

// Banco de dados separado para verificar a data de vencimento dos clientes
const clientesVencimento = {
    "988xm473": { // 01
        "vencimento": "26/05/2025",
        "telefone": "5511977710449"
    },
    "14l6n284": { // 02
        "vencimento": "12/03/2025",
        "telefone": "5561996161993"
    },
    "117nvd6": { // 03
        "vencimento": "13/05/2025",
        "telefone": "5521987883629"
    },
    "6829636": { // 04
        "vencimento": "15/03/2025",
        "telefone": "5547988186298"
    },
    "78276538": { // 05
        "vencimento": "11/05/2025",
        "telefone": "5521994532922"
    },
    "66655216": { // 06
        "vencimento": "11/05/2025",
        "telefone": "5521987883629"
    },
    "505gw152": { // 07
        "vencimento": "06/10/2024",
        "telefone": "5564993421250"
    },
    "31c5o4": { // 08
        "vencimento": "08/11/2024",
        "telefone": "5581999224378"
    },
    "5hj8r97": { // 09
        "vencimento": "11/11/2024",
        "telefone": "5551998421757"
    },
    "01919172": { // 10
        "vencimento": "01/05/2025",
        "telefone": "5581987465583"
    },
    "01l79e28": { // 11
        "vencimento": "06/06/2025",
        "telefone": "5551999013439"
    },
    "68265785": { // 12
        "vencimento": "23/10/2024",
        "telefone": "5551999013439"
    },
    "6386578s": { // 13
        "vencimento": "02/06/2025",
        "telefone": "5553984394549"
    },
    "d27756": { // 14
        "vencimento": "19/12/2024",
        "telefone": "5511948734273"
    },
    "044i37b": { // 15
        "vencimento": "03/05/2025",
        "telefone": "5594991890666"
    },
    "63760h": { // 16
        "vencimento": "27/07/2025",
        "telefone": "5581986226617"
    },
    "Ywo6795": { // 17
        "vencimento": "16/06/2025",
        "telefone": "5521964655025"
    },
    "utvx5831g8": { // 18
        "vencimento": "20/06/2025",
        "telefone": "5547996561634"
    },
    "83314c2": { // 19
        "vencimento": "07/06/2025",
        "telefone": "5521965465767"
    },
    "26n1432": { // 20
        "vencimento": "29/10/2024",
        "telefone": "5581982258462"
    },
    "37363875": { // 21
        "vencimento": "31/10/2024",
        "telefone": "5521999169132"
    },
    "9d064061": { // 22
        "vencimento": "03/06/2025",
        "telefone": "5581996759869"
    },
    "nk6vs4augusto": { // 23
        "vencimento": "22/10/2024",
        "telefone": "5586994296762"
    },
    "lucas20202": { // 24
        "vencimento": "28/10/2024",
        "telefone": "5586994296762"
    },
    "008m260": { // 25
        "vencimento": "20/05/2025",
        "telefone": "5521994980520"
    },
    "r7114o1": { // 26
        "vencimento": "22/05/2025",
        "telefone": "5521987094902"
    },
    "guilhermefugimoto2020": { // 27
        "vencimento": "16/12/2024",
        "telefone": "5521964655025"
    },
    "79yx6i70": { // 28
        "vencimento": "18/05/2025",
        "telefone": "5542998251385"
    },
    "82x2la5j": { // 29
        "vencimento": "15/03/2025",
        "telefone": "5581983770933"
    },
    "282542": { // 30
        "vencimento": "15/07/2025",
        "telefone": "5551995862146"
    },
    "3607901": { // 31
        "vencimento": "18/11/2024",
        "telefone": "5586994296762"
    },
    "5283632": { // 32
        "vencimento": "18/11/2024",
        "telefone": "5586994296762"
    },
    "6283636": { // 33
        "vencimento": "25/10/2024",
        "telefone": "5586994296762"
    },
    "8x3334": { // 34
        "vencimento": "18/10/2024",
        "telefone": "5586994296762"
    },
    "jorge202000": { // 35
        "vencimento": "25/10/2024",
        "telefone": "5586994296762"
    },
    "0543631": { // 36
        "vencimento": "20/11/2024",
        "telefone": "5581999701628"
    },
    "074l2k32": { // 37
        "vencimento": "21/05/2025",
        "telefone": "5581999701628"
    },
    "idalino2019": { // 38
        "vencimento": "23/10/2024",
        "telefone": "5547997594845"
    },
    "16793082": { // 39
        "vencimento": "28/05/2025",
        "telefone": "5547997911355"
    },
    "3x93y79": { // 40
        "vencimento": "19/06/2025",
        "telefone": "5521965465767"
    },
    "4192636": { // 41
        "vencimento": "12/06/2025",
        "telefone": "5519983770869"
    },
    "3i9d774p": { // 42
        "vencimento": "21/07/2025",
        "telefone": "5581986763522"
    },
    "h932805": { // 43
        "vencimento": "28/05/2025",
        "telefone": "5521998704978"
    },
    "436dc2v6": { // 44
        "vencimento": "14/05/2025",
        "telefone": "5554984363796"
    },
    "9m934173": { // 45
        "vencimento": "08/05/2025",
        "telefone": "5581994213227"
    },
    "6629263": { // 46
        "vencimento": "05/05/2025",
        "telefone": "5511915771984"
    },
    "6910736": { // 47
        "vencimento": "31/05/2025",
        "telefone": "5521999169132"
    },
    "2927262": { // 48
        "vencimento": "25/05/2025",
        "telefone": "5521972104689"   
        
    },
    "zk3f7490": { // 49
        "vencimento": "11/05/2025",
        "telefone": "5581996769933"
        
    },
    "73755433": { // 50
        "vencimento": "27/05/2025",
        "telefone": "5594991661714"
        
    },
    "66176t49": { // 51
        "vencimento": "10/05/2025",
        "telefone": "5521964059369"
        
    },
    "038xd94": { // 52
        "vencimento": "15/06/2025",
        "telefone": "5521992941398"
        
    },
    "64672h3": { // 53
        "vencimento": "26/05/2025",
        "telefone": "5571992336681"
        
    },
    "885xdc": { // 54
        "vencimento": "06/03/2025",
        "telefone": "5587981630171"
        
    },
    "3944139": { // 55
        "vencimento": "26/05/2025",
        "telefone": "5581987950177"
        
    },
    "33cb04": { // 56
        "vencimento": "05/06/2025",
        "telefone": "5551992483609"
        
    },
    "863150d": { // 57
        "vencimento": "01/05/2025",
        "telefone": "5551992483609"
        
    },
    "3994592": { // 58
        "vencimento": "27/05/2025",
        "telefone": "5511998145647"
        
    },
    "569z489": { // 59
        "vencimento": "27/05/2025",
        "telefone": "5581995648364"
        
    },
    "3577i6": { // 60
        "vencimento": "31/10/2024",
        "telefone": "5581987950177"
        
    },
    "xg55496": { // 61
        "vencimento": "06/07/2025",
        "telefone": "5585982054173"
        
    },
    "b1fq87": { // 62
        "vencimento": "04/06/2025",
        "telefone": "5521994119784"
        
    },
    "68n62y": { // 63
        "vencimento": "06/03/2025",
        "telefone": "5521968315702"
        
    },
    "9045823": { // 64
        "vencimento": "23/05/2025",
        "telefone": "5547984449001"
        
    },
    "2en6p3": { // 65
        "vencimento": "30/06/2025",
        "telefone": "5581991391906"
        
    },
    "8085545": { // 67
        "vencimento": "16/11/2024",
        "telefone": "5547991803770"
        
    },
    "27n306": { // 67
        "vencimento": "19/05/2025",
        "telefone": "5581988831182"
        
    },
    "25510y05": { // 68
        "vencimento": "19/11/2024",
        "telefone": "5547999719936"
        
    },
    "04drx173": { // 69
        "vencimento": "19/11/2024",
        "telefone": "5547999719936"
        
    },
    "4t87s83": { // 70
        "vencimento": "18/11/2024",
        "telefone": "5521998616085"
        
    },
    "lucas20201": { // 71
        "vencimento": "18/11/2024",
        "telefone": "5586994296762"
        
    },
    "4y5254": { // 72
        "vencimento": "20/05/2025",
        "telefone": "5581982258462"
        
    },
    "80709c82": { // 73
        "vencimento": "19/10/2024",
        "telefone": "5521973502309"
        
    },
    "736789": { // 74
        "vencimento": "02/06/2025",
        "telefone": "5511976934184"
        
    },
    "163iq1": { // 75
        "vencimento": "04/06/2025",
        "telefone": "5521973465194"
        
    },
    "5292637": { // 76
        "vencimento": "07/07/2025",
        "telefone": "5519992133422"
        
    },
    "geraldoc704a": { // 77
        "vencimento": "08/07/2025",
        "telefone": "5581998738098"
        
    },
    "p841t05": { // 78
        "vencimento": "25/11/2024",
        "telefone": "5554984363796"
        
    },
    "71927383": { // 79
        "vencimento": "30/04/2025",
        "telefone": "5521964716929"
        
    },
    "630938n": { // 80
        "vencimento": "17/05/2025",
        "telefone": "5551998421757"
        
    },
    "0395t1": { // 81
        "vencimento": "15/05/2025",
        "telefone": "5521992051481"
    },
    "914460": { // 82
        "vencimento": "12/05/2025",
        "telefone": "5581987903583"
    },
    "4430148": { // 83
        "vencimento": "06/03/2025",
        "telefone": "5581996892752"
    },
    "152h4vs": { // 84
        "vencimento": "06/03/2025",
        "telefone": "5581996892752"
     },
    "606hk208": { // 85
        "vencimento": "08/06/2025",
        "telefone": "5521999564510"
     },
    "329619": { // 86
        "vencimento": "25/05/2025",
        "telefone": "5521972104689"
     },
    "49b8x0": { // 87
        "vencimento": "02/05/2025",
        "telefone": "5517997158585"
     },
    "885xdc1": { // 88
        "vencimento": "13/05/2025",
        "telefone": "5587981630171"
     },
    "15271p9": { // 89
        "vencimento": "29/05/2025",
        "telefone": "5511961854190"
     },
    "050x00kja": { // 90
        "vencimento": "11/06/2025",
        "telefone": "5511989387233"
     },
    "44520691": { // 91
        "vencimento": "07/06/2025",
        "telefone": "5521964093836"
     },
    "317584": { // 92
        "vencimento": "18/05/2025",
        "telefone": "5581999224378"
     },
    "100675": { // 93
        "vencimento": "11/05/2025",
        "telefone": "5521983014878"
     },
    "fabioravena": { // 94
        "vencimento": "24/05/2025",
        "telefone": "5519995082732"
     },
    "5ek6964": { // 95
        "vencimento": "02/05/2025",
        "telefone": "5541988491748"
     },
    "221455": { // 96
        "vencimento": "03/02/2026",
        "telefone": "5581982258462"
     },
    "zy7kleu": { // 97
        "vencimento": "16/05/2025",
        "telefone": "5561996161993"
     },
    "8a3c732": { // 98
        "vencimento": "01/05/2025",
        "telefone": "5561991025012"
     },
    "00e646": { // 99
        "vencimento": "03/05/2025",
        "telefone": "5581998295891"
     },
    "093925": { // 100
        "vencimento": "09/06/2025",
        "telefone": "5521964093836"
     },
    "anthony2022": { // 101
        "vencimento": "21/04/2025",
        "telefone": "5581996685782"
     },
    "6b19571m": { // 102
        "vencimento": "29/05/2025",
        "telefone": "5561996161993"
     },
    "73475t5": { // 103
        "vencimento": "18/05/2025",
        "telefone": "5521990947573"
     
     },
    "1214188": { // 53
        "vencimento": "02/06/2025",
        "telefone": "5571992336681"
     
     },
    "710690": { // 104
        "vencimento": "20/04/2025",
        "telefone": "5554984363796"                                   
        
    },
    
    // Outros clientes omitidos para brevidade...
};

// Variáveis para armazenar o estado da conversa
let aguardandoUsuario = false;
let aguardandoTelefone = false;
let consultandoVencimento = false;
let usuarioInformado = "";

// Função para converter uma data no formato dd/mm/yyyy para um objeto Date
function converterData(dataString) {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Os meses em JavaScript são indexados de 0 a 11
    const ano = parseInt(partes[2], 10);
    return new Date(ano, mes, dia);
}

// Função para definir respostas do chatbot
function getBotResponse(userInput) {
    userInput = userInput.trim().toLowerCase();

    // Verifica se o cliente está no processo de recuperação de senha
    if (aguardandoUsuario) {
        usuarioInformado = userInput; // Armazena o nome de usuário
        aguardandoUsuario = false;
        aguardandoTelefone = true;
        return "Agora informe o número do telefone associado a este usuário com o código do país na frente 55. Exemplo: <span style='color: blue;'>5581988776655</span>";
    }

    if (aguardandoTelefone) {
        aguardandoTelefone = false;

        // Verifica se o nome de usuário existe no banco de dados de clientes
        if (clientes[usuarioInformado] || clientesVencimento[usuarioInformado]) {
            let cliente = clientes[usuarioInformado] || clientesVencimento[usuarioInformado];
            // Verifica se o telefone informado corresponde ao do banco de dados
            if (cliente.telefone === userInput) {
                // Se estiver consultando vencimento
                if (consultandoVencimento) {
                    if (clientesVencimento[usuarioInformado]) {
                        let dataAtual = new Date();
                        let dataVencimento = converterData(clientesVencimento[usuarioInformado].vencimento);
                        
if (dataAtual > dataVencimento) {
return `A assinatura deste usuário está vencida desde <span id="vencido">${clientesVencimento[usuarioInformado].vencimento}.</span> caso queira reativar favor entrar em contato com o nosso suporte: 👉<a href='https://wa.me/5581982258462?text=*Olá, Gostaria de renovar meu usuário*' target='_blank'>Suporte</a>`;

       } else {
    return `A sua assinatura está válida até o dia <span id="ativo">${clientesVencimento[usuarioInformado].vencimento}</span>`;
}
                 
} else {
return "Não foi possível encontrar informações de vencimento para este cliente.";
                    }
                }                     

                if (clientes[usuarioInformado]) {
                    let senhaDescriptografada = descriptografar(clientes[usuarioInformado].senha);
                    let whatsappLink = `https://wa.me/${cliente.telefone}?text=Link%20de%20acesso%20ao%20painel:%20https://cms.getu9.online/%0A%0A%0A%0AUsuário:%20${usuarioInformado}%0A%0ASenha:%20${senhaDescriptografada}`;
                    return `Tudo certo. Clique no link para receber seu usuário e senha via WhatsApp: <br>👉<a href='${whatsappLink}' target='_blank'>Receber usuário e senha</a>`;
          }
                
            } else {
                return "O telefone informado não corresponde ao usuário fornecido. Limpe a conversa e atualize a página, e tente novamente, ou entre em contato com o suporte.";
            }
        } else {
            return "Nome de usuário desconhecido. Limpe a conversa e atualize a página, e tente novamente, ou entre em contato com o suporte.👉<a href='https://wa.me/5581982258462?text=*Olá, Gostaria de renovar meu usuário*' target='_blank'>Suporte</a>";
        }
    }

    // Verifica se a palavra-chave para recuperação de senha foi mencionada
    if (userInput.includes("esqueci a senha do painel") || userInput.includes("senha do painel") || userInput.includes("esqueci minha senha de acesso ao painel")) {
        aguardandoUsuario = true;
        return "Para recuperar seu usuário e senha do seu painel, por favor informe seu nome de usuário.";
    }

    // Verifica se a palavra-chave para consulta de vencimento foi mencionada
    if (userInput.includes("consultar vencimento") || userInput.includes("data de vencimento") ||
        userInput.includes("meu vencimento") ||
        userInput.includes("minha data de vencimento") ||
        userInput.includes("quando vence minha assinatura")) {
        aguardandoUsuario = true;
        consultandoVencimento = true;
        return "Para consultar a data de vencimento da sua assinatura, por favor informe seu nome de usuário.";
    }

    if (userInput.includes("tabela") || userInput.includes("tabela de preço") ||
        userInput.includes("tabela de credito")) {
        return "<img src='./img/tabela-revenda.jpg' alt='tabela de preço' class='img-quadrada' />";
    }
    
    // Saudações
    if (userInput.includes("bom dia")) {
        return "Bom dia! Como posso te ajudar?";
    } else if (userInput.includes("ok") ||
               userInput.includes("blz")) {
        return "Qualquer coisa é so falar. 👍😉";
    } else if (userInput.includes("boa tarde")) {
        return "Boa tarde! Em que posso te ajudar?";
    } else if (userInput.includes("boa noite")) {
        return "Boa noite! Como posso te ajudar?";
    } else if (userInput.includes("olá") || userInput.includes("ola") ||
userInput.includes("oi")) {
        return "Olá! Como posso te ajudar?";
    }
    
    if (userInput.includes("plano") || userInput.includes("planos") ||
userInput.includes("pacote") ||
userInput.includes("pacotes")) {
        return "Oferecemos diferentes planos de acordo com a quantidade de canais e qualidade de vídeo. Veja nossos planos: <br>👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("valor") || userInput.includes("preço")) {
        return "Oferecemos diferentes planos de acordo com a quantidade de canais e qualidade de vídeo. Veja nossos planos: <br>👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("quanto custa") || userInput.includes("custa")) {
        return "Oferecemos diferentes planos de acordo com a quantidade de canais e qualidade de vídeo. Veja nossos planos: <br>👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("aceita pix")) {
        return "Sim. Mais antes do pagamento gostariamos de te mandar um teste pra ver se vai funcionar direitinho no seu aparelho. Escolha um dos planos para voce fazer um teste de 6h de duração. <br>👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("teste para telefone") || userInput.includes("teste para celular") ||
   userInput.includes("quero um teste para meu celular")) {
        return "Ok. Se seu celular for <span style='color: red;'>Android</span> Clique no botão para baixar o aplicativo.<br>👉<a href='http://dl.ntdev.in/25563' target='_blank'>App android</a><br><br>Agora se for iPhone va na loja de aplicativos e baixe o aplicativo <br><span style='color: blue;'>iptv smarters player</span><br><br>";
        
    } else if (userInput.includes("quero testar")) {
        return "escolha seu plano para um teste de 6h. Assim que você escolher você será redirecionado para o suporte através do nosso WhatsApp, la ele vai te passar o aplicativo certo para seu aparelho.👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("como faço para testar") ||
            userInput.includes("testar")) {
        return "para testar é simples, entre na nossa pagina de planos, escolha seu plano para um teste de 6h. Assim que você escolher você será redirecionado para o suporte através do nosso WhatsApp, la ele vai te passar o aplicativo certo para seu aparelho.👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
        } else if (userInput.includes("como contratar") || userInput.includes("contratação") || userInput.includes("como faço para contratar") ||
userInput.includes("contratar")) {
        return "Você pode contratar nossos serviços diretamente pelo nosso suporte via WhatsApp. <br> 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Ver planos</a>";
        
    } else if (userInput.includes("tempo de teste") ||
        userInput.includes("quanto tempo de teste") ||
        userInput.includes("qual a duração do teste") ||
        userInput.includes("quantas horas de teste")) {
        return "O teste tem uma duração de 6h.";
        
        } else if (userInput.includes("cancelar") || userInput.includes("política de cancelamento") || userInput.includes("posso cancelar")) {
        return "Sim, você pode cancelar a contratação a qualquer momento. Nossa política de cancelamento permite reembolso de até 30% do valor pago.";
   
    } else if (userInput.includes("computador") || userInput.includes("pc") ||
userInput.includes("notbook") ||
userInput.includes("netbook")) {
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
        return "Funciona na Smartv-android, tvbox, Firestick, Computador, celular e tablet.";
        
    } else if (userInput.includes("tudo bem") || userInput.includes("como vai") || userInput.includes("como você está")) {
        return "Tudo bem, melhor que nunca! 😉";
   
    } else if (userInput.includes("tvbox") || userInput.includes("tv box")) {
    return `
    Preencha o nome de usuário e senha da sua preferência para o suporte criar seu teste. Se o teste não for para Tvbox Especifique isso em observação, para qual aparelho vai ser o teste, se é para Tvbox, firestick, Smartv-Lg, Smartv-Samsung, Smartv-Android ou outros. 
    <form id="testForm">
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required maxlength="8"><br><br>
        
        <label for="message">Observação:</label>
        <textarea id="message" name="message" placeholder="Exe: Teste para Tvbox" required></textarea><br><br>

        <button type="button" onclick="sendFormToWhatsApp()">Enviar para o Suporte</button>
    </form>`;
 
} else if (userInput.includes("compatível") || userInput.includes("tv")) {
    return "Nosso serviço é compatível com a maioria das TVs Smart, Tvbox, Firestick, entre outros. Se quiser ter certeza, podemos te passar um teste gratuito de 6 horas.";
        
        } else if (userInput.includes("velocidade") || userInput.includes("minima")) {
    return "Recomendamos uma conexão de pelo menos 10 Mbps para que o serviço funcione sem interrupções.";
    
} else if (userInput.includes("fhd") || userInput.includes("4k")) {
    return "Sim, nosso serviço oferece conteúdo em 4K e FHD, desde que sua TV e conexão de Internet suportem essa resolução.";
    
    } else if (userInput.includes("qualidade") || userInput.includes("imagem")) {
    return "nosso serviço oferece conteúdos em SD, HD, FHD e 4K, dependendo do plano escolhido e da sua conexão de internet. Trabalhamos com esses planos: <br> 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Planos</a>";
    
    } else if (userInput.includes("sem internet") || userInput.includes("pega offline") ||
userInput.includes("pega off-line")) {
    return "Infelizmente, o aplicativo não funciona offline. Você precisa de uma conexão ativa à Internet para acessar o conteúdo.";
    
    } else if (userInput.includes("bloquear") || userInput.includes("conteudo adulto") ||
userInput.includes("conteúdos adultos") ||
userInput.includes("remover")) {
    return "Sim, você pode ativar o controle parental para bloquear conteúdo adulto. Basta acessar as configurações do aplicativo. ou entrar em contato com nosso suporte para que ele remova os conteúdos adultos. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20gostaria%20de%20remover%20os%20conte%C3%BAdos%20adultos*' target='_blank'>Clique aqui</a>";
    
} else if (userInput.includes("preciso") || userInput.includes("atualizar app")) {
    return "Recomendamos manter o aplicativo sempre atualizado para garantir a melhor experiência. Você será notificado sempre que houver uma nova versão.";
        
    } else if (userInput.includes("informações") || userInput.includes("detalhes") ||
userInput.includes("como funciona")) {
        return "Funciona da seguinte forma... você baixa o aplicativo no seu aparelho, seja ele Tvbox, Firestick ou Smartv. Te mandamos um usuário e senha com o teste de 6h de duração, caso goste, te enviamos os dados para pagamento via PIX. Já te adiantando, trabalhamos com esses planos. 👉<a href='https://brunopeace.github.io/plano/' target='_blank'>Planos</a>";
        
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
        return "Aqui você encontra todos os Nossos aplicativos para smartv, tvbox, Firestick, Computador, tablet e celular. <br> 👉<a href='https://brunopeace.github.io/Paineldeapps/' target='_blank'>Loja de aplicativos</a>";
        
        } else if (userInput.includes("link de acesso ao painel") || userInput.includes("link do painel")) {
        return "Aqui está seu link de acesso ao seu painel. 👉 <span style='color: blue;'>https://cms.getu9.online/</span><br><img src='./img/painel.jpg' alt='tabela de preço' class='img-painel' />";        
               
        } else if (userInput.includes("esqueci a senha") || userInput.includes("senha") ||
userInput.includes("usuario") ||
userInput.includes("usuário") ||
userInput.includes("esqueci meu usuario e senha")) {
    return "Caso tenha esquecido sua senha do aplicativo, podemos te ajudar a recuperá-la. Entre em contato com nosso suporte para receber as instruções.<br>👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20esqueci%20meu%20usu%C3%A1rio%20e%20senha%2C%20poderia%20me%20enviar%20por%20favor%20%3F*' target='_blank'>Suporte</a>";
        
        } else if (userInput.includes("painel")) {
        return "você ja é nosso revendedor? digite <span style='color: blue;'>link do painel</span> que te envio, caso nao seja e quer ser um revendedor digite <span style='color: blue;'>revendedor</span>";     
        
        } else if (userInput.includes("dns")) {
        return "                                                                <span style='color: red;'>📌DNS´s✅</span> <hr>      DNS XCLOUD: <br>                                         <span style='color: blue;'>Union10</span>         <hr>       DNS SMARTERS PLAYER: <br>                                      <span style='color: blue;'>http://xpn01.xyz</span>   <hr>                      DNS XCIPTV 1: <br>                                   <span style='color: blue;'>https://srv01.top</span>     <hr>                                                    DNS XCIPTV 2: <br>                                   <span style='color: blue;'>https://sr.xdriver01.xyz</span>                             <hr>                                                   DNS STB V3 BR: <br>                                                 <span style='color: blue;'>209.14.71.101</span>                                                             <hr>                                                         EPG: <br>                                                <span style='color: blue;'>https://abre.ai/u9epg1</span><hr>                                                                                   Webplayer: <br>                                          <span style='color: blue;'>http://unionplayer.xyz</span>              ";

        } else if (userInput.includes("reativar") || userInput.includes("renovar") || userInput.includes("ativação") ||
           userInput.includes("ativar") ||
           userInput.includes("chave pix") ||
           userInput.includes("seu pix")) {
    return `<img src="./img/chavepix.jpg" alt="Descrição da Imagem" style="max-width: 100%; height: auto;"> <br>Ola, segue aqui meu PIX EMAIL: <span style='color: blue;'>brunopeaceandlove60@gmail.com</span> ou Pix Celular: <span style='color: red;'>81982258462</span> após fazer o pagamento envie o comprovante para nosso suporte para eles poder fazer sua ativação 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20fiz%20o%20pagamento%20poderia%20ativar%20meu%20acesso%20por%20favor*' target='_blank'>Enviar comprovante</a>`;
        
    } else if (userInput.includes("iptv") || userInput.includes("canais") ||
userInput.includes("teste")) {
        return "Você usa Tvbox, Firestick ou Smartv?";
              
    } else if (userInput.includes("firestick") || userInput.includes("firestik")) {
        return "Certo. No seu Firestick baixe o aplicativo, <span style='color: blue;'>Downloader</span> na Playstore, Depois de baixado abra ele e coloque esse código: <span style='color: red;'>103582</span> depois entre em contato com nosso suporte através do WhatsApp, la ele vai te enviar seu usuário e senha para voce adicionar no aplicativo. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20j%C3%A1%20baixei%20o%20aplicativo*' target='_blank'>WhatsApp</a>";
        
    } else if (userInput.includes("android") || userInput.includes("panasonic")) {
        return "Certo. Na sua smartv android, baixe o aplicativo <span style='color: blue;'>ntDown</span> na Playstore, Depois de baixado abra ele e coloque esse código: <span style='color: red;'>95954</span> depois entre em contato com nosso suporte através do WhatsApp, la ele vai te enviar seu usuário e senha para voce adicionar no aplicativo. 👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20j%C3%A1%20baixei%20o%20aplicativo*' target='_blank'>WhatsApp</a>";
        
    } else if (userInput.includes("samsung") || userInput.includes("lg")) {
        return "Ok. entre na loja de aplicativos e baixe o aplicativo <span style='color: blue;'>IPTV SMARTERS PLAYER</span> abra ele e na primeira opção coloque qualquer nome que quiser. agora coloque este link: <span style='color: red;'>http://p88.site</span> na ultima opção.<br><br> Agora se voce instalou o aplicativo <span style='color: blue;'>LAZER PLAYER</span> abra ele clique em playlist e no código coloque:  <span style='color: red;'>K24bohu5</span> na primeira opção. agora é so entrar em contato com nosso suporte através do WhatsApp, la ele vai te enviar o usuário e senha para voce adicionar no aplicativo. <br>👉<a href='https://wa.me/5581982258462?text=*Ol%C3%A1%2C%20j%C3%A1%20baixei%20o%20aplicativo*' target='_blank'>WhatsApp</a>";
    }        

    return "Desculpe, não entendi sua pergunta. Pode reformular?";
}

// Função para simular o chatbot
function simularChatbot(mensagemUsuario) {
    const respostaBot = getBotResponse(mensagemUsuario);
    document.getElementById("chat-container").innerHTML += `<p>Usuário: ${mensagemUsuario}</p><p>Bot: ${respostaBot}</p>`;
}

// Função para enviar o formulário para o WhatsApp
function sendFormToWhatsApp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Formata a mensagem que será enviada
    var whatsappMessage = `*Usuário*: ${username}\n\n*Senha*: ${password}\n\n*Observação*: ${message}`;

    var whatsappNumber = "5581982258462";
    var url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = url;
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
// Abrir e fechar o modal do tutorial
document.addEventListener("DOMContentLoaded", function () {
    let openBtn = document.getElementById("openTutorialBtn");
    let modal = document.getElementById("tutorialModal");
    let closeBtn = document.querySelector(".close");

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    } else {
        console.error("Erro: Elementos do modal não encontrados.");
    }
});
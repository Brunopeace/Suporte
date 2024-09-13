#testForm {
    width: 80%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
}

#testForm label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

#testForm input[type="text"],
#testForm input[type="password"],
#testForm textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #fff;
    transition: border-color 0.3s;
}

#testForm input[type="text"]:focus,
#testForm input[type="password"]:focus,
#testForm textarea:focus {
    border-color: #007BFF;
    outline: none;
}

#testForm textarea {
    height: 80px;
    resize: vertical;
}

#testForm button {
    font-weight: bold;
    width: 100%;
    padding: 12px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#testForm button:hover {
    background-color: #00ba1f;
}


body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f1f8e9;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out;
}

header {
    width: 100%;
    height: 100px;
    background-color: #007BFF;
    color: #ffffff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #0056b3;
    position: absolute;
    z-index: 10;
}

.img-quadrada {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

#logo { 
    max-width: 200px;
    height: 180px;
}

#background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    pointer-events: none;
}

a {
    background: linear-gradient(45deg, #43A047, #66BB6A);
    color: #ffffff;
    font-weight: bold;
    border-radius: 5px;
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

a:hover {
    background: linear-gradient(45deg, #388E3C, #43A047);
    color: #c8e6c9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

#chat-container {
    width: 100%;
    max-width: 450px;
    border-radius: 15px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Mantém os botões e a caixa de input no final */
    height: 100%; /* Ocupa toda a altura disponível */
    max-height: 100vh; /* Evita que o chat cresça além da tela */
    padding-top: 100px; /* Evita que o conteúdo fique muito baixo */
    position: relative;
    z-index: 3;
}

#output {
    font-weight: bold;
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    position: relative;
    max-height: calc(100vh - 150px);
}

#userInputContainer {
    display: flex;
    padding: 15px;
    position: sticky;
    bottom: 0;
    z-index: 2;
    margin-top: 100px;
}

#userInput {
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none; /* Remove a opção de redimensionamento */
  overflow-y: hidden; /* Esconde a barra de rolagem vertical */
  box-sizing: border-box;
}

#userInput:focus {
  outline: none;
  border-color: #66afe9;
  box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
}

#sendBtn {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 7px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

#sendBtn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

#clearBtn {
    background: #E53F51;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 18px;
    margin-left: 7px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

#clearBtn:hover {
    background: #c62828;
    transform: scale(1.05);
}

@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.message {
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 15px;
    line-height: 1.6;
    transition: background-color 0.3s ease-in-out;
    animation: slideIn 0.5s ease-out;
}

.user-message {
    background: #007BFF;
    color: white;
    align-self: flex-end;
    border-top-right-radius: 0;
}

.bot-message {
    background: #eceff1;
    color: #333;
    align-self: flex-start;
    border-top-left-radius: 0;
}

.hidden-message {
    display: none;
}

/* Estilos responsivos */
@media (max-width: 500px) {
    #chat-container {
        width: 100%;
        max-width: 100%;
        border-radius: 0;
        box-shadow: none;
    }

    #userInput {
        padding: 10px;
    }

    #sendBtn, #clearBtn {
        padding: 10px;
    }

    .message {
        padding: 12px;
    }

    header {
        font-size: 18px;
        height: 80px;
    }
}
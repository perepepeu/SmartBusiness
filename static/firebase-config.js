// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCm00J9vJSwnUjAdJDgfFCISitQBTpWmNM",
    authDomain: "smartbusiness-ca3f9.firebaseapp.com",
    projectId: "smartbusiness-ca3f9",
    storageBucket: "smartbusiness-ca3f9.firebasestorage.app",
    messagingSenderId: "419276974022",
    appId: "1:419276974022:web:413ac5aa1669335f93f4c7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore para ser usado em outros arquivos
export const db = getFirestore(app);
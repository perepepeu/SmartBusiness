// Importa o Firestore do arquivo de configuração do Firebase
import { db } from "./firebase-config.js";

// Exemplo de funcionalidade: Carregar dados do Firestore
document.addEventListener("DOMContentLoaded", async () => {
    console.log("Site carregado!");

    // Exemplo de interação com o Firestore
    // Aqui você pode adicionar funcionalidades como leitura/escrita de dados
    try {
        console.log("Firebase configurado com sucesso!");
        // Adicione aqui suas interações com o Firestore
    } catch (error) {
        console.error("Erro ao interagir com o Firebase:", error);
    }
});

// Função para verificar se o usuário está logado
export function isLoggedIn() {
    return document.cookie.split("; ").some((cookie) => cookie.startsWith("loggedIn=true"));
}

// Função para logout
export function logout() {
    document.cookie = "loggedIn=; path=/; max-age=0"; // Remove o cookie
    window.location.href = "../../index.html"; // Redireciona para index.html
}
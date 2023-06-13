// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // A chave de API é um identificador exclusivo que autentica as solicitações feitas ao Firebase.
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // O domínio de autenticação é usado para autenticar usuários em seu aplicativo.
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // O ID do projeto é um identificador exclusivo para o seu projeto Firebase.
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // O bucket de armazenamento é usado para armazenar e recuperar arquivos estáticos
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SANDER_ID, // Identifica exclusivamente o remetente de mensagens do seu aplicativo e é necessário para enviar mensagens aos usuários.
  appId: import.meta.env.VITE_FIREBASE_APP_ID, // Identificar meu APP nas cominuições com firebase
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };

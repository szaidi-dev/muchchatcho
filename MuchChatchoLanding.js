import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-9jUD3zpeA0bcWsubo4iPYYbEsomEt9Y",
  authDomain: "muchchatcho.firebaseapp.com",
  projectId: "muchchatcho",
  storageBucket: "muchchatcho.firebasestorage.app",
  messagingSenderId: "495692906200",
  appId: "1:495692906200:web:4f917d39e7f64498b2a1ad",
  measurementId: "G-XFCCSPH274"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function MuchChatchoLanding() {
  const [pseudo, setPseudo] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== "" && pseudo.trim() !== "") {
      push(ref(database, "chat"), {
        text: message,
        pseudo,
        avatar: avatar ? URL.createObjectURL(avatar) : null,
        timestamp: Date.now()
      });
      setMessage("");
    }
  };

  useEffect(() => {
    const chatRef = ref(database, "chat");
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const parsed = data ? Object.values(data).sort((a, b) => a.timestamp - b.timestamp) : [];
      setChat(parsed);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col items-center justify-center px-4 text-center font-sans">
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-2xl border border-gray-200">

        <img src="/A_logo_for_%22MuchChatcho%22_features_bubble-like_elem.png" alt="MuchChatcho logo" className="w-32 mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-pink-600 mb-4">MuchChatcho</h1>
        <p className="text-lg text-gray-700 mb-6">
          Le plaisir de tchatcher comme avant. Rejoins des discussions anonymes, bienveillantes et vivantes.
        </p>

        <input
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          placeholder="Choisis un pseudo..."
          className="mb-4 w-full p-3 border border-gray-300 rounded-lg"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="mb-4 w-full p-3 border border-gray-300 rounded-lg"
        />

        <div className="bg-gray-100 p-4 rounded-xl mb-6 max-h-60 overflow-y-auto text-left">
          {chat.map((msg, idx) => (
            <div key={idx} className="mb-2 text-gray-800 flex items-center gap-2">
              {msg.avatar && <img src={msg.avatar} alt="avatar" className="w-6 h-6 rounded-full" />}
              <span><span className="font-bold text-pink-600">{msg.pseudo || "Anonyme"}:</span> {msg.text}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tape ton message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg"
          />
          <button
            onClick={sendMessage}
            className="bg-pink-500 text-white px-4 rounded-lg hover:bg-pink-600"
          >
            Envoyer
          </button>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Fonctionnalités à venir :</strong> salons à thème, tchats 1-to-1, filtres d’affinité, IA compagnon, audio live.</p>
          <p className="text-xs text-red-600">🚨 En utilisant MuchChatcho, tu confirmes avoir plus de 18 ans.</p>
          <p className="text-xs">🧠 Règles de la communauté : Respect, bienveillance, pas de contenu offensant ou illégal. Tout manquement pourra entraîner une exclusion immédiate.</p>
        </div>
      </div>
    </div>
  );
}
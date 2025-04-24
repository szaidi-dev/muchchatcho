import React from "react";

export default function MuchChatchoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center space-y-6">
        <img src="/A_logo_for_%22MuchChatcho%22_features_bubble-like_elem.png" alt="MuchChatcho logo" className="w-20 mx-auto" />
        <h1 className="text-4xl font-extrabold text-pink-600">MuchChatcho</h1>
        <p className="text-gray-600 text-lg">Discussions spontanées. Anonymes. Bienveillantes. Rejoins la conversation maintenant.</p>

        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition">
          🎤 Rejoindre un salon
        </button>

        <div className="text-sm text-gray-400 pt-6 border-t">
          <p>🚨 Réservé aux personnes de plus de 18 ans.</p>
          <p>💬 Règles : respect, anonymat, aucun contenu offensant.</p>
        </div>
      </div>
    </div>
  );
}
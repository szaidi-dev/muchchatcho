import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col items-center justify-start px-6 py-12">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-2">MuchChatcho</h1>
        <p className="text-gray-600 text-lg">Connecte-toi à des salons actifs, choisis ta région, et entre dans la vibe.</p>
      </header>

      <div className="w-full max-w-4xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <label className="font-medium text-gray-700">📍 Région :</label>
          <select className="border border-gray-300 rounded-lg p-2 mt-2 md:mt-0 md:ml-4">
            <option>Paris</option>
            <option>Lyon</option>
            <option>Marseille</option>
            <option>Genève</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
            <h2 className="font-bold text-pink-600 text-lg">🎤 Salon “Insomnie Club”</h2>
            <p className="text-gray-500 text-sm">12 personnes connectées</p>
            <button className="bg-pink-500 text-white rounded-full py-2 mt-2 hover:bg-pink-600 transition">Rejoindre</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
            <h2 className="font-bold text-indigo-600 text-lg">💬 Salon “Discussions chill”</h2>
            <p className="text-gray-500 text-sm">26 personnes connectées</p>
            <button className="bg-indigo-500 text-white rounded-full py-2 mt-2 hover:bg-indigo-600 transition">Rejoindre</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
            <h2 className="font-bold text-teal-600 text-lg">🧠 Salon “Débats ouverts”</h2>
            <p className="text-gray-500 text-sm">8 personnes connectées</p>
            <button className="bg-teal-500 text-white rounded-full py-2 mt-2 hover:bg-teal-600 transition">Rejoindre</button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
            <h2 className="font-bold text-yellow-600 text-lg">😂 Salon “Pour rigoler”</h2>
            <p className="text-gray-500 text-sm">34 personnes connectées</p>
            <button className="bg-yellow-400 text-white rounded-full py-2 mt-2 hover:bg-yellow-500 transition">Rejoindre</button>
          </div>
        </div>
      </div>

      <footer className="text-xs text-gray-400 mt-12">
        🚨 Réservé aux 18+ • Respect et bienveillance obligatoires
      </footer>
    </div>
  );
}
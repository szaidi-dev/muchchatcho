import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-9jUD3zpeA0bcWsubo4iPYYbEsomEt9Y",
  authDomain: "muchchatcho.firebaseapp.com",
  projectId: "muchchatcho",
  storageBucket: "muchchatcho.firebasestorage.app",
  messagingSenderId: "495692906200",
  appId: "1:495692906200:web:4f917d39e7f64498b2a1ad",
  measurementId: "G-XFCCSPH274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [ageFilter, setAgeFilter] = useState("");
  const [themeFilter, setThemeFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const salons = [
    { name: "Insomnie Club", participants: 12, region: "Paris", theme: "Musique" },
    { name: "Débats Chilli", participants: 20, region: "Lyon", theme: "Éducation" },
    { name: "Discussions Sport", participants: 15, region: "Marseille", theme: "Sports" }
  ];

  const filteredSalons = salons.filter(salon => {
    return (ageFilter ? salon.ageGroup === ageFilter : true)
      && (themeFilter ? salon.theme === themeFilter : true)
      && (regionFilter ? salon.region === regionFilter : true);
  });

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-center">MuchChatcho</h1>
        <div className="mt-4">
          <select onChange={(e) => setAgeFilter(e.target.value)}>
            <option value="">Tranche d'âge</option>
            <option value="18-25">18 à 25 ans</option>
            <option value="26-35">26 à 35 ans</option>
            <option value="36-45">36 à 45 ans</option>
            <option value="46+">46 ans et plus</option>
          </select>

          <select onChange={(e) => setThemeFilter(e.target.value)}>
            <option value="">Thématique</option>
            <option value="Musique">Musique</option>
            <option value="Sport">Sport</option>
            <option value="Éducation">Éducation</option>
          </select>

          <select onChange={(e) => setRegionFilter(e.target.value)}>
            <option value="">Région</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
          </select>
        </div>

        <div className="mt-6">
          {filteredSalons.map(salon => (
            <div key={salon.name} className="border p-4 mt-2">
              <h2 className="text-xl font-bold">{salon.name}</h2>
              <p>Participants : {salon.participants}</p>
              <p>Thème : {salon.theme}</p>
              <p>Région : {salon.region}</p>
              <button onClick={() => alert('Rejoindre le salon')} className="bg-blue-500 text-white p-2 mt-2 rounded">Rejoindre</button>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
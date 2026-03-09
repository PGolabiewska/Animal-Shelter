import React, { useState } from 'react';
import PetCard from '../components/PetCard';
import { petsData } from '../data/pets';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // 1. Nowy stan dla kategorii (domyślnie 'Wszystkie')
  const [activeCategory, setActiveCategory] = useState('Wszystkie');

  const categories = [
    { label: 'Wszystkie', value: 'Wszystkie' },
    { label: 'Psy', value: 'Pies' },
    { label: 'Koty', value: 'Kot' }
  ];

  // 2. Podwójne filtrowanie: najpierw po kategorii, potem po nazwie
    const filteredPets = petsData.filter(pet => {
    const matchesCategory = activeCategory === 'Wszystkie' || pet.type === activeCategory;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-6">Znajdź zwierzaka</h1>
        
        {/* WYSZUKIWARKA */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Wpisz imię..."
            className="w-full px-6 py-3 rounded-2xl border-2 border-gray-100 focus:border-orange-500 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* PRZYCISKI KATEGORII */}
        <div className="flex justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-8 py-2.5 rounded-full font-bold transition-all ${
              activeCategory === cat.value 
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' 
              : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      </div>

      {/* LISTA WYNIKÓW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
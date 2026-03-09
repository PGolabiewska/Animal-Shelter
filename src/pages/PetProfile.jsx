import { useParams, Link } from 'react-router-dom';
import { petsData } from '../data/pets';

const PetProfile = () => {
  const { id } = useParams();
  const pet = petsData.find(p => p.id === parseInt(id));

  if (!pet) return <div className="p-10 text-center">Nie znaleziono zwierzaka! 🐾</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="text-orange-600 hover:underline mb-6 inline-block">← Wróć do listy</Link>
      <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-3xl shadow-xl">
        <img src={pet.img} alt={pet.name} className="w-full md:w-1/2 h-96 object-cover rounded-2xl" />
        <div className="flex-1">
          <h1 className="text-5xl font-black text-gray-900 mb-4">{pet.name}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">{pet.description}</p>
          <button className="mt-8 w-full py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600">
            Adoptuj mnie
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
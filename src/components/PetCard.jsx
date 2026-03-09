import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
    <img src={pet.img} alt={pet.name} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold">{pet.name}</h3>
      <p className="text-gray-500 mb-4">{pet.type} • {pet.age}</p>
      <Link 
        to={`/pet/${pet.id}`} 
        className="block text-center py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
      >
        Poznaj profil
      </Link>
    </div>
  </div>
);

export default PetCard;
const Card = ({ dog, toggleBan }) => {
  const breed = dog.breeds[0];

  return (
    <div className="card">
      <img src={dog.url} alt={breed.name} className="dog-image" />
      <ul>
        <li onClick={() => toggleBan(breed.name)}>
          🐾 <strong>Breed:</strong> {breed.name}
        </li>
        <li onClick={() => toggleBan(breed.origin)}>
          🌍 <strong>Origin:</strong> {breed.origin || 'Unknown'}
        </li>
        <li onClick={() => toggleBan(breed.temperament)}>
          😄 <strong>Temperament:</strong> {breed.temperament || 'N/A'}
        </li>
      </ul>
    </div>
  );
};

export default Card;

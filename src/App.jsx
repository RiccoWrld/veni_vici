import { useState } from 'react';
import Card from "./components/Card";
import BanList from "./components/BanList";
import './App.css';

const App = () => {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchDog = async () => {
    let valid = false;
    let data;

    while (!valid) {
      const res = await fetch('https://api.thedogapi.com/v1/images/search?has_breeds=true', {
        headers: {
          'x-api-key': apiKey,
        },
      });

      const json = await res.json();
      data = json[0];

      if (!data || !data.breeds || !data.breeds[0]) continue;

      const breed = data.breeds[0];
      const attrs = [breed.name, breed.origin, breed.temperament];
      const isBanned = attrs.some((attr) => attr && banList.includes(attr));

      if (!isBanned) {
        valid = true;
      }
    }

    setDog(data);
  };

  const toggleBan = (value) => {
    setBanList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="app">
      <h1>🐶 Discover a Dog!</h1>
      <button onClick={fetchDog}>Discover</button>
      {dog && <Card dog={dog} toggleBan={toggleBan} />}
      <BanList banList={banList} toggleBan={toggleBan} />
    </div>
  );
};

export default App;


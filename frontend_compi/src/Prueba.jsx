import { useEffect, useState } from 'react';
import Carousel from './components/DatosInicio/Carousel';
function Prueba() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://backend-api-compilando.vercel.app/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Carousel />
      <h1>React y Flask</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <ul>
            {data.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Prueba;

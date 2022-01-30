import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const RQSuperHeroes = () => {
  const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes);

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      <h2>RQ Super Heroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;

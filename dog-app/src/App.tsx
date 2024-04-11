import { useEffect, useState } from "react";
import { getBreedsCount } from "./components/DogService";
import DogList from "./components/DogList";

function App() {
  const [breedsCount, setBreedsCount] = useState(0);

  useEffect(() => {
    getBreedsCount().then((result) => {
      setBreedsCount(result);
    });
  }, []);

  return (
    <>
      <DogList breedCount={breedsCount}></DogList>
    </>
  );
}

export default App;

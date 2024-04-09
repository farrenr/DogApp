import { useState } from "react";
import DogList from "./components/DogList";
import { getBreeds } from "./components/DogService";

function App() {
  const [breeds, setDogBreeds] = useState([] as Breed[]);

  const breedsResponse = getBreeds(); // TODO this is called multiple times when rendering
  breedsResponse.then((breedsResult) => setDogBreeds(breedsResult));

  return (
    <>
      <DogList breeds={breeds}></DogList>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { getBreedsByPage } from "./DogService";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Pagination,
} from "@mui/material";

interface Props {
  breedCount: number;
}

function DogList({ breedCount }: Props) {
  const pageSize = 10;
  const numPages = Math.ceil(breedCount / pageSize);
  const [breeds, setDogBreeds] = useState([] as Breed[]);

  useEffect(() => {
    const breedsResponse = getBreedsByPage(pageSize);
    breedsResponse.then((breedsResult) => setDogBreeds(breedsResult));
  }, []);

  const [page, setPage] = useState(1);
  const handleChange = (event, value: number) => {
    const breedsResponse = getBreedsByPage(pageSize, value - 1);
    breedsResponse.then((breedsResult) => setDogBreeds(breedsResult));
    setPage(value);
  };

  return (
    <Grid>
      <List>
        {breeds.length === 0 && "No breeds to show"}
        {breeds.map((breed) => (
          <>
            <ListItem key={breed.id}>
              <ListItemText primary={breed.name} />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
      <Pagination count={numPages} page={page} onChange={handleChange} />
    </Grid>
  );
}

export default DogList;

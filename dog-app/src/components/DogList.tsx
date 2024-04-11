import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { getBreeds } from "./DogService";

function DogList() {
  const [breeds, setDogBreeds] = useState([] as Breed[]);

  useEffect(() => {
    const breedsResponse = getBreeds();
    breedsResponse.then((breedsResult) => setDogBreeds(breedsResult));
  }, []);

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
    </Grid>
  );
}

export default DogList;

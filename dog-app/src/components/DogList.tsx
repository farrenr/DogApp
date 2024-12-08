import { useEffect, useState } from "react";
import { getBreedsByPage } from "./DogService";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DogCard from "./DogCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function DogList() {
  const pageSize = 10;
  const [breeds, setDogBreeds] = useState([] as Breed[]);

  useEffect(() => {
    const breedsResponse = getBreedsByPage(pageSize, 0);
    breedsResponse.then((breedResult) => setDogBreeds(breedResult));
  }, []);

  return (
    <Grid container spacing={4}>
      {breeds.length === 0 && "No breeds to show"}
      {breeds.map((breed) => (
        <Grid key={breed.id} size={3}>
          <Item>
            <DogCard
              id={breed.id}
              name={breed.name}
              image_ref={breed.reference_image_id}
            />
            <Divider component="li" />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default DogList;

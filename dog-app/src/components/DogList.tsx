import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";

interface Props {
  breeds: Breed[];
}

function DogList({ breeds }: Props) {
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

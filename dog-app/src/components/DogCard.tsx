import { useEffect, useState } from "react";
import { getImageByImageRef } from "./DogService";
import { ListItem, ListItemText } from "@mui/material";

interface Props {
  id: number;
  name: string;
  image_ref: string;
}

function DogCard({ id, name, image_ref }: Props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageResponse = getImageByImageRef(image_ref);
    imageResponse.then((imageResult) => {
      setImageUrl(imageResult.url);
    });
  });

  return (
    <>
      <ListItem key={id}>
        <ListItemText primary={name} />
      </ListItem>
      <div className="dogCardPic">
        {imageUrl == "" && "Loading..."}
        <img src={imageUrl} />
      </div>
    </>
  );
}

export default DogCard;

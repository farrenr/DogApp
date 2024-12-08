export async function getBreedsByPage(
  limit: number = 10,
  page: number = 0
): Promise<Breed[]> {
  let response = await fetch(
    "https://api.thedogapi.com/v1/breeds?limit=" + limit + "&page=" + page,
    {
      method: "GET",
    }
  );
  let responseJson = await response.json();
  return responseJson as Breed[];
}

// export function getBreedImagesByBreedIds(
//   breeds: number[]
// ): Promise<BreedImage[]> {
//   return fetch(
//     "https://api.thedogapi.com/v1/images?hasBreeds=" + breeds.join(","),
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       return response as BreedImage[];
//     })
//     .catch((error) => {
//       console.log("error", error);
//       return [];
//     });
// }

export async function getImageByImageRef(ref: string): Promise<BreedImage> {
  let response = await fetch("https://api.thedogapi.com/v1/images/" + ref, {
    method: "GET",
  });
  let responseJson = await response.json();
  return responseJson as BreedImage;
}

export function getBreeds(): Promise<Breed[]> {
  return fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response as Breed[];
    });
}

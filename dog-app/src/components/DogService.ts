export function getBreedsByPage(limit:number = 10, page:number = 0): Promise<Breed[]> {
  return fetch("https://api.thedogapi.com/v1/breeds?limit=" + limit +"&page=" + page, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response as Breed[];
    })
    .catch((error) => {
      console.log('error', error);
      return [];
    }); 
}

export function getBreedsCount(): Promise<number> {
  return fetch("https://api.thedogapi.com/v1/breeds", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return (response as Breed[]).length;
    })
    .catch((error) => {
      console.log('error', error);
      return 0;
    }); 
}

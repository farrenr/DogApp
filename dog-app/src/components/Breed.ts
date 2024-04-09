interface Breed {
  id: number;
  name: string;
  bred_for: string;
  breed_group: "Toy" | "Hound";
  life_span: number;
  temperament: string;
  origin: string;
  reference_image_id: string;
  weight: {
    imperial: number;
    metric: number;
  };
  height: {
    imperial: number;
    metric: number;
  };
}
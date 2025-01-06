export interface Image {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

export interface Service {
  name: string,
  shortDescription: string,
  longDescription: string,
  images: Image[]
}

import {IconDefinition} from '@fortawesome/angular-fontawesome';

export interface LinkLabelItem {
  link: string,
  label: string
}

export interface LinkIconItem {
  link: string,
  icon: IconDefinition
}

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

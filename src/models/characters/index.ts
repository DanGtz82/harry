export interface Wand {
    wood: string;
    core: string;
    lenght?: number;
  }
  
  export interface Character {
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number | string;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: Wand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
  }
  
import type { IPersonCardProps } from "../../types";

import stephen from "../../assets/images/stephen_collier.png"
import nolan from "../../assets/images/Nolan_Peters.png";
import ferris from "../../assets/images/Ferris_Wonder.png";
import aria from "../../assets/images/Aria_Stone.png";
import niko from "../../assets/images/Niko_Ferry.png";

export const team: IPersonCardProps[] = [
  {
    image: stephen,
    name: 'Stephen Collier',
    role: 'Senior Partner',
  },
  {
    image: nolan,
    name: 'Nolan Peters',
    role: 'Associate',
  },
  {
    image: ferris,
    name: 'Ferris Wonder',
    role: 'Associate Partner',
  },
  {
    image: aria,
    name: 'Aria Stone',
    role: 'Senior Partner',
  },
  {
    image: niko,
    name: 'Niko Ferry',
    role: 'Partner',
  },
]
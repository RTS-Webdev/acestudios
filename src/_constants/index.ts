export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  image?: string;
}

export const Slides = [
  {
    imageUrl: 'assets/plakat.png',
    date: '26 September 2024',
    title: 'OUR FIRST POSTER OF OUR NEW FILM "BLOODY PALS"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageUrl: 'assets/plakat 2.png',
    date: '1 October 2024',
    title: 'THE TRUTH BEHIND THE MOVIE "BLOODY PALS"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageUrl: 'assets/plakat 3.png',
    date: '26 September 2024',
    title: 'BLOODY PALS IS NOW AVAILABLE ON NETFLIX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageUrl: 'assets/plakat 4.png',
    date: '26 September 2024',
    title: 'PROMOTION CARD FOR OUR NEW FILM "BLOODY PALS"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const Movies = [
  {
    date: 'February 24, 2017',
    name: 'GET OUT',
    title: 'OUR MOST POPULAR FILM, A HUGE CULTURAL IMPACT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageUrl: 'movies/john-wick.jpg',
    date: 'October 24, 2014',
    name: 'JOHN WICK',
    title: 'A FAN FAVOURITE THAT GREW INTO A POPULAR FRANCHISE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    date: 'October 3, 2014',
    name: 'GONE GIRL',
    title: 'WIDELY ACCLAIMED AND COMMERCIALLY SUCCESSFUL MOVIE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    date: 'June 8, 2018',
    name: 'HEREDITARY',
    title: 'A MASTERPIECE OF HORROR AND THRILLER',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    date: 'January 22, 2010',
    name: 'TRUCKER AND DALE VS EVIL',
    title: 'A COMEDIC TWIST ON THE HORROR TROPE OF HILLBILLY KILLERS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const Members = [
  {
    image: 'about/erik.jpg',
    name: 'Erik',
    role: 'CEO',
  },
  {
    image: 'about/malak.jpg',
    name: 'Malak',
    role: 'Graphic Design Leader',
  },
  {
    image: 'about/mikkel.jpg',
    name: 'Mikkel',
    role: 'Lead Web Developer, Co-Script Writer',
  },
  {
    image: 'about/misha.jpg',
    name: 'Misha',
    role: 'Graphic Designer, Video Editor, Co-Script Writer',
  },
  {
    image: 'about/simon.jpg',
    name: 'Simon',
    role: 'Voice Actor, Team Leader, Lead Storyboard Writer, Lead Script Writer',
  },
  {
    image: 'about/smila.jpg',
    name: 'Smila',
    role: 'Graphic Designer & Animator',
  },
  {
    image: 'about/victor.jpg',
    name: 'Victor',
    role: 'Animator, Co-Storyboard Writer',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Tote Bag",
    price: 19.99,
    colors: ["white", "black"],
    image: "assets/totebag.png",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 39.99,
    colors: ["white", "black"],
    image: "assets/hoodie.png",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 19.99,
    colors: ["white", "black"],
    image: "assets/tshirt.png",
  },
  {
    id: 4,
    name: "Cap",
    price: 19.99,
    colors: ["white", "black"],
    image: "assets/cap.png",
  },
  {
    id: 5,
    name: "Cup",
    price: 19.99,
    colors: ["white", "black"],
    image: "assets/cup.png",
  },
  {
    id: 6,
    name: "Exclusive Bloody Pals T-Shirt",
    price: 21.99,
    colors: [],
    image: "assets/exclusive-tshirt.png",
  },  
]
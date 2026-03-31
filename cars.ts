export interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  image: string;
  category: string;
  engine: string;
  horsepower: number;
  topSpeed: string;
  acceleration: string;
  transmission: string;
  fuelType: string;
  description: string;
  featured: boolean;
  gallery: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Model S Plaid",
    brand: "Tesla",
    price: 108990,
    year: 2024,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    category: "Electric",
    engine: "Tri Motor Electric",
    horsepower: 1020,
    topSpeed: "200 mph",
    acceleration: "1.99s 0-60",
    transmission: "Single-Speed",
    fuelType: "Electric",
    description: "The fastest accelerating car in production. A revolutionary electric sedan with unmatched performance and cutting-edge technology.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80",
    ],
  },
  {
    id: 2,
    name: "911 GT3 RS",
    brand: "Porsche",
    price: 223800,
    year: 2024,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    category: "Sports",
    engine: "4.0L Flat-6",
    horsepower: 518,
    topSpeed: "184 mph",
    acceleration: "3.2s 0-60",
    transmission: "7-Speed PDK",
    fuelType: "Gasoline",
    description: "Born on the racetrack, perfected for the road. The 911 GT3 RS is the ultimate expression of Porsche performance engineering.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
  },
  {
    id: 3,
    name: "AMG GT Black Series",
    brand: "Mercedes",
    price: 325000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    category: "Sports",
    engine: "4.0L V8 Biturbo",
    horsepower: 720,
    topSpeed: "202 mph",
    acceleration: "3.1s 0-60",
    transmission: "7-Speed DCT",
    fuelType: "Gasoline",
    description: "The most powerful AMG V8 series production engine ever. A masterpiece of engineering and aggressive design.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    ],
  },
  {
    id: 4,
    name: "M8 Competition",
    brand: "BMW",
    price: 130000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    category: "Luxury",
    engine: "4.4L V8 TwinTurbo",
    horsepower: 617,
    topSpeed: "190 mph",
    acceleration: "3.0s 0-60",
    transmission: "8-Speed Auto",
    fuelType: "Gasoline",
    description: "The ultimate grand tourer. Combining luxury, technology, and breathtaking performance in one stunning package.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    ],
  },
  {
    id: 5,
    name: "R8 V10 Performance",
    brand: "Audi",
    price: 196700,
    year: 2024,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
    category: "Sports",
    engine: "5.2L V10",
    horsepower: 602,
    topSpeed: "205 mph",
    acceleration: "3.1s 0-60",
    transmission: "7-Speed S tronic",
    fuelType: "Gasoline",
    description: "The everyday supercar. A naturally aspirated V10 masterpiece delivering raw emotion and precision handling.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
    ],
  },
  {
    id: 6,
    name: "Urus Performante",
    brand: "Lamborghini",
    price: 260676,
    year: 2024,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    category: "SUV",
    engine: "4.0L V8 TwinTurbo",
    horsepower: 666,
    topSpeed: "190 mph",
    acceleration: "3.3s 0-60",
    transmission: "8-Speed Auto",
    fuelType: "Gasoline",
    description: "The world's first Super Sport Utility Vehicle. Uncompromising Lamborghini performance in an SUV body.",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
  },
  {
    id: 7,
    name: "F-150 Raptor R",
    brand: "Ford",
    price: 109145,
    year: 2024,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    category: "Truck",
    engine: "5.2L V8 Supercharged",
    horsepower: 720,
    topSpeed: "150 mph",
    acceleration: "3.7s 0-60",
    transmission: "10-Speed Auto",
    fuelType: "Gasoline",
    description: "The ultimate off-road performance truck. Desert-proven capability meets supercar-level power.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    ],
  },
  {
    id: 8,
    name: "Taycan Turbo S",
    brand: "Porsche",
    price: 187400,
    year: 2024,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    category: "Electric",
    engine: "Dual Motor Electric",
    horsepower: 750,
    topSpeed: "162 mph",
    acceleration: "2.4s 0-60",
    transmission: "2-Speed Auto",
    fuelType: "Electric",
    description: "Electric performance redefined. The Taycan combines Porsche's legendary dynamics with zero-emission driving.",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    ],
  },
];

export const categories = ["All", "Sports", "Luxury", "Electric", "SUV", "Truck"];
export const brands = ["All", ...Array.from(new Set(cars.map(c => c.brand)))];

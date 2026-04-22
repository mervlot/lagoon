export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Drinks';
  imageId: string;
};

export const menu: Dish[] = [
  {
    id: 'app1',
    name: 'Suya Skewers',
    description: 'Spicy grilled beef skewers, a classic Nigerian street food.',
    price: 15.0,
    category: 'Appetizers',
    imageId: 'dish-suya',
  },
  {
    id: 'app2',
    name: 'Moi Moi',
    description: 'Steamed bean pudding with a savory blend of peppers and onions.',
    price: 12.0,
    category: 'Appetizers',
    imageId: 'dish-moimoi',
  },
  {
    id: 'app3',
    name: 'Fried Plantain (Dodo)',
    description: 'Sweet, ripe plantains fried to golden perfection.',
    price: 8.0,
    category: 'Appetizers',
    imageId: 'dish-plantain',
  },
  {
    id: 'main1',
    name: 'Jollof Rice with Chicken',
    description:
      'The quintessential West African dish. Fragrant rice cooked in a rich tomato and pepper sauce.',
    price: 25.0,
    category: 'Main Courses',
    imageId: 'dish-jollof',
  },
  {
    id: 'main2',
    name: 'Grilled Tilapia & Yams',
    description:
      'Whole tilapia fish marinated in traditional spices and grilled, served with fried yam.',
    price: 30.0,
    category: 'Main Courses',
    imageId: 'dish-tilapia',
  },
  {
    id: 'main3',
    name: 'Egusi Soup with Pounded Yam',
    description:
      'A rich and savory soup made from ground melon seeds, spinach, and assorted meats.',
    price: 28.0,
    category: 'Main Courses',
    imageId: 'dish-egusi',
  },
  {
    id: 'des1',
    name: 'Puff Puff',
    description: 'Sweet, deep-fried dough balls, light and fluffy.',
    price: 10.0,
    category: 'Desserts',
    imageId: 'dish-puffpuff',
  },
  {
    id: 'des2',
    name: 'Chin Chin',
    description: 'Crunchy, sweet, fried pastry bites. Impossibly addictive.',
    price: 7.0,
    category: 'Desserts',
    imageId: 'dish-chinchin',
  },
  {
    id: 'dri1',
    name: 'Chapman',
    description:
      'A refreshing non-alcoholic punch, the signature cocktail of Nigeria.',
    price: 8.0,
    category: 'Drinks',
    imageId: 'dish-chapman',
  },
  {
    id: 'dri2',
    name: 'Zobo (Hibiscus) Drink',
    description:
      'A chilled drink made from dried hibiscus flowers, ginger, and pineapple.',
    price: 6.0,
    category: 'Drinks',
    imageId: 'dish-zobo',
  },
];

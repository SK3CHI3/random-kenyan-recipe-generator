export interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
  ratingCount: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Kenyan Githeri",
    image: "/placeholder.svg?height=300&width=400&text=Githeri",
    prepTime: 60,
    difficulty: 'Medium',
    category: "East African",
    description: "A traditional Kenyan dish made with maize and beans, often served as a main course.",
    ingredients: ["2 cups maize kernels", "2 cups beans", "1 onion, chopped", "2 tomatoes, diced", "2 cloves garlic, minced", "Salt and pepper to taste"],
    instructions: [
      "Soak the maize and beans overnight",
      "Boil the maize and beans until tender",
      "In a separate pan, sauté onions and garlic",
      "Add tomatoes and cook until soft",
      "Mix the sautéed vegetables with the boiled maize and beans",
      "Season with salt and pepper",
      "Simmer for 10 minutes and serve hot"
    ],
    rating: 4.5,
    ratingCount: 120
  },
  {
    id: 2,
    name: "Nigerian Jollof Rice",
    image: "/placeholder.svg?height=300&width=400&text=Jollof+Rice",
    prepTime: 45,
    difficulty: 'Medium',
    category: "West African",
    description: "A popular West African rice dish cooked in a flavorful tomato sauce.",
    ingredients: ["2 cups long-grain rice", "1 can crushed tomatoes", "1 onion, chopped", "2 cloves garlic, minced", "1 tsp thyme", "1 tsp curry powder", "1 cup vegetable oil", "Salt to taste"],
    instructions: [
      "Blend tomatoes, onions, and garlic into a smooth puree",
      "Heat oil in a large pot and fry the puree for 10-15 minutes",
      "Add spices and continue cooking for 5 minutes",
      "Add rice and stir until well coated",
      "Add 2 cups of water, cover and simmer for 30 minutes or until rice is cooked",
      "Fluff with a fork and serve hot"
    ],
    rating: 4.7,
    ratingCount: 200
  },
  {
    id: 3,
    name: "Ethiopian Doro Wat",
    image: "/placeholder.svg?height=300&width=400&text=Doro+Wat",
    prepTime: 90,
    difficulty: 'Hard',
    category: "East African",
    description: "A spicy Ethiopian chicken stew often served with injera bread.",
    ingredients: ["2 lbs chicken pieces", "4 onions, finely chopped", "1/4 cup niter kibbeh (spiced butter)", "3 tbsp berbere spice", "4 hard-boiled eggs", "2 lemons", "Salt to taste"],
    instructions: [
      "Marinate chicken in lemon juice for 30 minutes",
      "In a large pot, caramelize onions in niter kibbeh for 45 minutes",
      "Add berbere spice and cook for 5 minutes",
      "Add chicken and simmer for 40 minutes",
      "Add hard-boiled eggs and cook for 5 more minutes",
      "Serve hot with injera bread"
    ],
    rating: 4.8,
    ratingCount: 150
  },
  {
    id: 4,
    name: "South African Bobotie",
    image: "/placeholder.svg?height=300&width=400&text=Bobotie",
    prepTime: 75,
    difficulty: 'Medium',
    category: "South African",
    description: "A South African dish of spiced minced meat baked with an egg-based topping.",
    ingredients: ["2 lbs ground beef", "2 slices bread", "1 cup milk", "2 eggs", "1 onion, chopped", "2 tbsp curry powder", "1/4 cup raisins", "2 tbsp chutney", "Salt and pepper to taste"],
    instructions: [
      "Soak bread in milk, then mix with ground beef, onion, and spices",
      "Add raisins and chutney, mix well",
      "Place mixture in a baking dish",
      "Beat eggs with remaining milk and pour over the meat",
      "Bake at 350°F for 45 minutes or until set"
    ],
    rating: 4.6,
    ratingCount: 95
  },
  {
    id: 5,
    name: "Moroccan Tagine",
    image: "/placeholder.svg?height=300&width=400&text=Moroccan+Tagine",
    prepTime: 90,
    difficulty: 'Medium',
    category: "North African",
    description: "A fragrant Moroccan stew cooked in a special pot called a tagine.",
    ingredients: ["1 lb lamb or chicken, cubed", "1 onion, chopped", "2 carrots, sliced", "2 potatoes, cubed", "1 cup dried apricots", "1 can chickpeas", "2 tbsp ras el hanout spice mix", "1 cup chicken broth", "Salt to taste"],
    instructions: [
      "Brown meat in oil in the tagine base",
      "Add onions and spices, cook until fragrant",
      "Layer vegetables and apricots on top of the meat",
      "Add broth and chickpeas",
      "Cover and simmer for 1 hour",
      "Serve hot with couscous"
    ],
    rating: 4.5,
    ratingCount: 110
  },
  {
    id: 6,
    name: "Senegalese Thieboudienne",
    image: "/placeholder.svg?height=300&width=400&text=Thieboudienne",
    prepTime: 120,
    difficulty: 'Hard',
    category: "West African",
    description: "A flavorful Senegalese dish of fish, rice, and vegetables in a tomato sauce.",
    ingredients: ["1 lb white fish fillets", "2 cups broken rice", "1 can tomato paste", "2 onions, chopped", "2 carrots, cut into chunks", "1 eggplant, cubed", "1 cassava, peeled and cubed", "2 tbsp fish sauce", "2 bay leaves", "Salt and pepper to taste"],
    instructions: [
      "Marinate fish in lemon juice and spices",
      "Fry fish until golden and set aside",
      "In the same oil, cook onions and tomato paste",
      "Add vegetables and cook for 10 minutes",
      "Add rice, fish, and water, simmer until rice is cooked",
      "Serve hot with the vegetables arranged on top"
    ],
    rating: 4.7,
    ratingCount: 85
  },
  {
    id: 7,
    name: "Tanzanian Mchuzi wa Samaki",
    image: "/placeholder.svg?height=300&width=400&text=Mchuzi+wa+Samaki",
    prepTime: 40,
    difficulty: 'Medium',
    category: "East African",
    description: "A delicious Tanzanian fish curry with coconut milk.",
    ingredients: ["1 lb white fish fillets", "1 can coconut milk", "2 tomatoes, chopped", "1 onion, sliced", "2 cloves garlic, minced", "1 tbsp curry powder", "1 lemon", "Fresh cilantro", "Salt to taste"],
    instructions: [
      "Season fish with salt and lemon juice",
      "Fry onions and garlic until soft",
      "Add tomatoes and curry powder, cook for 5 minutes",
      "Pour in coconut milk and bring to a simmer",
      "Add fish and cook for 10 minutes",
      "Garnish with cilantro and serve with rice"
    ],
    rating: 4.6,
    ratingCount: 70
  },
  {
    id: 8,
    name: "Zimbabwean Sadza",
    image: "/placeholder.svg?height=300&width=400&text=Sadza",
    prepTime: 30,
    difficulty: 'Easy',
    category: "Southern African",
    description: "A staple food in Zimbabwe, similar to polenta, often served with stews or vegetables.",
    ingredients: ["2 cups white cornmeal", "4 cups water", "Salt to taste"],
    instructions: [
      "Bring 3 cups of water to a boil in a pot",
      "Mix 1 cup of cornmeal with 1 cup of cold water",
      "Slowly add the cornmeal mixture to the boiling water, stirring constantly",
      "Cook for 5 minutes, then gradually add the remaining cornmeal",
      "Stir vigorously and cook for another 5 minutes until thick",
      "Shape into a ball and serve hot"
    ],
    rating: 4.3,
    ratingCount: 60
  },
  {
    id: 9,
    name: "Egyptian Koshari",
    image: "/placeholder.svg?height=300&width=400&text=Koshari",
    prepTime: 60,
    difficulty: 'Medium',
    category: "North African",
    description: "A popular Egyptian street food dish made with rice, lentils, and pasta.",
    ingredients: ["1 cup rice", "1 cup brown lentils", "1 cup small pasta", "1 can chickpeas", "1 large onion, sliced", "2 cloves garlic, minced", "1 can tomato sauce", "Vegetable oil", "Salt and cumin to taste"],
    instructions: [
      "Cook rice, lentils, and pasta separately",
      "Make the tomato sauce: sauté garlic, add tomato sauce and cumin",
      "Fry onions until crispy for garnish",
      "Layer the rice, lentils, pasta, and chickpeas in a dish",
      "Top with tomato sauce and crispy onions",
      "Serve hot"
    ],
    rating: 4.5,
    ratingCount: 90
  },
  {
    id: 10,
    name: "Ghanaian Waakye",
    image: "/placeholder.svg?height=300&width=400&text=Waakye",
    prepTime: 90,
    difficulty: 'Medium',
    category: "West African",
    description: "A popular Ghanaian dish of rice and beans, often served with various accompaniments.",
    ingredients: ["2 cups rice", "1 cup black-eyed peas", "2 tbsp waakye leaves or 1 tsp baking soda", "1 onion, chopped", "2 cloves garlic, minced", "Salt to taste", "Accompaniments: fried plantains, boiled eggs, meat stew"],
    instructions: [
      "Soak black-eyed peas for 2 hours, then boil until tender",
      "In a large pot, combine rice, cooked beans, and waakye leaves or baking soda",
      "Add water, onions, garlic, and salt",
      "Cook until rice is tender and water is absorbed",
      "Serve hot with chosen accompaniments"
    ],
    rating: 4.7,
    ratingCount: 110
  }
]

